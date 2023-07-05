```css
/*
调试的时候可以加上这个 方便查看页面究竟发生了
更明显的效果
*/
*{
    border-style: solid;
}
```

### column-width

[column-width - CSS: Cascading Style Sheets | MDN --- 列宽 - CSS：级联样式表 |多核 (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width)

column-width CSS 属性在多列布局中设置理想的列宽。

容器将具有尽可能多的列，而其中任何列的宽度都小于该 column-width 值。

如果容器的宽度小于指定值，则单列的宽度将小于声明的列宽。

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/msedge_NC3SM7fSfH.png)



minmax() 最小最大值（）

> minmax() CSS 函数定义大于或等于最小且小于或等于 max 的大小范围。它与CSS网格一起使用。

https://developer.mozilla.org/en-US/docs/Web/CSS/minmax

```css
main {
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
  row-gap: 3rem;
}

.heading {
  grid-column: 2 / 3;
}
```

> grid-column CSS 速记属性通过为其网格放置贡献线条、跨度或不显示（自动）来指定网格项在网格列中的大小和位置，从而指定其网格区域的内联开始边缘和内联结束边缘。

https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column#examples

# CSS中的`fr`单位：前端工程师的神奇法杖

在CSS Grid布局中，`fr`是一个非常神奇的单位，它代表了“可用空间的一份”。与其他单位（如px、em等）相比，`fr`单位有一些特殊的魅力。就像你突然拿到了一根能够自由调节长度的法杖，你可以用它创造出无限可能的布局。

## 1. `fr`是什么？

`fr`代表fraction（分数）。这是Grid布局特有的一个长度单位，用于在Grid布局中分配剩余的空间。一个`fr`代表的是剩余空间的一份。

如果你将一个网格的列定义为`1fr 2fr`，那么，这个网格的宽度会被划分为三份，第一列宽度占据其中一份，第二列宽度占据剩下的两份。

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
```

## 2. `fr`的超能力

`fr`单位的真正强大之处在于，它能够自动地处理响应式设计的问题。无论浏览器窗口的大小如何变化，`fr`单位都能够保证元素之间的相对比例不变。这就像你拥有了一根可以自动伸缩的法杖，无论周围环境如何变化，它都能帮你保持布局的和谐。

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

在这个例子中，每列的最小宽度是200px，最大宽度是剩余空间的等份。当浏览器窗口的大小变化时，网格的列数将自动调整，以保证每列至少有200px宽，并且剩余空间会均匀地分配到每一列。

## 3. `fr`的使用提示

在使用`fr`单位时，你需要注意以下几点：

- `fr`单位只能在Grid布局中使用，其他布局系统（如Flex布局）并不支持。
- `fr`单位不能用于设置边框、内边距或外边距。尝试使用`fr`单位设置这些值将不会产生任何效果。

---

`fr`单位就像前端工程师的神奇法杖，让我们能够在网格世界中自由探索。让我们一起使用`fr`单位，创造出更加美丽的网页吧！

# CSS Grid布局：从零开始的网格之旅

*清除CSS空白，前端人员的优雅舞步。既然你已经来到这里，让我们一起来探索神秘的CSS Grid布局。*

## 1. 介绍：网格布局的超能力

CSS Grid布局（Grid Layout）是CSS中最强大的布局系统，打开网页布局的全新可能性。其设计目标是完全解决我们需要做的任何类型的布局。想象一下，你有一个隐形的网格，它的线条是你的道路，它的空间是你的房子，它们可以是任何大小、形状，如同梦中的乐土。Grid布局就是如此奇妙，它能让你灵活的布局网页，让你的网页酷炫无比。

## 2. 应用场景：网格布局的显现地

Grid布局是二维的，这意味着它可以同时处理行和列，我们不再需要依赖display:block和display:inline-block来创建我们的布局。它用于布局大型区域（如导航、正文、页脚等）或小部件。如果你需要设计一个复杂的，需要多列和行的布局，或者需要在任何方向上对齐和对准元素，那么Grid布局就是你的朋友。

## 3. 快速上手：网格布局的第一步

那么，我们如何进入这个网格世界呢？答案就是**display: grid**。一旦我们为一个元素设置了这个属性，我们就拥有了一个强大的网格系统。

```css
.container {
    display: grid;
}
```

如此，你就已经步入了网格布局的世界，就像打开了一个神秘的魔法盒子。

## 4. 常用特性：网格布局的利器

Grid布局有许多特性，它们让布局更加容易、更有趣。这就像拥有一个魔法工具箱，你可以随心所欲地创造布局。

### 4.1. Grid Template

使用`grid-template-columns`和`grid-template-rows`属性，我们可以设定网格的结构。像是指挥一支管弦乐队，我们可以精确地控制每一列和行的大小和位置。

```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 50px 50px;
}
```

### 4.2. Grid Gap

`grid-gap`属性定义了网格列与列、行与行之间的间隔。它如同乐曲中的休止符，让布局有了和谐的旋

律。

```css
.container {
    display: grid;
    grid-gap: 10px;
}
```

### 4.3. Grid Items

在网格容器中，直接的子元素就成为了网格项。网格项如同舞者，在舞台上灵活翩翩。

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

### 4.4. Justify and Align Items

你可以使用`justify-items`和`align-items`属性来对齐和调整网格项的位置，就像为你的舞者安排舞步。

```css
.container {
    display: grid;
    justify-items: center;
    align-items: center;
}
```

## 5. 注意事项：网格布局的雷区

- 网格布局虽然强大，但它并不是所有浏览器都完全支持，尤其是一些旧版本的浏览器。因此在使用时，一定要记得进行兼容性测试。
- Grid布局对于直接子元素有效，但对孙子元素无效。所以要记得，只有直接的子元素才能成为网格项。

## 6. 原理概述：网格布局的魔法书

Grid布局是基于二维的，既可以处理列也可以处理行。在实现上，Grid布局在布局开始时就已经计算好了网格，然后按照规则将元素放置在其中。这与Flex布局不同，Flex布局是一维的，布局过程中会根据空间和元素的大小进行调整。

---

恭喜你！你已经完成了这次网格布局的探险。你是时尚的探险家，你已经掌握了网格布局的魔法。让我们一起用网格布局创造出更加美丽的网页吧！
