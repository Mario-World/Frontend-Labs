import React from "react";


const Rating = ({ rating, setRating }) => {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          className={rating >= num ? "active" : ""}
          onClick={() => setRating(num)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
