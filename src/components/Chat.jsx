import React, { useState, useEffect } from "react";
import sampleData from "../data/sampleData.json";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Load saved chat from localStorage (if any)
  useEffect(() => {
    const savedChat = localStorage.getItem("soulAI_chat");
    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    }
  }, []);

  // Save chat messages manually when user clicks Save
  const handleSaveChat = () => {
    if (messages.length === 0) return alert("No messages to save!");
    localStorage.setItem("soulAI_chat", JSON.stringify(messages));
    alert("Chat saved successfully ✅");
  };

  // Send message function
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const aiResponse =
      sampleData[userMessage.toLowerCase()] ||
      "I'm not sure how to answer that yet. Try asking something else!";

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "ai", text: aiResponse },
    ]);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">💬 Soul AI</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`chat-message ${
              msg.sender === "user" ? "user-msg" : "bot-msg"
            }`}
          >
            <strong>{msg.sender === "user" ? "You: " : "Soul AI: "}</strong>
            {msg.text}
          </p>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
        <button className="save-btn" onClick={handleSaveChat}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Chat;
