"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TaskList_module_css_1 = __importDefault(require("./TaskList.module.css"));
const TaskList = ({ taskList, handleDelete, handleEdit }) => {
    return (<>
      {taskList.length > 0 ? (taskList.map((task, index) => (<div key={index} className={TaskList_module_css_1.default.task}>
            <div className={TaskList_module_css_1.default.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={TaskList_module_css_1.default.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i className="bi bi-trash" onClick={() => handleDelete(task.title)}></i>
            </div>
          </div>))) : (<p>Não há tarefas cadastradas</p>)}
    </>);
};
exports.default = TaskList;
