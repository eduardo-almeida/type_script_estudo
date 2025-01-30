"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = void 0;
const react_1 = __importStar(require("react"));
// 5 - importação de componentes
const FirstComponent_1 = __importDefault(require("./components/FirstComponent"));
const SecondComponent_1 = __importDefault(require("./components/SecondComponent"));
// 6 - destructuring
const Destructuring_1 = __importStar(require("./components/Destructuring"));
// 7 -  useState
const State_1 = __importDefault(require("./components/State"));
const Context_1 = __importDefault(require("./components/Context"));
exports.AppContext = (0, react_1.createContext)(null);
function App() {
    // 1 - variaveis
    const name = "Matheus";
    const age = 30;
    const isWorking = true;
    // 2 - funções
    const userGreeting = (name) => {
        return `Olá, ${name}!`;
    };
    // 8 - type
    const myText = "Tem algum texto aqui!";
    const mySecondText = null;
    const opa = "Ou";
    // 9 - context
    const contextValue = {
        language: "JavaScript",
        framework: "Express",
        projects: 5
    };
    return (<exports.AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TS</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (<p>Está trabalhando no momento</p>)}
        {userGreeting(name)}
        <FirstComponent_1.default />
        <SecondComponent_1.default name="Teste"/>
        <Destructuring_1.default title="Primeiro post" content="Post muiiiito bom, sobre TS" commentsQty={10} tags={["JavaScript", "TypeScript"]} category={Destructuring_1.Category.TS}/>
        <State_1.default />
        {myText &&
            <p>Tem texto em myText</p>}
        {mySecondText &&
            <p>Tem texto em mySecondText</p>}
        {(!myText || !mySecondText) &&
            <p>Alguma das variáveis de texto está vazia!</p>}
      </div>
      <Context_1.default />
      </exports.AppContext.Provider>);
}
exports.default = App;
