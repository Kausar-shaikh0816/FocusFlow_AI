function Header() {
  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header">

      <div>
        <p className="welcome">Good evening 👋</p>
        <h1>{date}</h1>
      </div>

      <div className="header-actions">
        <button className="icon-button">
          🔔
        </button>

        <div className="profile">
          <div className="avatar">
            K
          </div>

          <div>
            <strong>Kausar</strong>
            <p>Student</p>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;