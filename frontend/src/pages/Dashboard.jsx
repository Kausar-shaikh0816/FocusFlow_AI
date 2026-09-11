import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";
import QuoteCard from "../components/QuoteCard";

function Dashboard() {

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Header />

        <section className="dashboard">

          <QuoteCard />

          <div className="stats-grid">

            <StatCard
              title="Total Tasks"
              value="8"
              subtitle="3 pending"
              icon="📝"
            />

            <StatCard
              title="Completed"
              value="5"
              subtitle="This week"
              icon="✅"
            />

            <StatCard
              title="Productivity"
              value="63%"
              subtitle="+8% from last week"
              icon="📈"
            />

            <StatCard
              title="Japanese"
              value="72%"
              subtitle="Learning progress"
              icon="🇯🇵"
            />

          </div>

          <section className="tasks-section">

            <div className="section-header">

              <div>
                <p className="section-label">
                  TODAY
                </p>

                <h2>
                  Today's Tasks
                </h2>
              </div>

              <button className="add-task">
                + Add Task
              </button>

            </div>

            <div className="task-list">

              <TaskCard
                title="AWS Cloud Revision"
                time="7:00 PM"
                category="AWS"
                priority="High"
                completed={false}
              />

              <TaskCard
                title="SQL Practice"
                time="8:00 PM"
                category="Data Engineering"
                priority="Medium"
                completed={true}
              />

              <TaskCard
                title="Japanese Kanji Practice"
                time="9:00 PM"
                category="Japanese"
                priority="Medium"
                completed={false}
              />

            </div>

          </section>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;