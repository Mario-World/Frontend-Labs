import React, { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaUtensils,
  FaGift,
  FaTaxi,
  FaFilm,
} from "react-icons/fa";
import Pagination from "./Pagination";

export default function ExpenseList({ expenses, onDelete, onEdit }) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(expenses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentExpenses = expenses.slice(startIndex, startIndex + itemsPerPage);

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "food":
        return <FaUtensils />;
      case "movie":
        return <FaFilm />;
      case "auto":
        return <FaTaxi />;
      case "gift":
        return <FaGift />;
      default:
        return <FaGift />;
    }
  };

  return (
    <div className="expense-list-card">
      {expenses.length === 0 ? (
        <div className="empty">No transactions yet</div>
      ) : (
        <>
          {currentExpenses.map((exp) => (
            <div key={exp.id} className="expense-row">
              <div className="expense-left">
                <div className="expense-icon">{getCategoryIcon(exp.category)}</div>
                <div className="expense-info">
                  <div className="expense-title">{exp.title}</div>
                  <div className="expense-date">{formatDate(exp.date)}</div>
                </div>
              </div>

              <div className="expense-right">
                <div className="expense-price">₹{exp.price}</div>
                <button
                  className="icon-btn delete"
                  aria-label={`delete-${exp.id}`}
                  onClick={() => onDelete(exp.id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="icon-btn edit"
                  aria-label={`edit-${exp.id}`}
                  onClick={() => onEdit(exp)}
                >
                  <FaEdit />
                </button>
              </div>
            </div>
          ))}

          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </>
      )}
    </div>
  );
}

function formatDate(d) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return d;
  }
}
