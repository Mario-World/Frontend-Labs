import React from "react";

function HistoryPage() {
  const savedChats = [
    {
      date: "Today",
      messages: [
        { from: "user", text: "Hi bot, what is the weather?" },
        { from: "bot", text: "It's sunny and 25°C today!" },
      ],
      feedback: { rating: 5, comment: "Very helpful response!" },
    },
    {
      date: "Yesterday",
      messages: [
        { from: "user", text: "Hi bot, what’s the time?" },
        { from: "bot", text: "It’s 2:30 PM." },
      ],
      feedback: { rating: 4, comment: "Quick and accurate." },
    },
  ];

  return (
    <div className="history-page">
      <h2>Past Conversations</h2>
      {savedChats.map((chatGroup, i) => (
        <div key={i} className="chat-group">
          <h3>{chatGroup.date} Chats</h3>
          <div className="chat-box">
            {chatGroup.messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="feedback-section">
            <p><strong>Rating:</strong> {"⭐".repeat(chatGroup.feedback.rating)}</p>
            <p><strong>Feedback:</strong> {chatGroup.feedback.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryPage;
