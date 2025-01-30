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
const App_module_css_1 = __importDefault(require("./App.module.css"));
// components
const Footer_1 = __importDefault(require("./components/Footer"));
const Header_1 = __importDefault(require("./components/Header"));
const Modal_1 = __importDefault(require("./components/Modal"));
const TaskForm_1 = __importDefault(require("./components/TaskForm"));
const TaskList_1 = __importDefault(require("./components/TaskList"));
function App() {
    const [taskList, setTaskList] = (0, react_1.useState)([]);
    const [taskToUpdate, setTaskToUpdate] = (0, react_1.useState)(null);
    const deleteTask = (title) => {
        setTaskList(taskList.filter((task) => {
            return task.title !== title;
        }));
    };
    const hideOrShowModal = (display) => {
        const modal = document.getElementById("modal");
        if (display) {
            modal.classList.remove("hide");
        }
        else {
            modal.classList.add("hide");
        }
    };
    const editTask = (task) => {
        hideOrShowModal(true);
        setTaskToUpdate(task);
    };
    const updateTask = (id, title, difficulty) => {
        const updatedTask = { id, title, difficulty };
        const updatedItems = taskList.map((task) => {
            return task.id === updatedTask.id ? updatedTask : task;
        });
        setTaskList(updatedItems);
        hideOrShowModal(false);
    };
    return (<div>
      <Modal_1.default title="Editar tarefa" children={<TaskForm_1.default btnText="Editar" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
      <Header_1.default />
      <main className={App_module_css_1.default.main}>
        <div className={App_module_css_1.default.todo_form}>
          <h2>O que você vai fazer?</h2>
          <TaskForm_1.default taskList={taskList} setTaskList={setTaskList} btnText="Cadastrar"/>
        </div>
        <div className="todo-container">
          <h2>Suas tarefas:</h2>
          <TaskList_1.default taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer_1.default />
    </div>);
}
exports.default = App;
