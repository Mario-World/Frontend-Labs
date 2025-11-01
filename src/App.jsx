import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./components/Chat";
import History from "./pages/History";

const App = () => {
  return (
    <Router>
      <header className="app-header">
        <h1>Bot AI</h1>
        <nav>
          <Link to="/">New Chat</Link>
          <Link to="/history">Past Conversations</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
