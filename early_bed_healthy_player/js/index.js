/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个歌词对象：
 * {time:开始时间, words: 歌词内容}
 */
function parseLrc() {
    var lines = lrc.split('\n');
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

// 进度条
let slider = document.getElementById("play_range");

slider.oninput = function () {
    console.log(this.value);
}

$(document).ready(function () {
    // 获取 audio 元素
    var audioElement = document.getElementById('musician');

    $('#play').click(function () {
        audioElement.play();
        $(this).hide();    // 隐藏播放按钮
        $('#pause').show(); // 显示暂停按钮
    });

    $('#pause').click(function () {
        audioElement.pause();
        $(this).hide();   // 隐藏暂停按钮
        $('#play').show(); // 显示播放按钮
    });

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
    // audioElement.currentTime = 0;  // 把播放位置重置到开头

    $('.playlist_play_icon').click(function () {
        console.log(this);
    });

    $('#playlist_down').click(function () {
        $("#playlist_panel").hide();
    });
});


// 地上的萤火虫 荧光点点
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 160, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {"value": 1, "random": true, "anim": {"enable": true, "speed": 1, "opacity_min": 0, "sync": false}},
        "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 4, "size_min": 0.3, "sync": false}},
        "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 600}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "bubble"},
            "onclick": {"enable": true, "mode": "repulse"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3},
            "repulse": {"distance": 400, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});


