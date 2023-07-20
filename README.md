> 记住你的价值，它不因外观的不雅而贬值，是金子总有发光的一天

# front_road

前端之路开启了

[Java/前端/Go/大数据/C学习路线分享 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv14023271?spm_id_from=333.999.0.0)

在项目中磨练自己

[freecodecamp](https://www.freecodecamp.org/learn)

### d3 | d3 做了一个柱状图

D3 高度可定制化 就是说 对 svg 的知识要有所了解

![柱状图](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_gSh3E23rfG.gif)

# 总结

## 官网示例

https://d3js.org/getting-started

d3 示例:  https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable

### 柱状图

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>american gdp</title>
</head>

<body>
<div id="container"></div>
</body>


<!--<script src="./js/index.js"  type="module"></script>-->
<script type="module">

    import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

    const data = [{"letter": "A", "frequency": 0.08167}, {"letter": "B", "frequency": 0.01492}, {
        "letter": "C",
        "frequency": 0.02782
    }, {"letter": "D", "frequency": 0.04253}, {"letter": "E", "frequency": 0.12702}, {
        "letter": "F",
        "frequency": 0.02288
    }, {"letter": "G", "frequency": 0.02015}, {"letter": "H", "frequency": 0.06094}, {
        "letter": "I",
        "frequency": 0.06966
    }, {"letter": "J", "frequency": 0.00153}, {"letter": "K", "frequency": 0.00772}, {
        "letter": "L",
        "frequency": 0.04025
    }, {"letter": "M", "frequency": 0.02406}, {"letter": "N", "frequency": 0.06749}, {
        "letter": "O",
        "frequency": 0.07507
    }, {"letter": "P", "frequency": 0.01929}, {"letter": "Q", "frequency": 0.00095}, {
        "letter": "R",
        "frequency": 0.05987
    }, {"letter": "S", "frequency": 0.06327}, {"letter": "T", "frequency": 0.09056}, {
        "letter": "U",
        "frequency": 0.02758
    }, {"letter": "V", "frequency": 0.00978}, {"letter": "W", "frequency": 0.0236}, {
        "letter": "X",
        "frequency": 0.0015
    }, {"letter": "Y", "frequency": 0.01974}, {"letter": "Z", "frequency": 0.00074}];
    // Declare the chart dimensions and margins.
    const width = 928;
    const height = 500;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleBand()
            .domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter)) // descending frequency
            .range([marginLeft, width - marginRight])
            .padding(0.1);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.frequency)])
            .range([height - marginBottom, marginTop]);

    // Create the SVG container.
    const svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto;");

    // Add a rect for each bar.
    svg.append("g")
            .attr("fill", "steelblue")
            .selectAll()
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.letter))
            .attr("y", (d) => y(d.frequency))
            .attr("height", (d) => y(0) - y(d.frequency))
            .attr("width", x.bandwidth());

    // Add the x-axis and label.
    svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add the y-axis and label, and remove the domain line.
    svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                    .attr("x", -marginLeft)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .text("↑ Frequency (%)"));


</script>

</html>

