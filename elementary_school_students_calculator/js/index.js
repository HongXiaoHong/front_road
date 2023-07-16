
$(document).ready(function () {
    const  $calculate = $("input#calculate");
    const  $result = $("input#result");
    $("button.input_item").click((e) => {
        $calculate.attr("value", $calculate.attr("value") + $(e.target).text())
        $calculate.trigger('change'); // trigger the change event
    });

    $("button#ac").click((e) => {
        $calculate.attr("value", "")
        $result.attr("value", "0")
    });

    $("button#equal").click((e) => {
        $result.attr("value", eval(e.target.value));
    });

    $calculate.on("change", (e)=>{
        $result.attr("value", eval(e.target.value));
    })
});
