import React, { useEffect, useState } from "react";

const History = () => {
  const [savedMessages, setSavedMessages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) {
      setSavedMessages(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="history-container">
      <h2>Saved Conversations</h2>
      {savedMessages.length === 0 ? (
        <p>No saved messages found.</p>
      ) : (
        savedMessages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            <p>
              {msg.sender === "ai" ? (
                <span>
                  <strong>AI’s Response:</strong> {msg.text}
                </span>
              ) : (
                msg.text
              )}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
