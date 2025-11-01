import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "../index.css";

const Message = ({ msg }) => {
  const [liked, setLiked] = useState(null);

  return (
    <div
      className={`message ${msg.sender === "You" ? "user-msg" : "bot-msg"}`}
    >
      <p className="sender">{msg.sender === "Soul AI" ? <span>Soul AI</span> : msg.sender}</p>
      <p className="text">{msg.text}</p>

      {msg.sender === "Soul AI" && (
        <div className="feedback-buttons">
          <button
            className={`thumb-btn ${liked === "up" ? "active" : ""}`}
            onClick={() => setLiked("up")}
          >
            <FaThumbsUp />
          </button>
          <button
            className={`thumb-btn ${liked === "down" ? "active" : ""}`}
            onClick={() => setLiked("down")}
          >
            <FaThumbsDown />
          </button>
        </div>
      )}
    </div>
  );
};

export default Message;
