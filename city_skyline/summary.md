:root CSS 伪类匹配表示文档的树的根元素。在 HTML 中， :root 表示 <html> 元素，与选择器 html 相同，只是它的特异性更高。

### 生命变量

全局变量 放到:root伪元素选择器好点
如果只是部分用到, 就放到其父元素的选择器 就好

```css
/* Selects the root element of the document:
   <html> in the case of HTML */
:root {
  --background1: yellow;
}

```

### linear-gradient

[linear-gradient() - CSS: Cascading Style Sheets | MDN --- 线性渐变（） - CSS：级联样式表 |多核 (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

> linear-gradient() 线性梯度（）
> 
> The **`linear-gradient()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [function](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) data type, which is a special kind of [`<image>`](https://developer.mozilla.org/en-US/docs/Web/CSS/image).  
> `linear-gradient()` CSS 函数创建一个图像，该图像由沿直线的两种或多种颜色之间的渐进过渡组成。其结果是数据类型为 `<gradient>` 的对象，这是一种特殊的 `<image>` 类型。

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/msedge_EZU4hWYoBr.png)

```css
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
```

### repeating-linear-gradient()

可以做出一个楼房重复的窗户效果

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/fJIJQSwZJp.png)

> 重复线性梯度（）
> 
> The **`repeating-linear-gradient()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [function](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) creates an image consisting of repeating linear gradients. It is similar to [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container. The function's result is an object of the [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) data type, which is a special kind of [`<image>`](https://developer.mozilla.org/en-US/docs/Web/CSS/image).  
> `repeating-linear-gradient()` CSS 函数创建一个由重复线性渐变组成的图像。它类似于 `linear-gradient()` 并采用相同的参数，但它在所有方向上无限重复颜色停止，以覆盖其整个容器。该函数的结果是 `<gradient>` 数据类型的对象，这是一种特殊的 `<image>` 。

[repeating-linear-gradient() - CSS: Cascading Style Sheets | MDN --- 重复线性渐变（） - CSS：级联样式表 |多核 (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient)

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/msedge_v2FUwi8Dov.png)

```css
background: repeating-linear-gradient(45deg, #3f87a6, #ebf8e1 15%, #f69d3c 20%);
```

### radial-gradient() 径向梯度（）

可以做出一个太阳的效果

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/msedge_332Lu9L511.png)

> radial-gradient() 径向梯度（）
> 
> The **`radial-gradient()`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [function](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) creates an image consisting of a progressive transition between two or more colors that radiate from an origin. Its shape may be a circle or an ellipse. The function's result is an object of the [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) data type, which is a special kind of [`<image>`](https://developer.mozilla.org/en-US/docs/Web/CSS/image).  
> `radial-gradient()` CSS 函数创建一个图像，该图像由从原点辐射的两种或多种颜色之间的渐进过渡组成。它的形状可以是圆形或椭圆形。该函数的结果是数据类型为 `<gradient>` 的对象，这是一种特殊的 `<image>` 类型。

```css
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/msedge_l2wVmZEJXy.png)