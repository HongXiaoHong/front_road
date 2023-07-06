import CHINESE_COLORS from "./colors.js";

const getRandomColors = () => {
    const length = CHINESE_COLORS.length - 1;
    const firstColorIndex = Math.floor(Math.random() * length);
    const secondColorIndex = Math.floor(Math.random() * length);
    return [CHINESE_COLORS[firstColorIndex], CHINESE_COLORS[secondColorIndex]];
}

$(document).ready(() => {
    console.log("abc");
    $("#new_quote").click(() => {
        const [firstColor, secondColor] = getRandomColors();
        const $root = $(':root');
        $root.css('--background-color', firstColor);
        $root.css('--button-background-color', secondColor);
    });
});