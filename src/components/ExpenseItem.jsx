import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div className="expense-item">
      <div>
        <strong>{expense.title}</strong> - ${expense.price} ({expense.category})
      </div>
      <div className="expense-actions">
        <span>{expense.date}</span>
        <FaEdit className="edit-icon" />
        <FaTrash
          className="delete-icon"
          onClick={() => onDelete(expense.id, expense.price)}
        />
      </div>
    </div>
  );
};

export default ExpenseItem;
