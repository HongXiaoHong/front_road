/* new Promise((resolve, reject) => {
    console.log("我进入 promise 的构造函数啦");
    resolve("hello promise");
}).then((data) => {
    console.log("data is ", data);
});
 */


class MyPromise {
    static PENDING = "PENDING";
    static FULFILLED = "FULFILLED";
    static REJECTED = "REJECTED";
    #status;
    #data;
    #error;

    constructor(fn) {
        this.#status = MyPromise.PENDING;
        try {
            // 通过绑定 this, 显示指定执行上下文是当前对象是 MyPromise 对象, 而不是全局对象
            fn(this.#resolve.bind(this), this.#reject.bind(this));
        } catch (e) {
            console.error(e);
            this.#reject(e)
        }
    }

    // 将 promise 的状态置为 已兑现 设置数据
    #resolve(data) {
        this.#status = MyPromise.FULFILLED;
        this.#data = data;
    }

    // 状态 => 已拒绝 设置错误信息
    #reject(error) {
        this.#status = MyPromise.REJECTED;
        this.#error = error;
        console.error(error);
    }

    then(onFulfilled, onRejected) {
        if (this.#status === MyPromise.FULFILLED) {
            onFulfilled(this.#data)
        }
        if (this.#status === MyPromise.REJECTED) {
            onRejected(this.#error)
        }
    }
}

/* new MyPromise((resolve, reject) => {
    console.log("我进入 promise 的构造函数啦");
    resolve("hello promise");
}) */
// 如果不是明确对象调用, 或者是使用 call/apply/bind 指定调用者
// 像这种把函数传递传递执行的, 就会把执行上下文置为全局
new MyPromise(function(resolve, reject) {
    console.log("我进入 promise 的构造函数啦");
    resolve("hello promise");
})
 .then((data) => {
    console.log("data is ", data);
});