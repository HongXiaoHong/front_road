## flex

此属性是以下 CSS 属性的简写：

- flex-grow
- flex-shrink
- flex-basis

## flow-grow | 空余空间延伸

https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow


CSS 的 `flex-grow` 属性定义了一个 flex 项目的扩张比率。换句话说，当 flex 容器有额外的空间时，`flex-grow` 属性决定了各个项目如何分配这些额外的空间。

假设你有一个 flex 容器，其中有三个项目，分别的 `flex-grow` 值为 1，2，和 1。那么，第二个项目将获得的空间是第一个和第三个项目获得空间的两倍。这是因为 `flex-grow` 值确定了项目相对于其他项目的扩张比率。

示例代码如下：

```html
<div style="display: flex; width: 500px;">
  <div style="flex-grow: 1; background-color: lightblue;">A</div>
  <div style="flex-grow: 2; background-color: lightcoral;">B</div>
  <div style="flex-grow: 1; background-color: lightgreen;">C</div>
</div>
```

在上面的例子中，假设每个块的初始宽度都是 100px。这意味着总共有 200px 的剩余空间需要分配。第一个和第三个块的 `flex-grow` 值为 1，第二个块的 `flex-grow` 值为 2，所以总共有 1 + 2 + 1 = 4 的 "flex 分数"。这意味着第一个和第三个块各会获得 200px * 1/4 = 50px 的额外空间，第二个块会获得 200px * 2/4 = 100px 的额外空间。所以最后，第一个和第三个块的宽度为 150px，第二个块的宽度为 200px。

默认情况下，`flex-grow` 的值为 0，意味着如果存在额外的空间，项目不会扩张。设置 `flex-grow` 为任何正值都会使项目有能力扩张以填充额外的空间。