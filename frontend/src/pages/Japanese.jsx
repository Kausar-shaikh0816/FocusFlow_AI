import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useJapanese } from "../context/JapaneseContext";

function Japanese() {
  const {
    progress,
    addStudySession,
  } = useJapanese();

  const [form, setForm] = useState({
    kanji: "",
    vocabulary: "",
    grammar: "",
    listening: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.kanji &&
      !form.vocabulary &&
      !form.grammar &&
      !form.listening
    ) {
      alert(
        "Please enter at least one study activity."
      );

      return;
    }

    addStudySession(form);

    setForm({
      kanji: "",
      vocabulary: "",
      grammar: "",
      listening: "",
    });

    alert("Study session saved! 🇯🇵");
  };

  /*
    Simple progress calculation.

    Target:
    Kanji       = 300
    Vocabulary  = 500
    Grammar     = 25
    Listening   = 1000 minutes

    We cap each percentage at 100.
  */

  const kanjiProgress = Math.min(
    (progress.kanji / 300) * 100,
    100
  );

  const vocabularyProgress = Math.min(
    (progress.vocabulary / 500) * 100,
    100
  );

  const grammarProgress = Math.min(
    (progress.grammar / 25) * 100,
    100
  );

  const listeningProgress = Math.min(
    (progress.listening / 1000) * 100,
    100
  );

  const overallProgress = Math.round(
    (
      kanjiProgress +
      vocabularyProgress +
      grammarProgress +
      listeningProgress
    ) / 4
  );

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <div className="japanese-page">

          {/* HEADER */}

          <div className="page-header">

            <div>

              <p className="section-label">
                LANGUAGE LEARNING
              </p>

              <h2>
                Japanese Learning 🇯🇵
              </h2>

              <p className="page-description">
                Track your Japanese study progress
                and build consistency.
              </p>

            </div>

          </div>

          {/* OVERALL PROGRESS */}

          <div className="japanese-overall-card">

            <div>

              <p className="section-label">
                OVERALL PROGRESS
              </p>

              <h3>
                {overallProgress}%
              </h3>

              <p>
                Keep learning consistently!
              </p>

            </div>

            <div className="japanese-progress-circle">
              {overallProgress}%
            </div>

          </div>

          {/* PROGRESS CARDS */}

          <div className="japanese-progress-grid">

            <div className="japanese-progress-card">

              <div className="japanese-card-icon">
                漢
              </div>

              <h3>Kanji</h3>

              <strong>
                {progress.kanji}
              </strong>

              <span>
                / 300
              </span>

              <div className="mini-progress">
                <div
                  style={{
                    width: `${kanjiProgress}%`,
                  }}
                ></div>
              </div>

            </div>

            <div className="japanese-progress-card">

              <div className="japanese-card-icon">
                あ
              </div>

              <h3>Vocabulary</h3>

              <strong>
                {progress.vocabulary}
              </strong>

              <span>
                / 500
              </span>

              <div className="mini-progress">
                <div
                  style={{
                    width: `${vocabularyProgress}%`,
                  }}
                ></div>
              </div>

            </div>

            <div className="japanese-progress-card">

              <div className="japanese-card-icon">
                文
              </div>

              <h3>Grammar</h3>

              <strong>
                {progress.grammar}
              </strong>

              <span>
                / 25
              </span>

              <div className="mini-progress">
                <div
                  style={{
                    width: `${grammarProgress}%`,
                  }}
                ></div>
              </div>

            </div>

            <div className="japanese-progress-card">

              <div className="japanese-card-icon">
                🎧
              </div>

              <h3>Listening</h3>

              <strong>
                {progress.listening}
              </strong>

              <span>
                min
              </span>

              <div className="mini-progress">
                <div
                  style={{
                    width: `${listeningProgress}%`,
                  }}
                ></div>
              </div>

            </div>

          </div>

          {/* STUDY SESSION */}

          <div className="japanese-session-card">

            <div className="section-header">

              <div>

                <p className="section-label">
                  DAILY LEARNING
                </p>

                <h3>
                  Add Study Session
                </h3>

              </div>

              <span className="task-count">
                {progress.sessions} Sessions
              </span>

            </div>

            <form
              onSubmit={handleSubmit}
              className="japanese-form"
            >

              <div className="form-group">

                <label>
                  Kanji Learned
                </label>

                <input
                  type="number"
                  min="0"
                  name="kanji"
                  placeholder="e.g. 5"
                  value={form.kanji}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Vocabulary Learned
                </label>

                <input
                  type="number"
                  min="0"
                  name="vocabulary"
                  placeholder="e.g. 10"
                  value={form.vocabulary}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Grammar Lessons
                </label>

                <input
                  type="number"
                  min="0"
                  name="grammar"
                  placeholder="e.g. 1"
                  value={form.grammar}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Listening (minutes)
                </label>

                <input
                  type="number"
                  min="0"
                  name="listening"
                  placeholder="e.g. 15"
                  value={form.listening}
                  onChange={handleChange}
                />

              </div>

              <button
                type="submit"
                className="save-task-btn"
              >
                Save Study Session
              </button>

            </form>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Japanese;