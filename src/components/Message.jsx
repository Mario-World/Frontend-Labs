import React from "react";


const Message = ({ sender, text, onLike, onDislike }) => {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
      {sender === "ai" && (
        <div className="feedback-icons">
          <button onClick={onLike}>👍</button>
          <button onClick={onDislike}>👎</button>
        </div>
      )}
    </div>
  );
};

export default Message;
