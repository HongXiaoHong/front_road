/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个歌词对象：
 * {time:开始时间, words: 歌词内容}
 */
function parseLrc() {
    var lines = datas.lrc.split('\n');
    var result = []; // 歌词对象数组
    for (var i = 0; i < lines.length; i++) {
        var str = lines[i];
        var parts = str.split(']');
        var timeStr = parts[0].substring(1);
        var obj = {
            time: parseTime(timeStr),
            words: parts[1],
        };
        result.push(obj);
    }
    return result;
}

/**
 * 将一个时间字符串解析为数字（秒）
 * @param {String} timeStr 时间字符串
 * @returns
 */
function parseTime(timeStr) {
    var parts = timeStr.split(':');
    return +parts[0] * 60 + +parts[1];
}

var lrcData = parseLrc();

// 获取需要的 dom
var doms = {
    audio: document.querySelector('audio'),
    ul: document.querySelector('.container ul'),
    container: document.querySelector('.container'),
    voiceRange: document.getElementById('voice_range'),
    playlist_ul: document.getElementById('playlist'),
    playlist_choose_select: document.getElementById('playlist_choose'),
};

function getCurTime() {
    return doms.audio.currentTime;
}

/**
 * 计算出，在当前播放器播放到第几秒的情况下
 * lrcData数组中，应该高亮显示的歌词下标
 * 如果没有任何一句歌词需要显示，则得到-1
 */
function findIndex() {
    // 播放器当前时间
    var curTime = getCurTime();
    for (var i = 0; i < lrcData.length; i++) {
        if (curTime < lrcData[i].time) {
            return i - 1;
        }
    }
    // 找遍了都没找到（说明播放到最后一句）
    return lrcData.length - 1;
}

// 界面

/**
 * 创建歌词元素 li
 */
function createLrcElements() {
    var frag = document.createDocumentFragment(); // 文档片段
    for (var i = 0; i < lrcData.length; i++) {
        var li = document.createElement('li');
        li.textContent = lrcData[i].words;
        frag.appendChild(li); // 改动了 dom 树
    }
    doms.ul.appendChild(frag);
}

createLrcElements();

// 容器高度
var containerHeight = doms.container.clientHeight;
// 每个 li 的高度
var liHeight = doms.ul.children[0].clientHeight;
// 最大偏移量
var maxOffset = doms.ul.clientHeight - containerHeight;

function formatTime(timeInSeconds) {
    // 去掉小数点，只保留整数
    var seconds = Math.floor(timeInSeconds);

    // 计算分钟数和秒数
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    // 格式化为两位数
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
}

/**
 * 设置 ul 元素的偏移量
 */
function setOffset() {
    const curTime = getCurTime();
    $("#palyed_time").text(formatTime(curTime));
    $("#play_range").attr("value", 100 * (curTime / doms.audio.duration));
    var index = findIndex();
    var offset = liHeight * index + liHeight / 2 - containerHeight / 2;
    if (offset < 0) {
        offset = 0;
    }
    if (offset > maxOffset) {
        offset = maxOffset;
    }
    doms.ul.style.transform = `translateY(-${offset}px)`;
    // 去掉之前的 active 样式
    var li = doms.ul.querySelector('.active');
    if (li) {
        li.classList.remove('active');
    }

    li = doms.ul.children[index];
    if (li) {
        li.classList.add('active');
    }
}

doms.audio.addEventListener('timeupdate', setOffset);

$(document).ready(function () {
    // 获取 audio 元素
    var audioElement = document.getElementById('musician');
    const $playRange = $("#play_range"); // 进度条
    const $play = $('#play'); // 播放按钮
    const $pause = $('#pause');


    $playRange.on("input", (e) => {
        console.log(e.target.value);
    });

    const playSong = () => {
        audioElement.play();
        $play.hide();    // 隐藏播放按钮
        $pause.show(); // 显示暂停按钮
    }

    // 音乐表盘控制器播放按钮
    $play.click(playSong);

    const pauseSong = () => {
        audioElement.pause();
        $pause.hide();   // 隐藏暂停按钮
        $play.show(); // 显示播放按钮
    }

    // 暂停按钮
    $pause.click(pauseSong);

    $('#voice_open').click(function () {
        audioElement.muted = true;
        $(this).hide();    // 隐藏播放按钮
        $('#voice_off').show(); // 显示暂停按钮
    });

    $('#voice_off').click(function () {
        audioElement.muted = false;
        $(this).hide();   // 隐藏暂停按钮
        $('#voice_open').show(); // 显示播放按钮
    });

    $(doms.voiceRange).on("input", () => {
        // 把滑动条的值转换为0-1之间的值
        audioElement.volume = doms.voiceRange.value / 100;
    })

    function changeSong(songName) {
        audioElement.src = `http://localhost:8891/audio/${songName}?suffix=${datas.currentPlaylist[songName]}`;
        $playRange.attr("value", 0);
        const song_info = songName.split("-");
        $("#song_info span:first-child").text(song_info[0])
        $("#song_info span:last-child").text(song_info[1])
        playSong();
    }

// 监听#playlist下的所有.playlist_play_icon的click事件
    $("#playlist").on("click", ".playlist_play_icon", function () {
        // 这里的this指向被点击的.playlist_play_icon元素
        let songName = $(this).parent().next(".playlist_song_name").text();

        // 你可以在这里添加你的代码来处理点击事件，比如播放相应的音乐
        changeSong(songName);
    });


    $('#playlist_down').click(function () {
        $("#playlist_panel").removeClass("playlist_show");
    });

    $('#playlist_switch').click(function () {
        $("#playlist_panel").toggleClass("playlist_show");
    });

    $('#playlist_choose').change(function (e) {
        replacePlaylist(e.target.value);
    });


    refresh_playlist();
});
