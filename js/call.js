function person() {
    console.log(this.name);
}


const me = {
    name: "hong"
}

person.call(me)
console.log(person)

console.log(person.call)
console.log(person.prototype)
console.log(person.prototype.call)
console.log(person.prototype.prototype)



class Car {
    constructor(name) {
        this.name = name
    }
}

const car = new Car("bmw");




console.log("--------car--------")
console.log(car)
console.log(car.prototype)
console.log(car.__proto__)
console.log(Car.prototype)
console.log("car.__proto__ == Car.prototype => ", car.__proto__ == Car.prototype)
console.log("--------Car--------")
console.log(Car)
console.log(Car.call)
console.log(Car.prototype)
console.log("Car.prototype.__proto__ == Object.prototype => ", Car.prototype.__proto__ == Object.prototype)
console.log(Car.constructor.prototype)
console.log(Car.constructor.prototype.call)
console.log(Car.constructor.call)
console.log(Car.prototype.__proto__ == person.prototype.__proto__)

console.log(":?--------prototype test-----------")
function Parent(age) {
    this.age = age;
}
Parent.prototype.instanceFunc = () => { }    // 为了看清楚，我们给Parent加了一个实例方法，不影响继承方式

function Child(age) {
    Parent.call(this, age);
}

const pp = Object.create(Parent.prototype);
Child.prototype = pp;                 // 就这一行代码不一样
Child.prototype.constructor = Child;

const obj = new Child(50);

console.log(obj.age);    // 50
console.log("pp == Parent.prototype => ", pp == Parent.prototype)
console.log("pp.__proto__ == Parent.prototype => ", pp.__proto__ == Parent.prototype)
console.log("pp __proto__ => ", pp.__proto__)

Parent.prototype.test = "abc"
console.log(obj.test)

const people = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const mine = Object.create(people);

mine.name = 'Matthew'; // "name" is a property set on "mine", but not on "people"
mine.isHuman = true; // Inherited properties can be overwritten

mine.printIntroduction();
console.log("mine.__proto__ == person => ", mine.__proto__ == people)
// Expected output: "My name is Matthew. Am I human? true"
console.log("--------prototype test-----------:)")
console.log(":~--------fibonacci test-----------")
const fibonacci = (x) => {
    if (x === 1 || x === 2) {
        return 1;
    }

    return fibonacci(x - 1) + fibonacci(x - 2);
}

// 第一个参数是需要缓存的函数，第二个参数是用来生成缓存key的方法，如果不传就用第一个参数做key
const memo = function (fn, hasher) {
    const memoFun = function () {
        const cache = memoFun.cache;
        const args = [].slice.apply(arguments);
        const hashKey = hasher ? hasher.apply(this, arguments) : args[0];
        if (!cache[hashKey]) {
            cache[hashKey] = fn.apply(this, arguments);
        }

        return cache[hashKey];
    }

    memoFun.cache = {};
    return memoFun;
}
const cachedfFibonacci = memo(fibonacci);

// 然后看下效果
let startTime = new Date().getTime();
cachedfFibonacci(40);
let needTime = new Date().getTime() - startTime;

console.log(needTime); // 第一次运行时间还是959毫秒

// 再调一次
startTime = new Date().getTime();
cachedfFibonacci(40);
needTime = new Date().getTime() - startTime;

console.log(needTime); // 时间直接变为0了，直接取缓存，快到1毫秒都不要
console.log(cachedfFibonacci); // 查看数据

console.log("--------prototype test-----------:)")
console.log("--------this test-----------:)")

function func() {
    console.log('func this:', this);// 这里的this指向谁
    function func2() {
        console.log('func2 this:', typeof this);// 这里的this指向谁 node 指向 global 全局对象, 如果是浏览器则是 windows 对象
    }
    func2();
}
func();
new func();

console.log("--------this test-----------:)")
