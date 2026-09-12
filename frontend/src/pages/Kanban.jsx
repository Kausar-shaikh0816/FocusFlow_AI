import Sidebar from "../components/Sidebar";
import { useTasks } from "../context/TaskContext";

function Kanban() {
  const {
    tasks,
    updateTaskStatus,
  } = useTasks();

  const columns = [
    {
      id: "BACKLOG",
      title: "Backlog",
      icon: "📦",
    },
    {
      id: "TO DO",
      title: "To Do",
      icon: "📋",
    },
    {
      id: "IN PROGRESS",
      title: "In Progress",
      icon: "⚡",
    },
    {
      id: "COMPLETED",
      title: "Completed",
      icon: "✅",
    },
  ];

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">

        <div className="kanban-page">

          <div className="page-header">
            <div>
              <p className="section-label">
                PROJECT MANAGEMENT
              </p>

              <h2>Kanban Board</h2>

              <p className="page-description">
                Organize your tasks and track their progress.
              </p>
            </div>
          </div>

          <div className="kanban-board">

            {columns.map((column) => {

              const columnTasks = tasks.filter(
                (task) =>
                  (task.status || "TO DO") === column.id
              );

              return (
                <div
                  className="kanban-column"
                  key={column.id}
                >

                  <div className="kanban-column-header">

                    <div>
                      <span>
                        {column.icon}
                      </span>

                      <h3>
                        {column.title}
                      </h3>
                    </div>

                    <span className="kanban-count">
                      {columnTasks.length}
                    </span>

                  </div>

                  <div className="kanban-tasks">

                    {columnTasks.length === 0 ? (

                      <div className="kanban-empty">
                        No tasks
                      </div>

                    ) : (

                      columnTasks.map((task) => (

                        <div
                          className="kanban-task"
                          key={task.id}
                        >

                          <h4>
                            {task.title}
                          </h4>

                          <div className="kanban-task-info">
                            <span>
                              📅 {task.date}
                            </span>

                            <span>
                              ⏰ {task.time}
                            </span>
                          </div>

                          <div className="kanban-task-bottom">

                            <span
                              className={`priority ${
                                task.priority.toLowerCase()
                              }`}
                            >
                              {task.priority}
                            </span>

                            <select
                              value={
                                task.status || "TO DO"
                              }
                              onChange={(e) =>
                                updateTaskStatus(
                                  task.id,
                                  e.target.value
                                )
                              }
                            >
                              <option value="BACKLOG">
                                Backlog
                              </option>

                              <option value="TO DO">
                                To Do
                              </option>

                              <option value="IN PROGRESS">
                                In Progress
                              </option>

                              <option value="COMPLETED">
                                Completed
                              </option>
                            </select>

                          </div>

                        </div>

                      ))

                    )}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </main>
    </div>
  );
}

export default Kanban;