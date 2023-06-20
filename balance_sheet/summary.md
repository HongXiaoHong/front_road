
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