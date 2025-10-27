# React Expense Tracker (Vite)

A small React + Vite expense tracker demo with local persistence, charts and pagination.  
Built with React 19, Vite and Recharts. The app persists state to localStorage using helpers in `src/utils/localStorageUtils.js`.

## Quick start

1. Install
```sh
npm install
```

2. Run dev server
```sh
npm run dev
```

3. Build
```sh
npm run build
```

4. Lint
```sh
npm run lint
```

## What’s included

- Simple wallet balance management and add income flow.
- Add / edit / delete expenses with basic validation and wallet adjustments.
- Expense summary (pie) and trends (bar) charts via Recharts.
- Pagination for recent transactions.
- Local persistence with JSON in localStorage.

## Important files

- App root: [`src/App.jsx`](src/App.jsx) — main application and state logic.
- Entry: [`src/main.jsx`](src/main.jsx)
- Global styles: [`src/index.css`](src/index.css)
- Local storage utilities: [`saveToLocal`](src/utils/localStorageUtils.js) and [`loadFromLocal`](src/utils/localStorageUtils.js) — [`src/utils/localStorageUtils.js`](src/utils/localStorageUtils.js)

UI components:
- [`WalletBalance`](src/components/WalletBalance.jsx) — top wallet / expense cards
- [`AddIncomeModal`](src/components/AddIncomeModal.jsx) — add balance
- [`AddExpenseModal`](src/components/AddExpenseModal.jsx) — add / edit expense modal
- [`ExpenseList`](src/components/ExpenseList.jsx) — paginated list of transactions
- [`ExpenseItem`](src/components/ExpenseItem.jsx) — single transaction item
- [`Pagination`](src/components/Pagination.jsx) — simple pager
- [`ExpenseSummary`](src/components/ExpenseSummary.jsx) — pie summary chart
- [`ExpenseTrends`](src/components/ExpenseTrends.jsx) — bar chart of categories

Other config:
- Vite config: [`vite.config.js`](vite.config.js)
- ESLint config: [`eslint.config.js`](eslint.config.js)
- Package: [`package.json`](package.json)
- App shell: [`index.html`](index.html)
- Git ignores: [`.gitignore`](.gitignore)

## Notes

- Modal accessibility: `Modal.setAppElement('#root')` is set in [`src/App.jsx`](src/App.jsx).
- Default wallet balance is persisted; initial value is 5000 unless `walletBalance` exists in localStorage (see [`loadFromLocal`](src/utils/localStorageUtils.js)).
- Editing an expense refunds the original amount before applying the updated one to prevent incorrect wallet deductions.

## Files in this repository

[.gitignore](.gitignore)  
[eslint.config.js](eslint.config.js)  
[index.html](index.html)  
[package.json](package.json)  
[README.md](README.md)  
[vite.config.js](vite.config.js)  
[public/](public/)  

src/:
- [src/App.jsx](src/App.jsx)  
- [src/main.jsx](src/main.jsx)  
- [src/index.css](src/index.css)  
- [src/utils/localStorageUtils.js](src/utils/localStorageUtils.js)  

src/components/:
- [src/components/WalletBalance.jsx](src/components/WalletBalance.jsx)  
- [src/components/AddIncomeModal.jsx](src/components/AddIncomeModal.jsx)  
- [src/components/AddExpenseModal.jsx](src/components/AddExpenseModal.jsx)  
- [src/components/ExpenseList.jsx](src/components/ExpenseList.jsx)  
- [src/components/ExpenseItem.jsx](src/components/ExpenseItem.jsx)  
- [src/components/ExpenseSummary.jsx](src/components/ExpenseSummary.jsx)  
- [src/components/ExpenseTrends.jsx](src/components/ExpenseTrends.jsx)  
- [src/components/Pagination.jsx](src/components/Pagination.jsx)

---
Feel free to ask for a shorter README, a README focused on contribution guidelines, or a version that documents specific components in more detail.