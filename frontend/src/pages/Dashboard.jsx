import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import QuoteCard from "../components/QuoteCard";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  // Get today's date
  const today = new Date();

  const todayString =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  // Today's tasks
  const todayTasks = tasks.filter(
    (task) => task.date === todayString
  );

  // Completed tasks
  const completedTasks = todayTasks.filter(
    (task) => task.completed
  );

  // Pending tasks
  const pendingTasks = todayTasks.filter(
    (task) => !task.completed
  );

  // Overdue tasks
  const overdueTasks = tasks.filter((task) => {
    return (
      task.date < todayString &&
      !task.completed
    );
  });

  // Completion percentage
  const completionRate =
    todayTasks.length === 0
      ? 0
      : Math.round(
          (completedTasks.length / todayTasks.length) * 100
        );

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">

        <Header />

        <div className="dashboard">

          {/* Page Heading */}
          <div className="page-header">
            <div>
              <p className="section-label">
                YOUR PRODUCTIVITY
              </p>

              <h2>Dashboard</h2>

              <p className="page-description">
                Stay focused and make progress every day.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">

            <StatCard
              title="Today's Tasks"
              value={todayTasks.length}
              icon="📋"
            />

            <StatCard
              title="Completed"
              value={completedTasks.length}
              icon="✅"
            />

            <StatCard
              title="Pending"
              value={pendingTasks.length}
              icon="⏳"
            />

            <StatCard
              title="Overdue"
              value={overdueTasks.length}
              icon="⚠️"
            />

          </div>

          {/* Productivity */}
          <div className="productivity-card">

            <div>
              <p className="section-label">
                TODAY'S PROGRESS
              </p>

              <h3>
                {completionRate}% Completed
              </h3>

              <p>
                {completedTasks.length} of{" "}
                {todayTasks.length} tasks completed
              </p>
            </div>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{
                  width: `${completionRate}%`,
                }}
              ></div>
            </div>

          </div>

          {/* Quote */}
          <QuoteCard />

          {/* Today's Tasks */}
          <div className="dashboard-section">

            <div className="section-header">

              <div>
                <p className="section-label">
                  TODAY
                </p>

                <h3>Today's Tasks</h3>
              </div>

              <span className="task-count">
                {todayTasks.length}{" "}
                {todayTasks.length === 1
                  ? "Task"
                  : "Tasks"}
              </span>

            </div>

            {todayTasks.length === 0 ? (

              <div className="empty-state">
                <div>🎯</div>

                <h3>No tasks for today</h3>

                <p>
                  Go to Schedule and add a task
                  for today.
                </p>
              </div>

            ) : (

              <div className="dashboard-task-list">

                {todayTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                  />
                ))}

              </div>

            )}

          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;