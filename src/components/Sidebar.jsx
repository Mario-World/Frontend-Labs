import React from "react";

export default function Sidebar({ conversations = [], onNewChat, onSelectChat }) {
  return (
    <div className="sidebar">
      <button className="new-chat-btn" onClick={onNewChat}>
        ➕ New Chat
      </button>

      <h3 className="sidebar-title">Past Conversations</h3>
      <div className="chat-list">
        {conversations.length === 0 ? (
          <p className="empty">No saved conversations yet</p>
        ) : (
          conversations.map((conv) => (
            <div
              key={conv.id}
              className="chat-item"
              onClick={() => onSelectChat(conv.id)}
            >
              <p className="chat-title">{conv.title}</p>
              <span className="chat-time">{conv.timestamp}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
