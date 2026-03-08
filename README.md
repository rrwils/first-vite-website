# Pokémon Card Explorer (React + Vite)

A simple React + Vite demo that renders a set of Pokémon cards, supports filtering by Pokémon type, searching by name, and includes interactive UI touches like hover highlights and a favorites toggle.

## 🚀 Features

- **Card grid** with Pokémon data (name, type, HP, attack)
- **Type filters** (buttons styled by type, powered by a shared palette)
- **Search bar** (live name filtering, case-insensitive)
- **Hover effects** (highlight only the card under the cursor)
- **Favorites toggle** (click to toggle favorite state)
- **Bar charts** for HP/Attack values (simple inline bar visualization)

## 📦 Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## 🗂️ Key files

- `src/App.jsx` – app layout, search + type filtering, and data flow
- `src/Card.jsx` – renders the card grid and hover behavior
- `src/Highlight.jsx` – type-based color palette + highlight styling
- `src/Button.jsx` – type filter buttons
- `src/hpRectangle.jsx` – simple HP/attack bar view
- `src/FavoritesToggle.jsx` – click-to-favorite toggle component

---

Built as a learning playground for React + Vite.
