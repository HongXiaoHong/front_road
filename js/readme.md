# js 学习记录

## 手写promise
手写一个 promise
已完成
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

存在问题:

已解决问题:
- 传递 resolve 函数出现 this 访问变量的问题
    - 通过绑定 this, 显示指定执行上下文是当前对象是 MyPromise 对象, 而不是全局对象
- 异步执行之后无法调用 then 方法
    - 通过在调用 then 方法的时候将处理函数记录到类的属性中, 在 resolve/reject 中进行回调