import CHINESE_COLORS from "./colors.js";

const getRandomColors = () => {
    const length = CHINESE_COLORS.length - 1;
    const firstColorIndex = getRandomIndex(length);
    const secondColorIndex = firstColorIndex + 1;
    return [CHINESE_COLORS[firstColorIndex], CHINESE_COLORS[secondColorIndex]];
}

$(document).ready(() => {
    console.log("abc");
    $("#new_quote").click(() => {
        const [firstColor, secondColor] = getRandomColors();
        const $root = $(':root');
        $root.css('--background-color', firstColor);
        $root.css('--button-background-color', secondColor);
        $.get('http://localhost:8888/random/lrcs')
            .done((lrcs) => {
                const lrcs_length = lrcs.length;
                const random_lrc = lrcs[getRandomIndex(lrcs_length)];
                $("#quote_section").text(random_lrc.lrcs[getRandomIndex(random_lrc.lrcs.length)]);
                $("#quote_author").text(`-- ${random_lrc.author}`);
            })
            .fail(() => {
                console.log('Error: Request failed.'); // 在这里处理请求失败的情况
            });

    });
});

function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
}
