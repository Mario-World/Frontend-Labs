import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HistoryPage from "./pages/HistoryPage";
import { FaPlus, FaHistory } from "react-icons/fa";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <FaPlus className="icon" />
            <Link to="/" className="sidebar-link">New Chat</Link>
          </div>
          <div className="sidebar-section">
            <FaHistory className="icon" />
            <Link to="/history" className="sidebar-link">Past Conversations</Link>
          </div>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ChatPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
