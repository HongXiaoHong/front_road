# js 学习记录

## my-promise.js | 手写promise
手写一个 promise

### 已完成
- 构造函数
    - 执行传进来执行的方法, 将resolve/reject传递给参数中的方法
- then
    - 状态修改后执行已兑现方法还是已拒绝方法
- 修改MyPromise 的属性跟方法为私有属性/方法
- 执行构造器函数过程中, 发生错误也要将promise状态置为错误
- 执行结果由 #data/#error 改为 #result
- 将 resolve/reject 执行的结果提取成一个公共的函数
- resolve/reject 方法增加状态改变判断, 不是待定不做动作, 因为 promise 的状态是不可逆的
- 异步错误无法捕获
- 微任务队列实现
  - node 里面使用 process 的 nextTick 进行实现
  - 浏览器环境下, 使用 MutationObserver 实现
  - 由于微任务是由环境提供, 除了以上两种情况, 使用 settimeout 默认实现

--- 
一道华丽的分界线

上面是 promise A+ 的标准
也就是 then 方法的 都算 promise, 也被叫做  promise like

下面是 es6 的方法

可以参见 mdn 的文档

#### catch
  参见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

Promise 实例的 catch() 方法用于注册一个在 promise 被拒绝时调用的函数。

它会立即返回一个等效的 Promise 对象，这可以允许你链式调用其他 promise 的方法。

此方法是 Promise.prototype.then(undefined, onRejected) 的一种简写形式。

#### finally
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally

Promise 实例的 finally() 方法用于注册一个在 promise 敲定（兑现或拒绝）时调用的函数。它会立即返回一个等效的 Promise 对象，这可以允许你链式调用其他 promise 方法。

#### resolve

resolve https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
Promise.resolve() 静态方法将给定的值转换为一个 Promise。如果该值本身就是一个 Promise，那么该 Promise 将被返回；如果该值是一个 thenable 对象，Promise.resolve() 将调用其 then() 方法及其两个回调函数；否则，返回的 Promise 将会以该值兑现。

### 存在问题:


### 已解决问题:
- 传递 resolve 函数出现 this 访问变量的问题
    - 通过绑定 this, 显示指定执行上下文是当前对象是 MyPromise 对象, 而不是全局对象
- 异步执行之后无法调用 then 方法
    - 通过在调用 then 方法的时候将处理函数记录到类的属性中, 在 resolve/reject 中进行回调
- 多个 then 进行调用
  - 穿透调用 .then()
  - 什么时候更改状态
    - 返回 promise 对象处理 