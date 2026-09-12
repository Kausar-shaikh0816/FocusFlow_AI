import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { TaskProvider } from "./context/TaskContext";

import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <TaskProvider>

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/schedule"
            element={<Schedule />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

        </Routes>

      </BrowserRouter>

    </TaskProvider>
  );
}

export default App;