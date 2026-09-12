import "./App.css";
import Kanban from "./pages/Kanban";
import Japanese from "./pages/Japanese";
import { JapaneseProvider } from "./context/JapaneseContext";

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
     <JapaneseProvider>

      <BrowserRouter>

        <Routes>
  <Route path="/" element={<Dashboard />} />

  <Route
    path="/schedule"
    element={<Schedule />}
  />

  <Route
    path="/tasks"
    element={<Tasks />}
  />

  <Route
    path="/kanban"
    element={<Kanban />}
  />

  <Route
    path="/japanese"
    element={<Japanese />}
   />
</Routes>

      </BrowserRouter>
    </JapaneseProvider>
    </TaskProvider>
  );
}

export default App;