import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("focusflow_tasks");

      if (savedTasks) {
        return JSON.parse(savedTasks);
      }

      return [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("focusflow_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      title: task.title,
      date: task.date,
      time: task.time,
      category: task.category,
      priority: task.priority,
      completed: false,
    };
    const updateTaskStatus = (id, status) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: status,
            completed: status === "COMPLETED",
          }
        : task
    )
  );
};

    setTasks((currentTasks) => {
      return [...currentTasks, newTask];
    });
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };
  const updateTaskStatus = (id, status) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: status,
            completed: status === "COMPLETED",
          }
        : task
    )
  );
};

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <TaskContext.Provider
      value={{
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    updateTaskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used inside TaskProvider"
    );
  }

  return context;
}