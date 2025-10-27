import React from "react";

export default function WalletBalance({ walletBalance, onAddIncome, onAddExpense }) {
  return (
    <div className="wallet-panel">
      <div className="wallet-card">
        <div className="wallet-title">Wallet Balance:</div>
        <div className="wallet-amount">₹{Number(walletBalance).toFixed(0)}</div>
        <button type="button" className="btn-add-income" onClick={onAddIncome}>
          + Add Income
        </button>
      </div>

      <div className="expense-card">
        <div className="wallet-title">Expenses:</div>
        <div className="wallet-amount">₹{(/* total */ 0).toFixed ? (0).toFixed(0) : 0}</div>
        <button type="button" className="btn-add-expense" onClick={onAddExpense}>
          + Add Expense
        </button>
      </div>
    </div>
  );
}
