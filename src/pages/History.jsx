import React, { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setHistory(saved);
  }, []);

  return (
    <div className="history-container">
      <h2>Past Conversations</h2>
      {history.length === 0 ? (
        <p>No saved messages yet.</p>
      ) : (
        <ul>
          {history.map((msg, index) => (
            <li key={index}>
              <strong>{msg.sender === "user" ? "You: " : "AI: "}</strong>
              {msg.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
