function TaskCard({ title, time, category, priority, completed }) {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>

      <div className="task-check">
        {completed ? "✓" : "○"}
      </div>

      <div className="task-info">

        <h3>{title}</h3>

        <p>
          🕐 {time} &nbsp; • &nbsp; {category}
        </p>

      </div>

      <span className={`priority ${priority.toLowerCase()}`}>
        {priority}
      </span>

    </div>
  );
}

export default TaskCard;