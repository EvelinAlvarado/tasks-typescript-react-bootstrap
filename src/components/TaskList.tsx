import { Task } from "../interfaces/TaskInterface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteATask: (id: string) => void;
  isTaskCompleted: (id: string) => void;
}

export default function TaskList({
  tasks,
  deleteATask,
  isTaskCompleted,
}: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-6 pb-2" key={task.id}>
          <TaskCard
            task={task}
            deleteATask={deleteATask}
            isTaskCompleted={isTaskCompleted}
          />
        </div>
      ))}
    </>
  );
}
