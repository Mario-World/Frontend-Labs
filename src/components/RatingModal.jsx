import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../index.css";

const RatingModal = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="rating-overlay">
      <div className="rating-box">
        <h2>Rate Your Chat Experience</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <FaStar
              key={i}
              onClick={() => setRating(i)}
              className={i <= rating ? "active" : ""}
            />
          ))}
        </div>
        <textarea
          placeholder="Leave your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <div className="rating-actions">
          <button onClick={onClose}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
