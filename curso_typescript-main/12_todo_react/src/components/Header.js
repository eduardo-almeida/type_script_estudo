"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
const Header = () => {
    return (<header className={Header_module_css_1.default.header}>
      <h1>React + TS Todo</h1>
    </header>);
};
exports.default = Header;
