import React from "react";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        ←
      </button>

      <span className="page-number">{currentPage}</span>

      <button
        className="pagination-btn"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
