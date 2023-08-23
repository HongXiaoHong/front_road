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

    constructor(fn) {
        this._status = MyPromise.PENDING;
        try {
            fn(this._resolve, this._reject.bind(this));
        } catch (e) {
            console.error(e);
        }
    }

    _resolve(data) {
        this._status = MyPromise.FULFILLED;
        console.log("data is ", data);
    }

    _reject(error) {
        this._status = MyPromise.REJECTED;
        console.error(error);
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
/* .then((data) => {
    console.log("data is ", data);
}); */