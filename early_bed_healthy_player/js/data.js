var lrc = `[00:01.06]早睡身体好
[00:03.95]演唱：许嵩
[00:06.78]
[00:31.500]姑娘你看你
[00:34.430]一到家就哭泣
[00:37.660]为流言几句
[00:40.300]真的有点儿傻气
[00:44.770]你脑子聪明
[00:46.690]但躲不了世俗的雨
[00:50.780]“想开点”是我送你的雨衣
[00:57.940]他们太理性
[01:00.740]每秒都在权衡利弊
[01:03.590]你独自失语
[01:05.950]撑到坚强癌晚期
[01:10.590]夜色已浓郁
[01:12.610]耗着也不会有惊喜
[01:16.010]“快睡吧”是我善意的提醒
[01:23.010]早睡身体好 睡前别吃太饱
[01:29.460]早睡身体好 伤心容易感冒
[01:35.470]早睡身体好 有什么值得烦恼
[01:41.840]早睡身体好 明天还要起早
[02:13.690]不爱被问起
[02:16.820]那些终极命题
[02:20.440]夏虫不可语冰
[02:22.860]不仁的生存场域
[02:27.220]你脑子聪明
[02:29.270]总在替未来焦虑
[02:32.710]“歇着吧”是我送你的药剂
[02:39.250]三十楼望去
[02:42.200]街道上人如蝼蚁
[02:46.070]每个人都有
[02:48.370]各自的恐惧和野心
[02:52.980]死想要的 常常得不到
[02:55.460]不想了的时候哗哗哗都来了
[02:58.720]躺下吧 做些快乐的事情
[03:05.180]早睡身体好 睡前别吃太饱
[03:11.440]早睡身体好 伤心容易感冒
[03:17.770]早睡身体好 有什么值得烦恼
[03:24.220]早睡身体好 明天还要起早
[03:31.250]早睡身体好 爱情别吃太饱
[03:36.940]早睡身体好 伤心容易感冒
[03:43.450]早睡身体好 有什么值得烦恼
[03:49.790]早睡身体好 明天还要起早`;

let datas = {
    "lrc": lrc,
    "containerHeight": 0,
    "liHeight": 0,
    "maxOffset": 0,
    "lrcData": [],
    "currentPlaylist": {},
    "currentPlaylistChoose": "favorite",
    "currentPlaylistIndex": 0,
    "playlists": {},
    "currentPlayOrder": ["positive", 0],
    "playOrders": [
        "positive",
        "random",
        "infinity",
    ]
}


const refresh_playlist = () => {
    fetch('http://localhost:8891/playlist')
        .then(response => response.json())  // 解析返回的JSON数据
        .then(data => {
            // 请求成功时的处理逻辑
            datas.playlists = data;
            // 根据返回的数据更新页面
            init_playlists(data)
        })
        .catch(error => {
            // 请求失败时的处理逻辑
            console.log('Error:', error);
        });
}

function replacePlaylist(selectedPlaylist) {
    $(doms.playlist_ul).html(generatePlayListHTML(selectedPlaylist))
}

const init_playlists = () => {
    $(doms.playlist_choose_select).html(generatePlayListChooseHTML())
    replacePlaylist();
}

/**
 * 创建歌词元素 li
 */
function generatePlayListChooseHTML() {
    let html = "";
    for (const playlist in datas.playlists) {
        html += `
        <option ${playlist === "favorite" ? "selected" : ""} value="${playlist}">${playlist}</option>
        `;
    }
    return html;
}

/**
 * 创建歌词元素 li
 */
function generatePlayListHTML(selectedPlaylist = "favorite") {

    datas.currentPlaylist = datas.playlists[selectedPlaylist]
    // 初始化一个空的HTML字符串
    let html = '';

    const songNames = Object.keys(datas.currentPlaylist);
    songNames.forEach((song, index) => {
        // 添加到HTML字符串中，使用模板字符串来插入歌曲名和索引值（加1是因为索引是从0开始的）
        html += `
                <li>
                    <div class="playlist_prefix">
                        <span class="playlist_index">${index + 1}</span>
                        <i class="fa-solid fa-circle-play playlist_play_icon"></i>
                    </div>
                    <span class="playlist_song_name">${song}</span>
                </li>
            `;
    });

    // 返回生成的HTML字符串
    return html;
}


const get_song_lrc = (song_info, callback) => {
    fetch(`http://localhost:8891/lyrics/${song_info}`)
        .then(response => response.json())  // 解析返回的JSON数据
        .then(data => {
            // 请求成功时的处理逻辑
            datas.lrc = data.lrc;
            // 根据返回的数据更新页面
            callback(data)
        })
        .catch(error => {
            // 请求失败时的处理逻辑
            console.log('Error:', error);
        });
}