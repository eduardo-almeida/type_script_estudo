"use strict";
// 1 - instalar e testar typescript
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// npm i -g typescript
// tsc -v
// 2 - primeiro programa
const x = 5;
// x = "teste";
// 3 - inferência x annotation
const y = 10;
const z = 15;
// 4 - estrutura inicial
// criação de pastas
// tsc --init
// ajuste de outDir e rootDir
// teste de target com es3 (versoes antigas) e versoes novas
// 5 - tipos básicos
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
console.log(firstName);
console.log(typeof firstName);
console.log(age);
console.log(isAdmin);
// 6 - arrays
const myNumbers = [1, 2, 3];
// myNumbers = "teste"
myNumbers.push(4);
console.log(myNumbers);
// 7 - tuplas
let myTuple;
myTuple = [10, "string", ["a", "b", "c"]];
// 8 - object literals
const user = {
    name: "Matheus",
    age: 30,
};
console.log(user);
// user.job = "Programmer"
// user.age = "30"
// 9 - any
let a = 0;
a = "teste";
a = true;
a = [];
// 10 - union type
let id = "10";
id = 10;
const userId = 10;
const productId = "0001";
// 12 - enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["L"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
// 12.5 - literal types
let teste;
// teste = "outrovalor"
teste = "algumvalor";
// 13 - funções
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
function sayHelloTo(name) {
    return `Hello ${name}!`;
}
console.log(sayHelloTo("Matheus"));
function logger(msg) {
    console.log(msg);
}
logger("Testando");
function greeting(name, greet) {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
greeting("João");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 10,
    n2: 12,
};
console.log(multiplyNumbers(someNumbers));
// 15 - narrowing
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número!");
}
doSomething(5);
doSomething(false);
// 16 - generics
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItens(a1);
showArrayItens(a2);
// 17 - classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
}
const zeca = new User("Zéca", "Admin", true);
zeca.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do veículo é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// 19 - heranca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
// 20 - decorators
// setar experimentalDecorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.created = new Date();
            }
        };
    };
}
let Person = (() => {
    let _classDecorators = [BaseParameters()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Person = _classThis = class {
        constructor(name) {
            this.name = name;
        }
    };
    __setFunctionName(_classThis, "Person");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
})();
const sam = new Person("Sam");
console.log(sam);
