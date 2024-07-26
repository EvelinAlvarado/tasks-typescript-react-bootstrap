import { GoCircle, GoCheckCircleFill } from "react-icons/go";
import { Task } from "../interfaces/TaskInterface";

/* Se recomienda usar useContext o Redux, para no estar pasando de padre a hijo */
interface Props {
  task: Task;
  deleteATask: (id: string) => void;
  isTaskCompleted: (id: string) => void;
}

export default function TaskCard({
  task,
  deleteATask,
  isTaskCompleted,
}: Props) {
  return (
    <div
      className={`card card-body alert ${
        task.completed ? "alert-info" : "alert-danger"
      } rounded-2 d-flex flex-column `}
      style={{ height: "350px" }}
    >
      <h2 className="card-title" style={{ width: "90%" }}>
        {task.title}
      </h2>

      <p className="overflow-auto card-text">{task.description}</p>

      <button
        className="btn btn-info w-100 mt-auto"
        onClick={() => deleteATask(task.id)}
      >
        Delete
      </button>
      <button
        className="position-absolute top-0 end-0 border border-0 bg-transparent h4"
        onClick={() => isTaskCompleted(task.id)}
      >
        {task.completed ? <GoCheckCircleFill /> : <GoCircle />}
      </button>
    </div>
  );
}