```

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_o6JnQ3JFt5.png)

其实官网是直接返回 dom 节点, 让我们可以直接插入到我们的页面中

```javascript
chart = {
    // Declare the chart dimensions and margins.
    const width = 928;
    const height = 500;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleBand()
        .domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter)) // descending frequency
        .range([marginLeft, width - marginRight])
        .padding(0.1);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.frequency)])
        .range([height - marginBottom, marginTop]);

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");

    // Add a rect for each bar.
    svg.append("g")
        .attr("fill", "steelblue")
        .selectAll()
        .data(data)
        .join("rect")
        .attr("x", (d) => x(d.letter))
        .attr("y", (d) => y(d.frequency))
        .attr("height", (d) => y(0) - y(d.frequency))
        .attr("width", x.bandwidth());

    // Add the x-axis and label.
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add the y-axis and label, and remove the domain line.
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Frequency (%)"));

    // Return the SVG element.
    return svg.node();
}
```

下载页面的数据 到本地
![](https://raw.githubusercontent.com/HongXiaoHong/images/main/picture/msedge_YuOSMu0Muf.png)

你可以使用 Plot.js 对上面的操作进行简化
https://observablehq.com/plot/
```javascript
Plot.plot({
    y: {percent: true},
    marks: [
        Plot.barY(data, {x: "letter", y: "frequency", fill: "steelblue", sort: {x: "-y"}}),
        Plot.ruleY([0])
    ]
})
```

## 请求

### XMLHttpRequest

```javascript
const req = new XMLHttpRequest();
req.open("GET", '/json/cats.json', true);
req.send();
req.onload = function () {
    const json = JSON.parse(req.responseText);
    document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

这段代码使用 XMLHttpRequest 对象来发送异步的 GET 请求，获取一个位于 `/json/cats.json` 路径下的 JSON 文件，并将获取到的 JSON 数据显示在 HTML 页面上。

具体解释如下：

1. `const req = new XMLHttpRequest();`：创建一个新的 XMLHttpRequest 对象，用于发送 HTTP 请求。

2. `req.open("GET",'/json/cats.json',true);`：配置 XMLHttpRequest 对象的请求参数。这里设置了请求的方法为 GET，请求的 URL 为 `/json/cats.json`
   ，并将请求设置为异步模式(第三个参数为 `true`)。

3. `req.send();`：发送 HTTP 请求。

4. `req.onload = function(){ ... }`：当请求成功完成后，执行指定的回调函数。在这个回调函数中，我们可以处理从服务器获取的数据。

5. `const json = JSON.parse(req.responseText);`：将从服务器返回的响应数据(`req.responseText`)解析为 JSON 格式，并将结果赋值给变量 `json`。

6. `document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);`：获取 HTML 中类名为 `'message'`
   的元素(假设只有一个)，将解析后的 JSON 数据转换为字符串，并将字符串设置为该元素的内容。

总结来说，这段代码发送一个异步 GET 请求来获取 `/json/cats.json` 文件的内容，并将获取到的 JSON 数据以字符串形式显示在页面上具有 `'message'` 类名的元素中。这种方式允许在不刷新整个页面的情况下，通过
AJAX 技术从服务器获取数据并更新页面的特定部分。

### XMLHttpRequest的请求默认是异步的吗?可以设置成同步吗?

XMLHttpRequest 的请求默认是异步的。当调用 `open()` 方法时，如果没有明确指定异步参数为 `false`，则默认为异步请求。

异步请求意味着发送请求后，代码会继续执行而不会等待服务器响应。一旦服务器响应返回，将触发相应的事件(如 `onload`、`onreadystatechange` 等)，然后可以通过回调函数来处理响应数据。

虽然默认情况下是异步请求，但也可以通过将 `open()` 方法的第三个参数设置为 `false` 来创建同步请求，即 `req.open("GET",'/json/cats.json', false);`
。在同步请求中，代码会阻塞在发送请求这一行，直到服务器返回响应后才会继续执行后续代码。

需要注意的是，将请求设置为同步可能会导致用户界面冻结，并阻塞其他操作，因此在大多数情况下，推荐使用异步请求以提高用户体验和页面的响应性。

总结来说，XMLHttpRequest 的请求默认是异步的，可以通过设置 `open()` 方法的第三个参数为 `false` 来创建同步请求，但通常建议使用异步请求来避免阻塞页面和提升用户体验。

### fetch

```javascript
fetch('/json/cats.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = JSON.stringify(data);
    })
```

这段代码使用 Fetch API 发起一个 GET 请求，获取位于 `/json/cats.json` 路径下的 JSON 文件，并将获取到的 JSON 数据显示在 HTML 页面上。

具体解释如下：

1. `fetch('/json/cats.json')`：使用 Fetch API 发起一个 GET 请求，请求的 URL 是 `/json/cats.json`。

2. `.then(response => response.json())`：通过调用 `then()` 方法，对请求的响应进行处理。在这里，我们将响应对象通过 `response.json()` 方法转换为一个 Promise 对象，该
   Promise 对象最终解析为 JSON 格式的数据。

3. `.then(data => { ... })`：在上一步的 Promise 对象解析完成后，再次调用 `then()` 方法，对解析后的数据进行处理。在这个回调函数中，我们可以访问到解析后的 JSON 数据，并进行相应的操作。

4. `document.getElementById('message').innerHTML = JSON.stringify(data);`：获取页面中具有 `id` 为 `'message'` 的元素，将解析后的 JSON
   数据转换为字符串，并将字符串设置为该元素的内容。

总结来说，这段代码使用 Fetch API 发起一个异步的 GET 请求来获取 `/json/cats.json` 文件的内容。通过 Promise 链式调用，将获取到的 JSON 数据转换为字符串，并将其显示在具有 `'message'`
id 的元素中。Fetch API 提供了更现代和简洁的方式来进行网络请求，并使用 Promise 来处理异步操作，以便更好地管理和处理响应数据。

### then里面的函数返回 Promise 才可以继续调用then吗?

是的，当在 `then` 方法中的回调函数返回一个 Promise 对象时，才能继续链式调用 `then` 方法。

在 Promise 链式调用中，每个 `then` 方法都会返回一个新的 Promise 对象。如果回调函数返回一个非 Promise 的值，下一个 `then` 方法会将该值包装在一个已解析(fulfilled)的 Promise
对象中，并将其作为下一个 `then` 方法的参数。

但是，如果回调函数返回一个 Promise 对象，那么下一个 `then` 方法会等待该 Promise 对象解析(fulfilled)后，才会被调用。这样可以确保在前一个 Promise 对象解析完成后，再进行后续的操作或者异步请求。

这种机制允许我们在 Promise 链中进行连续的异步操作，确保它们按照预期的顺序执行。通过返回 Promise 对象，可以将异步操作串联起来，便于处理和管理异步任务的结果。

下面是一个示例，演示了在 `then` 方法中返回 Promise 对象的用法：

```
javascriptfetch('/json/cats.json')
  .then(response => response.json())
  .then(data => {
    return new Promise((resolve, reject) => {
      // 异步操作
      setTimeout(() => {
        resolve('Additional data');
      }, 2000);
    });
  })
  .then(additionalData => {
    console.log(additionalData);
  })
  .catch(error => {
    console.error(error);
  });

```

在上述示例中，第二个 `then` 方法返回了一个新的 Promise 对象，在 2 秒后解析为 `'Additional data'`。然后，该值被传递给下一个 `then` 方法进行处理。

通过返回 Promise 对象，我们可以处理更多的异步操作，确保它们按照正确的顺序执行，并在需要时捕获错误(通过 `catch` 方法)进行处理。这样可以提高代码的可读性和灵活性。

### fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json") .then((response) => { return response.json() }) response 获取("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json”) .then（（响应) => { 返回响应.json() }) 响应

在这段代码中，`fetch()` 函数发送了一个 GET 请求到指定的
URL([https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json)，以获取](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json%EF%BC%89%EF%BC%8C%E4%BB%A5%E8%8E%B7%E5%8F%96)
JSON 数据。然后，通过 `then()` 方法链式调用，对请求的响应进行处理。

在这里，`(response) => { return response.json() }` 是一个回调函数，用于处理响应数据。它将响应对象通过 `response.json()` 方法转换为一个 Promise 对象，该 Promise
对象最终解析为 JSON 格式的数据。

所以，`response` 在这段代码中是一个表示响应的对象。通过调用 `response.json()` 方法，我们可以将响应对象转换为包含 JSON 数据的 Promise 对象。

您可以继续通过链式调用 `.then()` 方法，处理解析后的 JSON 数据或执行其他操作。例如，可以使用 `.then((data) => { console.log(data) })` 来在控制台输出解析后的 JSON 数据。

请注意，这段代码中的 `fetch()` 请求是异步操作，因此在获取到数据之前，后续的代码会继续执行。您可以将后续操作放在 `.then()` 方法中，以确保在获取到数据后再进行相应的处理。

### 上面的这段代码中 response 的 json 方法属于哪个原型

在这段代码中，`response.json()` 方法属于 `Response` 对象的原型。`Response` 是 Fetch API 提供的一个内置对象，表示 HTTP 请求的响应。它提供了一系列方法来处理和操作响应数据。

`Response` 对象的原型上定义了一个名为 `json()` 的方法，用于从响应中提取 JSON 数据并返回一个 Promise 对象。通过调用 `response.json()`，我们可以将响应的主体内容解析为 JSON
格式的数据。

值得注意的是，`Response` 对象的 `json()` 方法会异步读取响应的主体内容，因此返回的是一个 Promise 对象。在 Promise 解析完成后，我们可以通过 `.then()` 方法中的回调函数获取到解析后的 JSON
数据。

总结来说，`response.json()` 方法是 `Response` 对象原型上的一个方法，用于将响应的主体内容解析为 JSON 数据，并返回一个 Promise 对象。

### 分析一下 https://github.com/d3/d3 D3 的构建图表原理

D3.js 是一个免费的、开源的 JavaScript 库，用于可视化数据。它基于 web 标准的低级方法提供了在创作动态、数据驱动的图形方面无与伦比的灵活性。在过去的十年中，D3
为突破性和获奖的可视化提供了动力，成为了更高级别图表库的基础构建块，并在全球范围内培育了一个活跃的数据实践者社区。

D3 的工作原理主要基于以下几个方面：

1. **选择元素**：D3 使用 CSS 类型的选择器来选择页面上的元素。这使得 D3 可以直接与现有的 CSS、HTML 和 SVG 元素进行交互。

2. **绑定数据**：D3 允许你将数据绑定到 DOM，并根据这些数据来转换文档。它使用数据驱动的方法来操作元素。

3. **操作元素**：一旦数据被绑定到 DOM，D3.js 可以使用一系列函数来应用数据驱动的转换到元素。例如，你可以使用一个函数来设置元素的颜色，这个函数是由数据动态驱动的。

4. **使用 SVG, Canvas 和 HTML**：D3.js 使用标准的 W3C 技术：SVG、Canvas 和 HTML。它不是一个封闭的框架，而是一种可以与其他工具无缝集成的方法。

5. **动态属性**：D3.js 允许你动态地改变图形的属性。这意味着你的图形可以根据用户的交互、动画或者从外部源获取的数据来进行更新。

6. **交互和动画**：D3 提供了强大的交互和动画支持，使得你可以轻松地添加交互和动画到你的图表中。

7. **可重用性**：D3.js 的设计鼓励代码的重用，这使得你可以轻松地将你的代码封装为可重用的库或工具。

D3.js 的这些特性使得它成为了创建复杂、自定义和高性能的数据可视化的理想选择。

### D3.js 创建可视化图形的过程主要包括以下步骤：

1. **加载数据**：D3 可以加载各种格式的数据，包括 CSV、TSV、JSON 等。数据加载后，可以通过各种函数进行处理和转换。

2. **选择元素**：D3 使用 CSS 类型的选择器来选择页面上的元素。这使得 D3 可以直接与现有的 CSS、HTML 和 SVG 元素进行交互。

3. **绑定数据**：D3 允许你将数据绑定到 DOM，并根据这些数据来转换文档。这是 D3 的核心，也是 "Data-Driven Documents" 名称的来源。

4. **创建和操作元素**：一旦数据被绑定到 DOM，D3.js 可以使用一系列函数来应用数据驱动的转换到元素。例如，你可以使用一个函数来设置元素的颜色，这个函数是由数据动态驱动的。

5. **使用 SVG, Canvas 和 HTML**：D3.js 使用标准的 W3C 技术：SVG、Canvas 和 HTML。这意味着你可以使用 D3 来创建任何你可以在网页上看到的图形和界面。

6. **动态属性**：D3.js 允许你动态地改变图形的属性。这意味着你的图形可以根据用户的交互、动画或者从外部源获取的数据来进行更新。

7. **添加交互和动画**：D3 提供了强大的交互和动画支持，使得你可以轻松地添加交互和动画到你的图表中。

8. **可重用性**：D3.js 的设计鼓励代码的重用，这使得你可以轻松地将你的代码封装为可重用的库或工具。

通过以上步骤，D3.js 可以创建出各种复杂和自定义的数据可视化图形。

### 这说的是D3创建可视化图形的流程, 但是核心是怎么通过html创建图形的?

D3.js 利用 HTML、SVG 和 CSS 来创建和控制图形。这是通过以下几个步骤实现的：

1. **选择元素**：D3 使用 CSS 类型的选择器来选择页面上的元素。例如，`d3.select("body")` 会选择页面上的 body 元素。

2. **创建元素**：D3 可以创建新的 DOM 元素。例如，`d3.select("body").append("svg")` 会在 body 元素中创建一个新的 SVG 元素。

3. **设置属性**：D3 可以设置元素的属性。例如，`d3.select("svg").attr("width", 500).attr("height", 500)` 会设置 SVG 元素的宽度和高度。

4. **绑定数据**：D3 允许你将数据绑定到 DOM，并根据这些数据来转换文档。例如，`d3.select("svg").selectAll("circle").data([10, 20, 30])` 会将数据 \[10, 20,
   30\] 绑定到 SVG 元素中的所有圆形元素。

5. **进入和退出选择**：D3 提供了一种机制，允许你根据绑定的数据来创建或删除元素。例如，`enter()` 方法用于创建新的元素以匹配数据，`exit()` 方法用于删除多余的元素。

6. **转换元素**：一旦数据被绑定到 DOM，D3.js 可以使用一系列函数来应用数据驱动的转换到元素。例如，你可以使用一个函数来设置元素的颜色，这个函数是由数据动态驱动的。

7. **交互和动画**：D3 提供了强大的交互和动画支持，使得你可以轻松地添加交互和动画到你的图表中。

通过这些步骤，D3.js 可以创建出各种复杂和自定义的数据可视化图形。

### D3.js 的核心是使用 SVG(可缩放矢量图形)来创建和控制图形。SVG 是一种基于 XML 的矢量图形格式，它允许我们创建复杂的、可交互的和动态的图形。

在 D3.js 中，你可以使用 `append` 方法来创建 SVG 元素，使用 `attr` 方法来设置 SVG 元素的属性，使用 `style` 方法来设置 SVG 元素的样式。例如，你可以创建一个圆形元素，并设置它的半径、颜色和位置。

此外，D3.js 还提供了一系列的工具和方法，使得你可以轻松地添加交互和动画，以及处理和绑定数据。例如，你可以使用 `on` 方法来添加事件监听器，使用 `transition` 方法来添加动画，使用 `data` 方法来绑定数据。

总的来说，D3.js 提供了一种低级但非常强大的方式来创建和控制 SVG 图形，这使得你可以创建出各种复杂和自定义的数据可视化图形。

### D3.js 可以与 Canvas 元素一起使用。虽然 D3.js 常常与 SVG 一起使用来创建数据可视化，但它也可以用于操作 Canvas。Canvas 提供了一种像素级别的控制，对于大型数据集或者需要复杂渲染的场景，Canvas 可能会提供更好的性能。

在使用 D3.js 与 Canvas 一起时，你可以使用 D3.js 的数据驱动的方法和强大的数据处理功能，同时利用 Canvas 的高性能渲染。这种方式的一个主要区别是，Canvas
是基于像素的，并且不支持事件监听器。因此，如果你需要交互或者动画，你可能需要自己实现，或者结合使用 SVG 和 Canvas。

以下是一个简单的例子，展示了如何使用 D3.js 与 Canvas 一起创建一个简单的散点图：

```
javascript// 创建 canvas 元素
var canvas = d3.select("body")
  .append("canvas")
  .attr("width", 960)
  .attr("height", 500)
  .node();

var context = canvas.getContext("2d");

// 创建数据
var data = d3.range(5000).map(function() { 
  return [Math.random() * 960, Math.random() * 500]; 
});

// 绘制数据
data.forEach(function(d) {
  context.beginPath();
  context.arc(d[0], d[1], 2.5, 0, 2 * Math.PI);
  context.fillStyle = "steelblue";
  context.fill();
});

```

在这个例子中，我们首先创建了一个 Canvas 元素，然后创建了一些随机数据，最后遍历数据并为每个数据点绘制一个圆形。

### D3.js 提供了丰富的方法和功能，用于创建、操作和控制数据可视化。以下是一些 D3.js 中常用的方法：

1. **选择元素**：D3 使用选择器语法来选择页面上的元素。常用的选择方法包括：

    - `d3.select(selector)`：选择第一个匹配选择器的元素。
    - `d3.selectAll(selector)`：选择所有匹配选择器的元素。

2. **绑定数据**：D3 允许将数据与元素进行绑定，从而可以根据数据来创建、更新和删除元素。常用的绑定方法包括：

    - `selection.data(data[, key])`：将数据绑定到元素。
    - `selection.enter()`：获取与数据绑定但尚未在 DOM 中表示的元素。
    - `selection.exit()`：获取与数据绑定但在 DOM 中不存在的元素。

3. **创建元素**：D3 可以用于创建新的元素，并将其添加到 DOM 中。常用的创建方法包括：

    - `selection.append(name)`：在选定的元素内追加一个新元素。
    - `selection.insert(name[, before])`：在选定的元素内插入一个新元素。

4. **设置属性和样式**：D3 可以用于设置元素的属性和样式。常用的设置方法包括：

    - `selection.attr(name[, value])`：设置元素的属性值。
    - `selection.style(name[, value[, priority]])`：设置元素的样式。

5. **操作元素**：D3 可以用于对元素进行各种操作，例如移动、缩放、旋转等。常用的操作方法包括：

    - `selection.transition()`：创建过渡效果，用于实现动画效果。
    - `selection.remove()`：从 DOM 中移除元素。
    - `selection.classed(name[, value])`：添加或移除元素的类名。

6. **处理事件**：D3 可以用于处理元素上的事件，例如鼠标点击、鼠标移动等。常用的事件处理方法包括：

    - `selection.on(type[, listener[, options]])`：为元素添加事件监听器。

7. **比例尺和轴**：D3 提供了比例尺和轴的功能，用于将数据映射到可视化表示中。常用的比例尺和轴的方法包括：

    - `d3.scaleLinear()`：创建线性比例尺。
    - `d3.axisBottom(scale)`：创建底部轴。

8. **数据处理**：D3 提供了强大的数据处理功能，用于对数据进行转换和操作。常用的数据处理方法包括：

    - `d3.extent(data[, accessor])`：计算数据的最小值和最大值。
    - `d3.nest().key(keyFunction)`：根据指定的键函数对数据进行分组。

以上只是一些常用的 D3.js 方法，D3.js 还提供了许多其他功能和方法，用于实现各种数据可视化需求。掌握这些方法可以帮助你更好地使用 D3.js 创建交互性和动态的数据可视化。你可以查阅 D3.js
的官方文档以获取更详细的方法和用法。

### 在 D3.js 中，`data()` 和 `enter()` 是一对常用的方法，用于在数据绑定和元素创建时进行操作。

**data() 方法**用于将数据绑定到元素。它接受一个数据数组作为参数，并将该数据数组与选择集中的元素进行绑定。例如，假设有一个包含一组数字的数组 `data`，我们可以使用以下代码将数据绑定到一组 `<p>` 元素：

```
javascriptvar data = [10, 20, 30, 40, 50];

var p = d3.select("body")
  .selectAll("p")
  .data(data)
  .text(function(d) { return d; });

```

在这个例子中，`selectAll("p")` 选择页面上的所有 `<p>` 元素，然后使用 `data(data)` 将数据绑定到这些元素。接下来，我们使用 `text()`
方法设置元素的文本内容，这里的回调函数 `function(d) { return d; }` 将每个数据点作为参数，并将其作为文本内容设置给相应的元素。

**enter() 方法**则用于获取与数据绑定但尚未在 DOM 中表示的元素。通过 `enter()` 方法，我们可以获取到应该创建的新元素，并将其添加到 DOM 中。例如，我们可以使用以下代码创建新的 `<p>`
元素来表示数据中的每个元素：

```
javascriptvar pEnter = p.enter()
  .append("p")
  .text(function(d) { return d; });

```

在这个例子中，`enter()` 方法获取到与数据绑定但在 DOM 中不存在的元素，然后使用 `append("p")` 创建新的 `<p>` 元素，并使用 `text()` 方法设置元素的文本内容。

使用 `data()` 和 `enter()` 方法的组合，我们可以根据数据的变化自动创建、更新和删除元素，使得数据和元素之间保持同步。这是 D3.js 数据驱动可视化的核心概念，通过它可以实现动态、可交互的数据可视化效果。

需要注意的是，`enter()` 方法返回一个表示需要创建的新元素的选择集，我们可以对这个选择集应用进一步的操作，例如设置属性、样式等。

综上所述，`data()` 和 `enter()` 方法是 D3.js 中常用的方法，用于实现数据绑定和元素创建的操作，使得数据与元素之间保持同步。

### `enter()` 方法返回的是一个选择集(Selection)。选择集是 D3.js 的一个核心概念，它代表了一组元素的选择结果。

选择集是 D3.js 中用于操作和控制元素的重要工具。通过选择集，可以对选定的元素进行各种操作，例如修改元素的属性、样式、文本内容等，或者将新元素添加到选择集中。

在使用 `enter()` 方法后，返回的选择集表示那些与数据绑定但在 DOM 中不存在的元素。这些元素是根据数据数组的长度来确定的，如果数据数组的长度大于当前 DOM 中对应元素的数量，那么 `enter()`
方法将返回一个包含需要创建的新元素的选择集。

返回的选择集可以使用 D3.js 提供的方法进行进一步的操作。例如，可以使用 `append()` 方法向选择集中添加新的元素，或者使用 `attr()` 方法设置元素的属性值。

下面是一个简单的示例，演示了如何使用 `enter()` 方法创建新的元素并设置其文本内容：

```
javascriptvar data = [10, 20, 30, 40, 50];

var p = d3.select("body")
  .selectAll("p")
  .data(data)
  .enter()
  .append("p")
  .text(function(d) { return d; });

```

在这个例子中，我们首先通过 `selectAll("p")` 选择页面上的所有 `<p>` 元素。然后使用 `data(data)` 方法将数据绑定到这些元素。接下来，使用 `enter()` 方法获取与数据绑定但在 DOM
中不存在的元素，然后使用 `append("p")` 创建新的 `<p>` 元素，并将其添加到选择集中。最后，使用 `text()` 方法设置元素的文本内容。

总结来说，`enter()` 方法返回的是一个选择集，它表示那些与数据绑定但在 DOM 中不存在的元素，我们可以对这个选择集应用进一步的操作，例如添加新元素、设置属性、样式等。

### 假设现在 body 中已经包含2个p, 数组现在有4个数字, 现在执行 var p = d3.select("body") .selectAll("p") .data(data) .enter() .append("p") .text(function(d) { return d; }); enter 返回4个元素还是2个元素呢

在你提供的示例中，假设 `<body>` 元素中已经包含了 2 个 `<p>` 元素，并且数组 `data` 中有 4 个数字。现在执行以下代码：

```
javascriptvar p = d3.select("body")
  .selectAll("p")
  .data(data)
  .enter()
  .append("p")
  .text(function(d) { return d; });

```

根据 D3.js 的数据绑定机制，`data(data)` 方法会将数据绑定到选择集中的元素。然后使用 `enter()` 方法获取与数据绑定但在 DOM 中不存在的元素。

在这个例子中，`enter()` 方法将返回一个包含需要创建的新元素的选择集。由于现有的 `<body>` 元素中只有 2 个 `<p>` 元素，而数组 `data` 中有 4 个数字，所以 `enter()` 方法将返回一个包含 2
个新元素的选择集。

最后，使用 `append("p")` 和 `.text()` 方法将这两个新元素添加到选择集中，并设置其文本内容。

因此，根据你提供的情况，`enter()` 方法返回的选择集中将包含 2 个新创建的 `<p>` 元素，这两个新元素分别与数组中的后两个数字进行绑定，并添加到 `<body>` 中。现在，`<body>` 中总共会有 4 个 `<p>`
元素。

### d3 有这么一段代码 <style> .bar:hover { fill: brown; } </style> <body> <script> const dataset = \[12, 31, 22, 17, 25, 18, 29, 14, 9\]; const w = 500; const h = 100; const svg = d3.select("body") .append("svg") .attr("width", w) .attr("height", h); svg.selectAll("rect") .data(dataset) .enter() .append("rect") .attr("x", (d, i) => i \* 30) .attr("y", (d, i) => h - 3 \* d) .attr("width", 25) .attr("height", (d, i) => d \* 3) .attr("fill", "navy") .attr("class", "bar") // Add your code below this line .append("title") .text(d=>d) // Add your code above this line svg.selectAll("text") .data(dataset) .enter() .append("text") .text((d) => d) .attr("x", (d, i) => i \* 30) .attr("y", (d, i) => h - (d \* 3 + 3)) </script> </body> 加不加 .append("title") .text(d=>d) 这两句图形上都有标注呀, 为什么还要加上这两句呢

在给定的代码中，`.append("title").text(d=>d)` 是用于添加 `<title>` 元素并设置其文本内容，以实现图形的标注功能。`<title>`
元素是用于提供图形的描述性文本，当用户将鼠标悬停在元素上时，浏览器将显示 `<title>` 元素的文本作为提示。

在这个例子中，`.append("title").text(d=>d)` 被添加在 `<rect>` 元素的末尾，用于为每个矩形元素添加一个描述性文本。文本内容是由数据集中的每个元素决定的，即矩形的高度。

通过添加 `<title>` 元素并设置其文本内容，当用户将鼠标悬停在矩形上时，浏览器会显示对应矩形的高度作为提示，从而提供了更多的信息。

虽然在这个特定的示例中，矩形元素本身已经显示了高度，但是添加 `<title>` 元素可以为用户提供更具体和详细的信息，特别是在数据集较大或者具有更多复杂属性的情况下。

所以，添加 `.append("title").text(d=>d)` 这两句代码是为了增加图形的可读性和交互性，使得用户可以通过鼠标悬停来查看具体的数值。

### domain 值域 - range 显示区域

```javascript

const xScale = d3.scaleLinear().domain([0, d3.max(dataset, (d) => d[0])]).range([padding, w - padding])

```

这段代码使用 D3.js 中的 `scaleLinear()` 方法创建一个线性比例尺对象 `xScale`，并设置其域(domain)和范围(range)。

具体解释如下：

1. `d3.scaleLinear()`：调用 D3.js 的 `scaleLinear()` 方法创建一个线性比例尺对象。线性比例尺是用于将连续的输入范围映射到连续的输出范围的一种比例尺。

2. `.domain([0, d3.max(dataset, (d) => d[0])])`：使用 `.domain()`
   方法设置线性比例尺的输入域(domain)。在这里，输入域被设置为一个数组 `[0, d3. max(dataset, (d) => d[0])]`。这表示将数据集 `dataset` 中的最小值(0)和 `dataset`
   中第一列(索引为 0)的最大值作为输入域的范围。

3. `.range([padding, w - padding])`：使用 `.range()` 方法设置线性比例尺的输出范围(range)。在这里，输出范围被设置为一个数组 `[padding, w - padding]`
   。这表示将输出映射到从 `padding`(左边距)到 `w - padding`(画布宽度减去右边距)之间的范围。

通过设置域和范围，线性比例尺可以将输入值映射到输出范围中对应的位置。在这个例子中，比例尺将数据集中的输入值(最小值和最大值)映射到画布上的坐标位置，以便在绘制图形时进行定位和缩放。

在使用比例尺对象时，可以通过调用 `xScale(value)` 来将输入值 `value` 转换为对应的输出值。例如，`xScale(10)` 可以将输入值 10 映射到输出范围中的某个位置。

总结来说，这段代码创建了一个线性比例尺对象 `xScale`，并根据数据集的最小值和最大值设置了输入域和输出范围。这样可以在绘制图形时，通过调用比例尺对象来实现数据的定位和缩放。

### 来自官网例子的坐标系

```javascript

svg.append("g").attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).tickFormat((y) => (y *
            100
        ).toFixed()
    )).call(g => g.select(".domain").remove()).call(g => g.append("text").attr("x", -marginLeft).attr("y", 10).attr("fill", "currentColor").attr("text-anchor", "start").text("↑ Frequency (%)"));
```

这段代码是使用 D3.js 在 SVG 图形中添加左侧的坐标轴和相应的标签。

让我们逐行解释这段代码的作用：

1. `svg.append("g")`：在 SVG 元素中添加一个 `<g>` 元素。`<g>` 元素用于组合和包含其他图形元素，类似于一个容器。

2. `.attr("transform",` translate(${marginLeft},0)`)`：使用 `.attr()` 方法设置 `<g>` 元素的属性，这里是 `transform`
   属性。通过设置 `translate()` 函数，可以将 `<g>` 元素沿 x 和 y 方向平移。`${marginLeft}` 是一个变量，表示要沿 x 轴平移的距离。

3. `.call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))`：使用 `.call()` 方法调用 D3.js 的 `axisLeft()`
   方法，创建一个左侧的坐标轴。`y` 是一个比例尺对象，用于映射数据的值到图形上的位置。`.tickFormat((y) => (y * 100).toFixed())` 用于设置坐标轴刻度的格式，将刻度值乘以 100 并保留两位小数。

4. `.call(g => g.select(".domain").remove())`：使用 `.call()` 方法调用一个函数来操作坐标轴的元素。在这里，`.select(".domain")` 选择坐标轴的 "domain"
   元素(表示坐标轴线)，然后使用 `.remove()` 方法将其移除。这样可以去除坐标轴线。

5. `.call(g => g.append("text")...)`：再次使用 `.call()` 方法调用一个函数来操作坐标轴的元素。在这里，我们向坐标轴添加一个文本元素，用于显示坐标轴的标签。通过 `.append("text")`
   创建一个 `<text>` 元素，并使用 `.attr()` 方法设置其属性，例如位置、填充颜色、文本锚点和文本内容。

通过以上的代码，我们实现了在 SVG 图形中添加一个左侧的坐标轴，并对坐标轴的样式和标签进行了自定义设置。这样可以让图形更加清晰地展示数据，并提供了对数据值的参考。