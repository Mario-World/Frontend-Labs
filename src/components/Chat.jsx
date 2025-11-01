import React, { useState, useEffect } from "react";
import Message from "./Message";
import FeedbackModal from "./FeedbackModal";
import "../index.css";
import sampleData from "../data/sampleData.json";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    setMessages([
      { sender: "Soul AI", text: "Hi, I'm Soul AI! How can I assist you today?" },
    ]);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "You", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);

    const userQuery = input.trim().toLowerCase();
    const botResponse =
      sampleData[userQuery] || "Sorry, Did not understand your query!";

    const botMsg = { sender: "Soul AI", text: botResponse };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 600);

    setInput("");
  };

  const handleFeedback = (msg) => {
    setSelectedMsg(msg);
    setIsFeedbackOpen(true);
  };

  const handleSaveChat = () => {
    if (messages.length > 1) {
      const chatTitle = `Chat ${savedChats.length + 1}`;
      setSavedChats((prev) => [...prev, { title: chatTitle, messages }]);
      alert("Chat saved successfully!");
    }
  };

  return (
    <div className="chat-app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <button className="new-chat-btn" onClick={() => setMessages([])}>
            + New Chat
          </button>
          <button
            className="history-btn"
            onClick={() => setShowHistory((prev) => !prev)}
          >
            Past Conversations
          </button>
        </div>

        {showHistory && (
          <div className="history-container">
            <h4>Previous Chats</h4>
            {savedChats.length === 0 ? (
              <p className="no-history">No saved chats yet.</p>
            ) : (
              <ul className="history-list">
                {savedChats.map((chat, idx) => (
                  <li
                    key={idx}
                    className="history-item"
                    onClick={() => setMessages(chat.messages)}
                  >
                    {chat.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <h2 className="chat-title">Conversation History</h2>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className="message-container">
              <Message msg={msg} />
              {msg.sender === "Soul AI" && (
                <div className="feedback-hover">
                  <button
                    className="like-btn"
                    title="Like this response"
                  >
                    👍
                  </button>
                  <button
                    className="dislike-btn"
                    title="Dislike this response"
                  >
                    👎
                  </button>
                  <button
                    className="feedback-btn"
                    onClick={() => handleFeedback(msg)}
                  >
                    ⭐ Rate & Feedback
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="suggestion-grid">
          {["What is AI?", "Who are you?", "Hi", "Hello"].map((q, i) => (
            <div key={i} className="suggestion-card" onClick={() => setInput(q)}>
              {q}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask Soul AI anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Ask</button>
          <button type="button" onClick={handleSaveChat}>
            Save
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <FeedbackModal
          message={selectedMsg}
          onClose={() => setIsFeedbackOpen(false)}
        />
      )}
    </div>
  );
};

export default Chat;
