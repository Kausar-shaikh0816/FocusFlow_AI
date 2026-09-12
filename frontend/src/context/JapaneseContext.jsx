import { createContext, useContext, useEffect, useState } from "react";

const JapaneseContext = createContext(null);

export function JapaneseProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const savedProgress =
        localStorage.getItem("focusflow_japanese");

      if (savedProgress) {
        return JSON.parse(savedProgress);
      }

      return {
        kanji: 0,
        vocabulary: 0,
        grammar: 0,
        listening: 0,
        sessions: 0,
      };
    } catch (error) {
      console.error(
        "Error loading Japanese progress:",
        error
      );

      return {
        kanji: 0,
        vocabulary: 0,
        grammar: 0,
        listening: 0,
        sessions: 0,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "focusflow_japanese",
      JSON.stringify(progress)
    );
  }, [progress]);

  const addStudySession = (session) => {
    setProgress((current) => ({
      kanji:
        current.kanji +
        Number(session.kanji || 0),

      vocabulary:
        current.vocabulary +
        Number(session.vocabulary || 0),

      grammar:
        current.grammar +
        Number(session.grammar || 0),

      listening:
        current.listening +
        Number(session.listening || 0),

      sessions: current.sessions + 1,
    }));
  };

  return (
    <JapaneseContext.Provider
      value={{
        progress,
        addStudySession,
      }}
    >
      {children}
    </JapaneseContext.Provider>
  );
}

export function useJapanese() {
  const context = useContext(JapaneseContext);

  if (!context) {
    throw new Error(
      "useJapanese must be used inside JapaneseProvider"
    );
  }

  return context;
}