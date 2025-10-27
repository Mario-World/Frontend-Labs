import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export default function AddIncomeModal({ isOpen, onRequestClose, onAdd }) {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!isOpen) setAmount("");
  }, [isOpen]);

  const submit = (e) => {
    e.preventDefault();
    const num = Number(amount);
    if (!amount || num <= 0) {
      alert("Enter a valid amount");
      return;
    }
    onAdd(num);
    setAmount("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h3 className="modal-title">Add Balance</h3>
      <form className="modal-form" onSubmit={submit}>
        <input
          type="number"
          placeholder="Income Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="modal-actions">
          <button type="submit" className="btn-primary">
            Add Balance
          </button>
          <button type="button" className="btn-secondary" onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
