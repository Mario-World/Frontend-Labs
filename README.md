# Bot AI — Frontend Labs

Small React chat demo built with Vite that uses localStorage for persistence and a bundled sample QA dataset. The app provides a simple bot ("Soul AI") which answers questions from [`src/data/sampleData.json`](src/data/sampleData.json) and lets you save/view past conversations.

## Quick start

```sh
npm install
npm run dev    # start dev server
npm run build  # production build
npm run lint   # run ESLint
```

## Features

- Chat UI with user and bot messages
- Local persistence of conversation history (localStorage)
- Save / view past conversations
- Built-in sample Q&A dataset for offline responses

## Important files & symbols

- App entry and routing: [`src/App.jsx`](src/App.jsx) — contains routes and links to pages (uses [`History`](src/pages/History.jsx) and [`Chat`](src/components/Chat.jsx))
- Root render: [`src/main.jsx`](src/main.jsx)
- Global styles: [`src/index.css`](src/index.css)
- Sample data: [`src/data/sampleData.json`](src/data/sampleData.json)

Components:
- [`Chat`](src/components/Chat.jsx) — main chat UI and localStorage handling
- [`Message`](src/components/Message.jsx) — individual message UI and feedback buttons
- [`Sidebar`](src/components/Sidebar.jsx) — conversation list and new chat action
- [`FeedbackModal`](src/components/FeedbackModal.jsx) — modal to rate responses
- [`RatingModal`](src/components/RatingModal.jsx) — alternate rating modal

Pages:
- [`History`](src/pages/History.jsx) — view saved conversation history



## Notes for developers

- Conversation history is stored at the `chatHistory` localStorage key.
- Matching logic for bot replies uses exact case-insensitive question matching against [`src/data/sampleData.json`].