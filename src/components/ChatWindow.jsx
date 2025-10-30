import React, { useState } from "react";
import Message from "./Message";
import FeedbackModal from "./FeedbackModal";
import { sampleData } from "../data/sampleData";


const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const aiText = sampleData[input] || "Sorry, Did not understand your query!";
    const aiMsg = { sender: "ai", text: aiText };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>Bot AI</h2>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <Message
            key={idx}
            sender={msg.sender}
            text={msg.text}
            onLike={() => console.log("Liked")}
            onDislike={() => console.log("Disliked")}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          placeholder="Message Bot AI…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
        <button type="button" onClick={() => setShowModal(true)}>Save</button>
      </form>

      {showModal && (
        <FeedbackModal
          rating={rating}
          setRating={setRating}
          feedback={feedback}
          setFeedback={setFeedback}
          onClose={() => setShowModal(false)}
          onSubmit={() => {
            console.log({ rating, feedback });
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ChatWindow;
