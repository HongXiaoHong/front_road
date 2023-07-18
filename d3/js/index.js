const svgData = {
    "gdbData": {},
    "padding": 40,
    "width": 800,
    "height": 500,
    "rectStyle": {
        "width": 3,
    }
}

const tooltip = d3
    .select('.visHolder')
    .append('div')
    .attr('id', 'tooltip')
    .style('opacity', 0);

const getSVG = () => {
    return d3.select("body").append("svg")
        .attr("width", svgData.width)
        .attr("height", svgData.height);
    // 设置 svg 颜色
    // .style("background-color", "red");
}

const getRectHeight = (d, maxGDP) => {
    return (svgData.height - 2 * svgData.padding) * (d[1] / maxGDP);
}

$(document).ready(function () {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
        .then((response) => {
            return response.json()
        })
        .then((gdbData) => {

            const svg = getSVG()
            const years = gdbData.data.map(arr => arr[0]).map(str => getDateValue(str));
            const scaleX = d3.scaleLinear()
                .domain([d3.min(years), d3.max(years)])
                .range([svgData.padding, svgData.width - svgData.padding]);
            const maxGDP = d3.max(gdbData.data, d => d[1]);
            const scaleY = d3.scaleLinear()
                .domain([0, d3.max(gdbData.data, d => d[1])])
                .range([svgData.height - svgData.padding, svgData.padding]);
            svg.selectAll("rect")
                .data(gdbData.data)
                .enter()
                .append("rect")
                .attr("width", svgData.rectStyle.width)
                .attr("height", d => getRectHeight(d, maxGDP))
                .attr("fill", "steelblue")
                .attr("x", (d, i) => scaleX(getDateValue(d[0])))
                .attr("y", d => scaleY(d[1]))
                .attr("class", "bar")
                .attr('index', (d, i) => i)
                .style('fill', '#33adff')
                .on('mouseover', function (event, d) {
                    var i = this.getAttribute('index');
                    tooltip.transition().duration(200).style('opacity', 0.9);
                    tooltip
                        .html(
                            Math.floor(years[i]) +
                            '<br>' +
                            gdbData.data[i][1].toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') +
                            ' Billion'
                        )
                        .attr('data-date', gdbData.data[i][0])
                        .style('left', i * svgData.rectStyle.width + 30 + 'px')
                        .style('top', svgData.height - 300 + 'px')
                        .attr('transform', 'translate(60, 0)');
                })
                .on('mouseout', function () {
                    tooltip.transition().duration(200).style('opacity', 0);
                });
            ;

            const xAxis = d3.axisBottom(scaleX);
            const yAxis = d3.axisLeft(scaleY);
            svg.append("g")
                .attr("transform", "translate(0," + (svgData.height - svgData.padding) + ")")
                .call(xAxis);
            svg.append("g")
                .attr("transform", "translate(" + (svgData.padding) + ",0)")
                .call(yAxis);
        })
});


function getDateValue(str) {
    return Number(str.slice(0, 4)) + Number(str.slice(5, 7)) / 12;
}

