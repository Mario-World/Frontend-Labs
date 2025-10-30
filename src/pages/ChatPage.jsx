import React, { useState } from "react";

function ChatPage() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    { from: "user", text: "Hi Bot!" },
    { from: "bot", text: "Hello! How can I help you today?" },
  ]);

  const handleAsk = () => {
    if (!message.trim()) return;
    setChats([...chats, { from: "user", text: message }, { from: "bot", text: "This is a sample bot response." }]);
    setMessage("");
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h2>Bot AI</h2>
        <p>How Can I Help You Today?</p>
      </div>

      <div className="chat-box">
        {chats.map((chat, index) => (
          <div key={index} className={`chat-bubble ${chat.from}`}>
            {chat.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleAsk}>Ask</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
}

export default ChatPage;
