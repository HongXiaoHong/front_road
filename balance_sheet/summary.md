
```css
tr.total {
    border-bottom: 4px double #0a0a23;
    font-weight: bold;
}
```

CSS中，`tr.total`选择器的`border-bottom`属性被设置为`4px double #0a0a23`。这意味着你想要在每个`tr.total`元素的底部添加一个双线边框，宽度为4px，颜色为`#0a0a23`。

然而，当你没有设置`border-collapse: collapse;`时，这个边框可能不会按照你期望的方式显示。这是因为在`border-collapse: separate;`（默认值）的情况下，每个单元格都有自己的边框，这些边框是分开的。这意味着，尽管你在`tr.total`上设置了底部边框，但实际上每个单元格都有自己的边框，这可能会覆盖或干扰你在`tr.total`上设置的边框。

当你设置`border-collapse: collapse;`时，所有的边框都会合并为一个单一的边框。这时，你在`tr.total`上设置的底部边框会应用到整个行，因为所有的单元格边框都已经合并了。

所以，如果你想要在整个`tr.total`行的底部设置一个双线边框，你需要使用`border-collapse: collapse;`。如果你只想要在每个单元格的底部设置边框，你可以不使用`border-collapse`属性，或者设置它为`separate`。



```css
tbody td {
    /* 设置了这个 后面数据表格的大小才会变, 确切来说, 只有设置了这个属性
    后面的最大最小才能生效
    */
    /* 其实也可以直接设置成 4rem 就好 */
    width: 100vw; 
    min-width: 4rem;
    max-width: 4rem;
  }
```

em跟rem的区别, 举个例子说明一下

CSS中的`em`和`rem`都是相对长度单位，都是根据字体大小来设定的。他们的区别主要体现在相对于哪个元素的字体大小进行设定。

-   `em`：1em 等于其父元素的字体大小。所以，如果一个元素的`font-size`设置为`1.5em`，那么这个元素的字体大小就是其父元素字体大小的1.5倍。如果父元素没有设定`font-size`，则会递归向上查找，直到找到设定了`font-size`的祖先元素，如果全部没有设置，那么参照浏览器的默认字体大小，通常是16px。
    
-   `rem`：这是"root em"的缩写，1rem 等于根元素（通常是`<html>`）的字体大小。无论嵌套多深，`rem`都是参照根元素的`font-size`来设定。
    

这两个单位的主要区别在于，`em`会受到父元素字体大小的影响，而`rem`则是始终相对于根元素。

举个例子：

HTML 结构：

```
html<html>
  <body>
    <div class="box">
      <p class="text">Hello World</p>
    </div>
  </body>
</html>

```

CSS 设置：

```
csshtml {
  font-size: 20px; /* 这是根元素的字体大小 */
}

body {
  font-size: 30px; /* 这会影响.em的计算，不影响.rem的计算 */
}

.box {
  font-size: 2em; /* 最终的计算结果是60px，因为其父元素 body 的字体大小是30px */
  height: 2rem; /* 最终的计算结果是40px，因为根元素 html 的字体大小是20px */
}

.text {
  font-size: 0.5em; /* 最终的计算结果是30px，因为其父元素 .box 的字体大小是60px */
  height: 0.5rem; /* 最终的计算结果是10px，因为根元素 html 的字体大小是20px */
}

```

在这个例子中，你可以看到，尽管`.box`和`.text`的`em`和`rem`值都是相同的，但由于他们分别相对于其父元素和根元素，所以计算出来的实际像素值是不同的。
