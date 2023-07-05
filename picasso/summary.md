以前自己对于html的想法是只在一个平面进行操作

css本来就是层叠样式表
一直以来确实是狭隘了
通过层叠可以做出一些奇特的效果
在一个平面很难做出来的事, 如果加多一个平面来做就很简单了

一开始我的想法是 每一层平面去构建一个div
把每一层的形状画出来
虽然这样更符合抽象的想法
但可能不太好实现

另一个想法是依附关系强的放在同一个div中
就像这两个一样

![](https://raw.githubusercontent.com/HongXiaoHong/images/main/db/msedge_YeJEtUisv4.png)


### 三角形实现思路
- 使用div width,height 0, 再使用设置不同border宽度,设置 不需要的三角形为transparent 跟随父元素显示
- 可以设置div宽高后, 使用旋转,再使用一个东西挡住