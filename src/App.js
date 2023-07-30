import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { createContext, useState } from "react";

const CredentialContext = createContext(null);

function App() {
  const credentials = useState(null);
  return (
    <div className="App">
      <CredentialContext.Provider value={credentials}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </CredentialContext.Provider>
    </div>
  );
}

export default App;
