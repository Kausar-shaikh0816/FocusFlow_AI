import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useTasks } from "../context/TaskContext";

function Schedule() {
  const { tasks, addTask } = useTasks();

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

    // Check required fields
    if (!form.title || !form.date || !form.time) {
      alert("Please fill Title, Date and Time");
      return;
    }

    // Add task through TaskContext
    addTask(form);

    // Clear form after adding
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

          {/* Page Header */}
          <div className="page-header">
            <div>
              <p className="section-label">
                PLAN YOUR DAY
              </p>

              <h2>Schedule</h2>

              <p className="page-description">
                Add and manage your upcoming tasks.
              </p>
            </div>
          </div>


          <div className="schedule-container">

            {/* =========================
                ADD TASK FORM
            ========================= */}

            <div className="schedule-form-card">

              <h3>➕ Add New Task</h3>

              <form onSubmit={handleSubmit}>

                {/* Task Title */}
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


                {/* Date + Time */}
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


                {/* Category + Priority */}
                <div className="form-row">

                  <div className="form-group">

                    <label>Category</label>

                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                    >

                      <option value="Study">
                        Study
                      </option>

                      <option value="AWS">
                        AWS
                      </option>

                      <option value="Data Engineering">
                        Data Engineering
                      </option>

                      <option value="Japanese">
                        Japanese
                      </option>

                      <option value="Project">
                        Project
                      </option>

                      <option value="Personal">
                        Personal
                      </option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>Priority</label>

                    <select
                      name="priority"
                      value={form.priority}
                      onChange={handleChange}
                    >

                      <option value="Low">
                        Low
                      </option>

                      <option value="Medium">
                        Medium
                      </option>

                      <option value="High">
                        High
                      </option>

                    </select>

                  </div>

                </div>


                {/* Add Task Button */}
                <button
                  type="submit"
                  className="save-task-btn"
                >
                  Add Task
                </button>

              </form>

            </div>


            {/* =========================
                SCHEDULED TASKS
            ========================= */}

            <div className="scheduled-tasks-card">

              {/* Header */}
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
                  {tasks.length}{" "}
                  {tasks.length === 1 ? "Task" : "Tasks"}
                </span>

              </div>


              {/* Empty State */}
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

                /* Task List */
                <div className="scheduled-task-list">

                  {tasks.map((task) => (

                    <div
                      className="scheduled-task"
                      key={task.id}
                    >

                      {/* Date and Time */}
                      <div className="task-date">

                        <strong>
                          {task.date}
                        </strong>

                        <span>
                          {task.time}
                        </span>

                      </div>


                      {/* Task Information */}
                      <div className="scheduled-task-info">

                        <h3>
                          {task.title}
                        </h3>

                        <p>
                          {task.category}
                        </p>

                      </div>


                      {/* Priority */}
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