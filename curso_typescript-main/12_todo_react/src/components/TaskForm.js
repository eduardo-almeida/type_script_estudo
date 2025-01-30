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
const react_1 = __importStar(require("react"));
// styles
const TaskForm_module_css_1 = __importDefault(require("./TaskForm.module.css"));
const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate, }) => {
    const [id, setId] = (0, react_1.useState)(0);
    const [title, setTitle] = (0, react_1.useState)("");
    const [difficulty, setDifficulty] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (task) {
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);
    const addTaskHandler = (e) => {
        e.preventDefault();
        console.log(handleUpdate);
        if (taskList) {
            if (handleUpdate) {
                console.log(title);
                console.log(difficulty);
                handleUpdate(id, title, difficulty);
            }
            else {
                const id = Math.floor(Math.random() * 1000);
                const newTask = { id, title, difficulty };
                setTaskList([...taskList, newTask]);
                setTitle("");
                setDifficulty(0);
            }
        }
    };
    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        }
        else {
            setDifficulty(parseInt(e.target.value));
        }
    };
    return (<form onSubmit={addTaskHandler} className={TaskForm_module_css_1.default.form}>
      <div className={TaskForm_module_css_1.default.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" value={title} onChange={handleChange}/>
      </div>
      <div className={TaskForm_module_css_1.default.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="number" name="difficulty" placeholder="Dificuldade da tarefa (1 a 5)" value={difficulty} onChange={handleChange}/>
      </div>
      <input type="submit" value={btnText}/>
    </form>);
};
exports.default = TaskForm;
