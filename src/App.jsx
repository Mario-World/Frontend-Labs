import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import WalletBalance from "./components/walletBalance";
import AddIncomeModal from "./components/AddIncomeModal";
import AddExpenseModal from "./components/AddExpenseModal";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTrends from "./components/ExpenseTrends";
import { loadFromLocal, saveToLocal } from "./utils/localStorageUtils";

Modal.setAppElement("#root");

export default function App() {
  // default wallet balance 5000
  const [walletBalance, setWalletBalance] = useState(() => {
    const saved = loadFromLocal("walletBalance");
    return typeof saved === "number" ? saved : 5000;
  });

  // expenses persisted under key 'expenses'
  const [expenses, setExpenses] = useState(() => loadFromLocal("expenses") || []);

  const [showAddIncome, setShowAddIncome] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  // Persist walletBalance and expenses
  useEffect(() => saveToLocal("walletBalance", walletBalance), [walletBalance]);
  useEffect(() => saveToLocal("expenses", expenses), [expenses]);

  // Add income
  function handleAddIncome(amount) {
    setWalletBalance((b) => Number(b) + Number(amount));
  }

  // Add expense (from form)
  function handleAddExpense(exp) {
    // exp has { title, price, category, date, id }
    if (exp.price > walletBalance) {
      alert("Insufficient balance");
      return;
    }
    setExpenses((list) => [exp, ...list]);
    setWalletBalance((b) => Number(b) - Number(exp.price));
  }

  // Start editing: populate modal with expense
  function startEditExpense(exp) {
    setEditingExpense(exp);
    setShowAddExpense(true);
  }

  // Save edited expense: must update wallet correctly and prevent overspend
  function handleSaveEditedExpense(updated) {
    const orig = expenses.find((e) => e.id === updated.id);
    if (!orig) return;

    // available funds = current wallet + orig.price (we refund original then subtract new)
    const available = Number(walletBalance) + Number(orig.price);
    if (updated.price > available) {
      alert("Insufficient balance to increase this expense");
      return;
    }

    const updatedList = expenses.map((e) => (e.id === updated.id ? updated : e));
    setExpenses(updatedList);

    // Adjust wallet: refund orig.price then subtract updated.price => net change = orig - updated
    setWalletBalance((b) => Number(b) + Number(orig.price) - Number(updated.price));
    setEditingExpense(null);
    setShowAddExpense(false);
  }

  // Delete expense: refund amount to wallet
  function handleDeleteExpense(id) {
    const found = expenses.find((e) => e.id === id);
    if (!found) return;
    if (!window.confirm("Delete this expense?")) return;
    setExpenses((list) => list.filter((e) => e.id !== id));
    setWalletBalance((b) => Number(b) + Number(found.price));
  }

  return (
    <div className="app-wrapper">
      {/* Only one h1 in entire app */}
      <h1>Expense Tracker</h1>

      <section className="top-panel">
        <WalletBalance
          walletBalance={walletBalance}
          onAddIncome={() => setShowAddIncome(true)}
          onAddExpense={() => {
            setEditingExpense(null);
            setShowAddExpense(true);
          }}
        />

        <div className="charts-right">
          <ExpenseSummary expenses={expenses} />
        </div>
      </section>

      <section className="content-row">
        <div className="left-column">
          <h2 className="section-title">Recent Transactions</h2>
          <ExpenseList
            expenses={expenses}
            onDelete={handleDeleteExpense}
            onEdit={startEditExpense}
          />
        </div>

        <div className="right-column">
          <h2 className="section-title">Top Expenses</h2>
          <ExpenseTrends expenses={expenses} />
        </div>
      </section>

      {/* Add Income Modal */}
      <AddIncomeModal
        isOpen={showAddIncome}
        onRequestClose={() => setShowAddIncome(false)}
        onAdd={(amount) => {
          handleAddIncome(amount);
          setShowAddIncome(false);
        }}
      />

      {/* Add / Edit Expense Modal - same modal component used for add & edit */}
      <AddExpenseModal
        isOpen={showAddExpense}
        onRequestClose={() => {
          setShowAddExpense(false);
          setEditingExpense(null);
        }}
        onAddExpense={(exp) => {
          // new add
          handleAddExpense(exp);
          setShowAddExpense(false);
        }}
        editingExpense={editingExpense}
        onSaveEditedExpense={(updated) => handleSaveEditedExpense(updated)}
      />
    </div>
  );
}
