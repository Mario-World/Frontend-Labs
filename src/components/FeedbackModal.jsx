import React, { useState } from "react";
import Rating from "./Rating";


const FeedbackModal = ({ onClose, onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (rating === 0 && feedback.trim() === "") {
      alert("Please provide a rating or feedback before submitting.");
      return;
    }

    const feedbackData = {
      rating,
      feedback,
      timestamp: new Date().toLocaleString(),
    };

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];
    saved.push(feedbackData);
    localStorage.setItem("chatHistory", JSON.stringify(saved));

    // Pass back to parent if needed
    if (onSubmit) onSubmit(feedbackData);

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="feedback-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Provide Additional Feedback</h2>

        <textarea
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <div className="rating-section">
          <p>Rate your experience:</p>
          <Rating rating={rating} setRating={setRating} />
        </div>

        <button className="submit-btn" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
