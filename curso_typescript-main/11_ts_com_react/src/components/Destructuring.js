"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const react_1 = __importDefault(require("react"));
// 8 - enum
var Category;
(function (Category) {
    Category["JS"] = "JavaScript";
    Category["TS"] = "TypeScript";
    Category["P"] = "Python";
})(Category || (exports.Category = Category = {}));
const Destructuring = ({ title, content, commentsQty, tags, category }) => {
    return (<div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentários: {commentsQty}</p>
            <div>
                {tags.map(tag => (<span>#{tag}</span>))}
            </div>
            <h4>Categoria: {category}</h4>
        </div>);
};
exports.default = Destructuring;
