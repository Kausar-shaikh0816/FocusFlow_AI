// import "./App.css";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return <Dashboard />;
// }

// export default App;


// import "./App.css";
// import Schedule from "./pages/Schedule";

// function App() {
//   return <Schedule />;
// }

// export default App;


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;