
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Schedule() {
  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    category: "Study",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.date || !form.time) {
      alert("Please fill Title, Date and Time");
      return;
    }

    const newTask = {
      id: Date.now(),
      ...form,
    };

    setTasks([...tasks, newTask]);

    setForm({
      title: "",
      date: "",
      time: "",
      category: "Study",
      priority: "Medium",
    });
  };

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        <div className="schedule-page">

          <div className="page-header">
            <div>
              <p className="section-label">PLAN YOUR DAY</p>

              <h2>Schedule</h2>

              <p className="page-description">
                Add and manage your upcoming tasks.
              </p>
            </div>
          </div>

          <div className="schedule-container">

            {/* Add Task Form */}
            <div className="schedule-form-card">

              <h3>➕ Add New Task</h3>

              <form onSubmit={handleSubmit}>

                <div className="form-group">

                  <label>Task Title</label>

                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. Learn SQL Joins"
                    value={form.title}
                    onChange={handleChange}
                  />

                </div>

                <div className="form-row">

                  <div className="form-group">

                    <label>Date</label>

                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="form-group">

                    <label>Time</label>

                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">

                    <label>Category</label>

                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                    >

                      <option>Study</option>
                      <option>AWS</option>
                      <option>Data Engineering</option>
                      <option>Japanese</option>
                      <option>Project</option>
                      <option>Personal</option>

                    </select>

                  </div>

                  <div className="form-group">

                    <label>Priority</label>

                    <select
                      name="priority"
                      value={form.priority}
                      onChange={handleChange}
                    >

                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>

                    </select>

                  </div>

                </div>

                <button
                  type="submit"
                  className="save-task-btn"
                >
                  Add Task
                </button>

              </form>

            </div>

            {/* Task List */}
            <div className="scheduled-tasks-card">

              <div className="section-header">

                <div>

                  <p className="section-label">
                    UPCOMING
                  </p>

                  <h3>
                    Scheduled Tasks
                  </h3>

                </div>

                <span className="task-count">
                  {tasks.length} Tasks
                </span>

              </div>

              {tasks.length === 0 ? (

                <div className="empty-state">

                  <div>📅</div>

                  <h3>
                    No tasks scheduled
                  </h3>

                  <p>
                    Add your first task using the form.
                  </p>

                </div>

              ) : (

                <div className="scheduled-task-list">

                  {tasks.map((task) => (

                    <div
                      className="scheduled-task"
                      key={task.id}
                    >

                      <div className="task-date">

                        <strong>
                          {task.date}
                        </strong>

                        <span>
                          {task.time}
                        </span>

                      </div>

                      <div className="scheduled-task-info">

                        <h3>
                          {task.title}
                        </h3>

                        <p>
                          {task.category}
                        </p>

                      </div>

                      <span
                        className={`priority ${task.priority.toLowerCase()}`}
                      >
                        {task.priority}
                      </span>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Schedule;
