"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 4 - componente com extensão
const react_1 = __importDefault(require("react"));
const SecondComponent = (props) => {
    return (<div>
            <p>Meu segundo componente!</p>
            <p>Tem até uma prop: {props.name}</p>
        </div>);
};
exports.default = SecondComponent;
