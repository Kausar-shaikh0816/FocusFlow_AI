import Sidebar from "../components/Sidebar";
import { useTasks } from "../context/TaskContext";
import { useJapanese } from "../context/JapaneseContext";

function Analytics() {
  const { tasks } = useTasks();
  const { progress } = useJapanese();

  // -----------------------------
  // TASK ANALYTICS
  // -----------------------------

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );

  const today = new Date();

  const todayString =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  const overdueTasks = tasks.filter(
    (task) =>
      task.date < todayString &&
      !task.completed
  );

  const completionRate =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks.length /
            tasks.length) *
            100
        );

  // -----------------------------
  // CATEGORY ANALYTICS
  // -----------------------------

  const categories = [
    "Study",
    "AWS",
    "Data Engineering",
    "Japanese",
    "Project",
    "Personal",
  ];

  const categoryData = categories.map(
    (category) => ({
      name: category,
      count: tasks.filter(
        (task) =>
          task.category === category
      ).length,
    })
  );

  // -----------------------------
  // PRIORITY ANALYTICS
  // -----------------------------

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const mediumPriority = tasks.filter(
    (task) => task.priority === "Medium"
  ).length;

  const lowPriority = tasks.filter(
    (task) => task.priority === "Low"
  ).length;

  const maxCategoryCount = Math.max(
    ...categoryData.map(
      (item) => item.count
    ),
    1
  );

  // -----------------------------
  // JAPANESE ANALYTICS
  // -----------------------------

  const japaneseProgress = Math.round(
    (
      Math.min(
        (progress.kanji / 300) * 100,
        100
      ) +
      Math.min(
        (progress.vocabulary / 500) * 100,
        100
      ) +
      Math.min(
        (progress.grammar / 25) * 100,
        100
      ) +
      Math.min(
        (progress.listening / 1000) * 100,
        100
      )
    ) / 4
  );

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <div className="analytics-page">

          {/* HEADER */}

          <div className="page-header">

            <div>

              <p className="section-label">
                PRODUCTIVITY INSIGHTS
              </p>

              <h2>
                Analytics
              </h2>

              <p className="page-description">
                Understand your productivity,
                tasks and learning progress.
              </p>

            </div>

          </div>

          {/* MAIN STATS */}

          <div className="analytics-stats">

            <div className="analytics-stat-card">

              <span>
                Total Tasks
              </span>

              <strong>
                {tasks.length}
              </strong>

            </div>

            <div className="analytics-stat-card">

              <span>
                Completed
              </span>

              <strong>
                {completedTasks.length}
              </strong>

            </div>

            <div className="analytics-stat-card">

              <span>
                Pending
              </span>

              <strong>
                {pendingTasks.length}
              </strong>

            </div>

            <div className="analytics-stat-card">

              <span>
                Overdue
              </span>

              <strong>
                {overdueTasks.length}
              </strong>

            </div>

          </div>

          {/* COMPLETION RATE */}

          <div className="analytics-card">

            <div className="analytics-card-header">

              <div>

                <p className="section-label">
                  PRODUCTIVITY
                </p>

                <h3>
                  Task Completion Rate
                </h3>

              </div>

              <strong className="big-percentage">
                {completionRate}%
              </strong>

            </div>

            <div className="analytics-progress">

              <div
                style={{
                  width: `${completionRate}%`,
                }}
              ></div>

            </div>

            <p className="analytics-description">
              {completedTasks.length} of{" "}
              {tasks.length} tasks completed.
            </p>

          </div>

          {/* TWO COLUMN ANALYTICS */}

          <div className="analytics-grid">

            {/* CATEGORY */}

            <div className="analytics-card">

              <div className="analytics-card-header">

                <div>

                  <p className="section-label">
                    TASK BREAKDOWN
                  </p>

                  <h3>
                    Tasks by Category
                  </h3>

                </div>

              </div>

              <div className="category-chart">

                {categoryData.map(
                  (category) => {

                    const percentage =
                      category.count === 0
                        ? 0
                        : (
                            category.count /
                            maxCategoryCount
                          ) * 100;

                    return (
                      <div
                        className="category-row"
                        key={category.name}
                      >

                        <div className="category-label">
                          <span>
                            {category.name}
                          </span>

                          <strong>
                            {category.count}
                          </strong>
                        </div>

                        <div className="category-bar">

                          <div
                            style={{
                              width: `${percentage}%`,
                            }}
                          ></div>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

            {/* PRIORITY */}

            <div className="analytics-card">

              <div className="analytics-card-header">

                <div>

                  <p className="section-label">
                    PRIORITY
                  </p>

                  <h3>
                    Task Priority
                  </h3>

                </div>

              </div>

              <div className="priority-chart">

                <div className="priority-row">

                  <span>
                    High
                  </span>

                  <strong>
                    {highPriority}
                  </strong>

                </div>

                <div className="priority-row">

                  <span>
                    Medium
                  </span>

                  <strong>
                    {mediumPriority}
                  </strong>

                </div>

                <div className="priority-row">

                  <span>
                    Low
                  </span>

                  <strong>
                    {lowPriority}
                  </strong>

                </div>

              </div>

            </div>

          </div>

          {/* JAPANESE ANALYTICS */}

          <div className="analytics-card japanese-analytics">

            <div className="analytics-card-header">

              <div>

                <p className="section-label">
                  LEARNING ANALYTICS
                </p>

                <h3>
                  Japanese Progress 🇯🇵
                </h3>

              </div>

              <strong className="big-percentage">
                {japaneseProgress}%
              </strong>

            </div>

            <div className="japanese-analytics-grid">

              <div>
                <span>
                  Kanji
                </span>

                <strong>
                  {progress.kanji}
                </strong>
              </div>

              <div>
                <span>
                  Vocabulary
                </span>

                <strong>
                  {progress.vocabulary}
                </strong>
              </div>

              <div>
                <span>
                  Grammar
                </span>

                <strong>
                  {progress.grammar}
                </strong>
              </div>

              <div>
                <span>
                  Listening
                </span>

                <strong>
                  {progress.listening} min
                </strong>
              </div>

              <div>
                <span>
                  Study Sessions
                </span>

                <strong>
                  {progress.sessions}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Analytics;