import React, { useState } from "react";

const FeedbackModal = ({ message, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmit(rating, comment);
  };

  return (
    <div className="feedback-modal">
      <div className="feedback-content">
        <h3>Rate Soul AI’s Response</h3>
        <p className="feedback-message">"{message.text}"</p>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "filled" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          className="feedback-textarea"
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className="feedback-actions">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
