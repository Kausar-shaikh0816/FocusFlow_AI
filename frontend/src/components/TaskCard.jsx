import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { toggleTask } = useTasks();

  return (
    <div
      className={`dashboard-task-card ${
        task.completed ? "completed" : ""
      }`}
    >

      <button
        className="task-checkbox"
        onClick={() => toggleTask(task.id)}
        title={
          task.completed
            ? "Mark as pending"
            : "Mark as completed"
        }
      >
        {task.completed ? "✓" : ""}
      </button>

      <div className="dashboard-task-info">

        <h3>{task.title}</h3>

        <div className="task-meta">

          <span>
            ⏰ {task.time}
          </span>

          <span>
            🏷️ {task.category}
          </span>

        </div>

      </div>

      <span
        className={`priority ${
          task.priority.toLowerCase()
        }`}
      >
        {task.priority}
      </span>

    </div>
  );
}

export default TaskCard;