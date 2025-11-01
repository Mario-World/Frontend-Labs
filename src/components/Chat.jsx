import React, { useState, useEffect } from "react";
import sampleData from "../data/sampleData.json";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setMessages(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const aiResponse =
      sampleData[input.toLowerCase()] ||
      "Sorry, Did not understand your query!";

    const botMessage = { sender: "bot", text: aiResponse };

    const newMessages = [...messages, userMessage, botMessage];
    setMessages(newMessages);
    setInput("");
  };

  const handleSave = () => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
    alert("Chat saved successfully!");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={msg.sender === "user" ? "user-msg" : "bot-msg"}
          >
            <strong>{msg.sender === "user" ? "You: " : "AI’s Response: "}</strong>
            <span>{msg.text}</span>
          </p>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Message Bot AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Chat;
