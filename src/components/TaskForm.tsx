import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/TaskInterface";

interface Props {
  /* Es una funcion que no retorna nada */
  addNewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialStateTask = {
  title: "",
  description: "",
};

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState({
    ...initialStateTask,
    id: "",
    completed: false,
  });

  /* const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name);
    console.log(e.target.value);
  }; */
  //* Improve handleInputChange
  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask({ ...initialStateTask, id: "", completed: false });
  };

  return (
    <div className="card card-body rounded-2">
      <h3>Add Task</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 shadow-none"
          onChange={handleInputChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={4}
          placeholder="Write a description..."
          className="form-control mb-3 shadow-none"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <div className="d-grid">
          <button className="btn btn-primary ">Save</button>
        </div>
      </form>
    </div>
  );
}
