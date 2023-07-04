# point

position sticky定位无效 可能的原因

`position: sticky;` 是一个非常有用的定位方法，它可以将元素 "粘贴" 在其容器内的特定位置。当页面滚动到特定位置时，元素就会 "粘住"，就像其位置被设为 `fixed` 一样。然而，有时你可能会发现 `position: sticky;` 不起作用。这可能有以下几个原因：

1. **未设置`top`, `bottom`, `left` 或 `right`**：使用 `sticky` 定位时，必须定义 `top`, `bottom`, `left` 或 `right` 中的一个或多个值，这样元素才知道何时 "粘住"。

2. **父级元素的 overflow 属性**：如果父级元素的 `overflow` 属性被设置为 `hidden`、`scroll`、`auto` 或 `clip`，那么 `sticky` 可能无效。

3. **祖先元素有滚动条**：如果元素的任何祖先元素而不是视口滚动，那么 `sticky` 可能不起作用。

4. **父级元素高度问题**：`sticky` 元素不会脱离其父元素的边界。也就是说，如果父元素的高度太小，无法为子元素提供滚动的空间，那么 `sticky` 可能不起作用。

5. **兼容性问题**：尽管大多数现代浏览器都支持 `position: sticky;`，但一些较老的浏览器可能不支持。可以在[Can I use](https://caniuse.com/css-sticky)上查看浏览器的兼容性。

6. **`position: sticky;` 在表格元素上不起作用**：在某些浏览器中，如 Chrome 和 Firefox，`sticky` 在 `thead` 和 `tr` 元素上无法正确工作。

7. **使用 `position: sticky;` 的元素被 `transform`、`perspective` 或 `filter` 属性影响**：这些 CSS 属性会创建一个新的包含块，可以阻止 `position: sticky;` 的正常工作。

检查这些可能的问题，通常可以帮助你找出 `position: sticky;` 为什么不起作用的原因。


我这里是因为我没有设置 top

## object-fit | 图片拉伸收缩

https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit

contain
替换的内容将缩放以保持其纵横比，同时适合元素的内容框。整个对象是为了填充框，同时保留其纵横比，因此如果对象的纵横比与框的纵横比不匹配，则该对象将被“信箱化”。

cover
替换的内容调整大小以保持其纵横比，同时填充元素的整个内容框。如果对象的纵横比与其框的纵横比不匹配，则将剪裁对象以适合。

fill
替换的内容的大小将填充元素的内容框。整个对象将完全填满框。如果对象的纵横比与其框的纵横比不匹配，则对象将被拉伸以适合。

none
替换的内容不会调整大小。

scale-down
内容的大小与指定的内容相同，以较小的具体对象大小为准

## flex | 流动布局

### flex-warp | 换行
flex-wrap:  warp 可以设置子元素根据内容换行
