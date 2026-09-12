import Sidebar from "../components/Sidebar";
import { useTasks } from "../context/TaskContext";

function Tasks() {
  const {
    tasks,
    toggleTask,
    deleteTask,
  } = useTasks();

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        <div className="tasks-page">

          {/* =========================
              HEADER
          ========================= */}

          <div className="page-header">

            <div>
              <p className="section-label">
                TASK MANAGEMENT
              </p>

              <h2>My Tasks</h2>

              <p className="page-description">
                Manage your tasks and track your progress.
              </p>
            </div>

          </div>


          {/* =========================
              TASK STATISTICS
          ========================= */}

          <div className="task-stats">

            <div className="task-stat-card">
              <span>Total Tasks</span>
              <strong>{tasks.length}</strong>
            </div>

            <div className="task-stat-card">
              <span>Pending</span>
              <strong>{pendingTasks.length}</strong>
            </div>

            <div className="task-stat-card">
              <span>Completed</span>
              <strong>{completedTasks.length}</strong>
            </div>

          </div>


          {/* =========================
              ALL TASKS
          ========================= */}

          <div className="tasks-section">

            <div className="section-header">

              <div>
                <p className="section-label">
                  YOUR WORK
                </p>

                <h3>
                  All Tasks
                </h3>
              </div>

              <span className="task-count">
                {tasks.length}{" "}
                {tasks.length === 1 ? "Task" : "Tasks"}
              </span>

            </div>


            {/* =========================
                EMPTY STATE
            ========================= */}

            {tasks.length === 0 ? (

              <div className="tasks-empty">

                <div className="empty-icon">
                  📋
                </div>

                <h3>
                  No tasks yet
                </h3>

                <p>
                  Go to Schedule and add your first task.
                </p>

              </div>

            ) : (

              /* =========================
                 TASK LIST
              ========================= */

              <div className="tasks-list">

                {tasks.map((task) => (

                  <div
                    className={`task-item ${
                      task.completed ? "completed" : ""
                    }`}
                    key={task.id}
                  >

                    {/* Complete Button */}

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


                    {/* Task Information */}

                    <div className="task-details">

                      <h3>
                        {task.title}
                      </h3>

                      <div className="task-meta">

                        <span>
                          📅 {task.date}
                        </span>

                        <span>
                          ⏰ {task.time}
                        </span>

                        <span>
                          🏷️ {task.category}
                        </span>

                      </div>

                    </div>


                    {/* Priority */}

                    <span
                      className={`priority ${
                        task.priority.toLowerCase()
                      }`}
                    >
                      {task.priority}
                    </span>


                    {/* Delete Button */}

                    <button
                      className="delete-task-btn"
                      onClick={() => deleteTask(task.id)}
                      title="Delete task"
                    >
                      🗑️
                    </button>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </main>

    </div>
  );
}

export default Tasks;