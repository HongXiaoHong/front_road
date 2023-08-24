

class MyPromise {
    static PENDING = "PENDING";
    static FULFILLED = "FULFILLED";
    static REJECTED = "REJECTED";
    #status;
    #result;
    #handlers = [];

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
        this.#changeStatus(MyPromise.FULFILLED, data);
    }

    // 状态 => 已拒绝 设置错误信息
    #reject(error) {
        this.#changeStatus(MyPromise.REJECTED, error);
    }

    // 状态修改, 设置数据
    #changeStatus(status, data) {
        if (this.#status !== MyPromise.PENDING) return;
        this.#status = status;
        this.#result = data;
        // 这里需要用到回调的函数, 所以需要把 then 方法的函数存到类的属性中
        this.#run();
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.#handlers.push({
                onFulfilled,
                onRejected,
                resolve,
                reject
            });
            this.#run();
        })
    }

    #run() {

        if (this.#status === MyPromise.PENDING) return;
        while (this.#handlers.length) {
            let {
                onFulfilled,
                onRejected
            } = this.#handlers.shift();
            if (this.#status === MyPromise.FULFILLED) {
                if (typeof onFulfilled == "function") {
                    onFulfilled(this.#result)
                }
            }
            if (this.#status === MyPromise.REJECTED) {
                if (typeof onRejected == "function") {
                    onRejected(this.#result)
                }
            }
        }
    }
}

/* new MyPromise((resolve, reject) => {
    console.log("我进入 promise 的构造函数啦");
    resolve("hello promise");
}) */
// 如果不是明确对象调用, 或者是使用 call/apply/bind 指定调用者
// 像这种把函数传递传递执行的, 就会把执行上下文置为全局
new MyPromise(function (resolve, reject) {
    console.log("我进入 promise 的构造函数啦");
    setTimeout(() => {
        // 存在问题 异步执行之后无法调用 then 方法
        resolve("hello promise");
    }, 0);
})
    .then((data) => {
        console.log("data is ", data);
    });


/*
* 结果:
new MyPromise(function (resolve, reject) {
    throw 123;
})
new MyPromise(function (resolve, reject) {
    // 异步错误无法捕获
    setTimeout(() => {
        throw 123;
    }, 0);
})

123

D:\documents\projects\github\branch\front_road\js\my-promise.js:76
        throw 123;
        ^
123
(Use `node --trace-uncaught ...` to show where the exception was thrown)

Node.js v18.16.1


* */