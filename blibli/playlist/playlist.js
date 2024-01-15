// 播放列表
const playlist = new Set();
for (let span of document.querySelectorAll("#multi_page > div.cur-list > ul > li > a > div > div.link-content > span.part")) {
    playlist.add("##### " + span.innerText.replace("【乐橙网】", ""))
}

console.log([...playlist].join("\n"))
