"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer_module_css_1 = __importDefault(require("./Footer.module.css"));
const Footer = () => {
    return (<footer className={Footer_module_css_1.default.footer}>
      <p>
        <span>React + TS Todo</span> @ 2021
      </p>
    </footer>);
};
exports.default = Footer;
