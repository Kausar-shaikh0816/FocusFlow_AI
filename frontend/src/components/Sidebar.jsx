import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>FocusFlow</h2>
        <span>AI</span>
      </div>

      <nav>

        <Link
          to="/"
          className={`nav-item ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/schedule"
          className={`nav-item ${
            location.pathname === "/schedule"
              ? "active"
              : ""
          }`}
        >
          📅 Schedule
        </Link>

        <Link
          to="/tasks"
          className={`nav-item ${
            location.pathname === "/tasks"
              ? "active"
              : ""
          }`}
        >
          ✅ Tasks
        </Link>

        <Link
             to="/kanban"
             className={`nav-item ${
                    location.pathname === "/kanban"? "active": ""
  }`}
>
  📋 Kanban
</Link>

<Link
  to="/japanese"
  className={`nav-item ${
    location.pathname === "/japanese"
      ? "active"
      : ""
  }`}
>
  🇯🇵 Japanese
</Link>

<Link
  to="/analytics"
  className={`nav-item ${
    location.pathname === "/analytics"
      ? "active"
      : ""
  }`}
>
  📊 Analytics
</Link>        

        <button className="nav-item">
          🤖 AI Agent
        </button>

      </nav>

      <div className="sidebar-bottom">

        <button className="nav-item">
          ⚙️ Settings
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;