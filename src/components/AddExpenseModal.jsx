import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

export default function AddExpenseModal({
  isOpen,
  onRequestClose,
  onAddExpense,
  editingExpense,
  onSaveEditedExpense,
}) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
    id: null,
  });

  // When editingExpense provided, prefill
  useEffect(() => {
    if (editingExpense) {
      setForm({
        title: editingExpense.title || "",
        price: editingExpense.price || "",
        category: editingExpense.category || "",
        date: editingExpense.date || "",
        id: editingExpense.id || null,
      });
    } else if (!isOpen) {
      setForm({ title: "", price: "", category: "", date: "", id: null });
    } else {
      setForm({ title: "", price: "", category: "", date: "", id: null });
    }
  }, [editingExpense, isOpen]);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, category, date, id } = form;
    if (!title || !price || !category || !date) {
      alert("Please fill all fields");
      return;
    }
    const expenseObj = {
      id: id || uuidv4(),
      title: title.trim(),
      price: Number(price),
      category,
      date,
    };

    if (editingExpense) {
      onSaveEditedExpense(expenseObj);
    } else {
      onAddExpense(expenseObj);
    }

    setForm({ title: "", price: "", category: "", date: "", id: null });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal modal-large"
      overlayClassName="modal-overlay"
    >
      <h3 className="modal-title">{editingExpense ? "Edit Expenses" : "Add Expenses"}</h3>
      <form className="modal-form grid-2" onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="price" placeholder="Price" type="number" value={form.price} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} />

        <div className="modal-actions full-width">
          <button type="submit" className="btn-yellow">
            {editingExpense ? "Add Expense" : "Add Expense"}
          </button>
          <button type="button" className="btn-secondary" onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
