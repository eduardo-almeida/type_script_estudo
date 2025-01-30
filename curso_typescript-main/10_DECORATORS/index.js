"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando o decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("myDecorator(): executado");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
let MyClass = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _testing_decorators;
    return _a = class MyClass {
            testing() {
                console.log("Terminando execução do método");
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _testing_decorators = [myDecorator()];
            __esDecorate(_a, null, _testing_decorators, { kind: "method", name: "testing", static: false, private: false, access: { has: obj => "testing" in obj, get: obj => obj.testing }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const myObj = new MyClass();
myObj.testing();
// 2 - multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou a");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou b");
    };
}
let MultipleClass = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _testing_decorators;
    return _a = class MultipleClass {
            testing() {
                console.log("Terminando execução do método");
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _testing_decorators = [a(), b()];
            __esDecorate(_a, null, _testing_decorators, { kind: "method", name: "testing", static: false, private: false, access: { has: obj => "testing" in obj, get: obj => obj.testing }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const multiple = new MultipleClass();
multiple.testing();
// 3 - class decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando usuário!");
    }
}
let User = (() => {
    let _classDecorators = [classDec];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var User = _classThis = class {
        constructor(name) {
            this.name = name;
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
const matheus = new User("Matheus");
// 4 - method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
let Machine = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _showName_decorators;
    return _a = class Machine {
            constructor(name) {
                this.name = __runInitializers(this, _instanceExtraInitializers);
                this.name = name;
            }
            showName() {
                return `O nome da máquina é: ${this.name}`;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _showName_decorators = [enumerable(false)];
            __esDecorate(_a, null, _showName_decorators, { kind: "method", name: "showName", static: false, private: false, access: { has: obj => "showName" in obj, get: obj => obj.showName }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const trator = new Machine("Trator");
console.log(trator);
// 5 - acessor decorator
let Monster = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _get_showName_decorators;
    let _get_showAge_decorators;
    return _a = class Monster {
            constructor(name, age) {
                this.name = __runInitializers(this, _instanceExtraInitializers);
                this.name = name;
                this.age = age;
            }
            get showName() {
                return `Nome do monstro: ${this.name}`;
            }
            get showAge() {
                return `Idade do monstro: ${this.age}`;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_showName_decorators = [enumerable(true)];
            _get_showAge_decorators = [enumerable(false)];
            __esDecorate(_a, null, _get_showName_decorators, { kind: "getter", name: "showName", static: false, private: false, access: { has: obj => "showName" in obj, get: obj => obj.showName }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_showAge_decorators, { kind: "getter", name: "showAge", static: false, private: false, access: { has: obj => "showAge" in obj, get: obj => obj.showAge }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 6 - property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
let ID = (() => {
    var _a;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    return _a = class ID {
            constructor(id) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                __runInitializers(this, _id_extraInitializers);
                this.id = id;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [formatNumber()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const newItem = new ID("1");
console.log(newItem.id);
// 7 - exemplo real de class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = (() => {
    let _classDecorators = [createdDate];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Book = _classThis = class {
        constructor(id) {
            this.id = id;
        }
    };
    __setFunctionName(_classThis, "Book");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Book = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Book = _classThis;
})();
let Pen = (() => {
    let _classDecorators = [createdDate];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Pen = _classThis = class {
        constructor(id) {
            this.id = id;
        }
    };
    __setFunctionName(_classThis, "Pen");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Pen = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Pen = _classThis;
})();
const newBook = new Book(1);
console.log(newBook);
// 8 - exemplo real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
let Post = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _post_decorators;
    return _a = class Post {
            constructor() {
                this.alreadyPosted = (__runInitializers(this, _instanceExtraInitializers), false);
            }
            post(content, alreadyPosted) {
                this.alreadyPosted = true;
                console.log(`Post do usuário: ${content}`);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _post_decorators = [checkIfUserPosted()];
            __esDecorate(_a, null, _post_decorators, { kind: "method", name: "post", static: false, private: false, access: { has: obj => "post" in obj, get: obj => obj.post }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const somePost = new Post();
somePost.post("Meu primeiro post!", somePost.alreadyPosted);
somePost.post("Meu segundo post!", somePost.alreadyPosted);
// 9 - exemplo real property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
let Admin = (() => {
    var _a;
    let _username_decorators;
    let _username_initializers = [];
    let _username_extraInitializers = [];
    return _a = class Admin {
            constructor(username) {
                this.username = __runInitializers(this, _username_initializers, void 0);
                __runInitializers(this, _username_extraInitializers);
                this.username = username;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _username_decorators = [Max(10)];
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
let pedro = new Admin("pedroadmin123");
let lee = new Admin("lee");
