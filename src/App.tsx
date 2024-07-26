import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import tasklyLogo from "./assets/taskly-white.svg";
import { Task } from "./interfaces/TaskInterface";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

/*
 *Hay algunas bibliotecas populares que no los hicieron con typeScript, en esos casos se tiene que hacer manualmente o buscar en google:  https://github.com/DefinitelyTyped/DefinitelyTyped y buscar el modulo e instalar o buscar: "nombre de la biblioteca" + types
 */

interface VariablesProps {
  title?: string;
}
/* Variables of Task can be on other page to used on different components */
/* interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
} */

export function App(props: VariablesProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addNewTask = (newTask: Task) => {
    // const addTask = { ...newTask, id: uuidv4(), completed: false };
    setTasks([...tasks, { ...newTask, id: uuidv4(), completed: false }]);
  };

  const deleteATask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const isTaskCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-light text-body" style={{ height: "100vh" }}>
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg bg-primary text-light h4">
        <div className="container">
          <a href="/" className="navbar-brand ">
            <img src={tasklyLogo} alt="Taskly Logo" style={{ width: "4rem" }} />
            {props.title && <h3>{props.title}</h3>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList
                tasks={tasks}
                deleteATask={deleteATask}
                isTaskCompleted={isTaskCompleted}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
