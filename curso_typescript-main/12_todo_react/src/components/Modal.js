"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal_module_css_1 = __importDefault(require("./Modal.module.css"));
const Modal = ({ children, title }) => {
    const closeModal = (e) => {
        const modal = document.getElementById("modal");
        modal.classList.add("hide");
    };
    return (<div id="modal" className="hide">
      <div className={Modal_module_css_1.default.fade} onClick={closeModal}></div>
      <div className={Modal_module_css_1.default.modal}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>);
};
exports.default = Modal;
