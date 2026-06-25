# Recipes App 🍽️

A modern recipe discovery application built with **React**, **Vite**, and **TheMealDB API**.

The application allows users to browse recipes, search by name, filter by category, view detailed recipe information, and save favorite recipes with persistent storage.

---

## 🚀 Live Demo

> Add your Vercel URL here after deployment

```text
https://your-recipes-app.vercel.app
```

---

## ✨ Features

### Recipe Discovery

- Browse recipes by category
- Search recipes by name
- View complete recipe details
- Watch recipe videos from YouTube
- Display ingredients and measurements

### Favorites System

- Add recipes to favorites
- Remove recipes from favorites
- Persistent storage using LocalStorage
- Favorites page with dedicated route

### User Experience

- Responsive design for mobile, tablet, and desktop
- Skeleton loading states
- Empty states for searches and favorites
- Smooth scrolling between pages
- Debounced search input
- Client-side pagination
- Error handling and user feedback

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React 18 | UI Development |
| Vite | Build Tool |
| React Router DOM | Routing |
| Axios | API Requests |
| Context API | Global State Management |
| LocalStorage | Favorites Persistence |
| CSS3 | Styling & Responsive Design |

---

## 🏗 Architecture

The project follows a modular and scalable architecture.

```text
src/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
└── styles/
```

### Components

Reusable UI components:

- Navbar
- RecipeCard
- SearchBar
- SkeletonCard
- EmptyState
- Loader
- ScrollToTop

### Pages

Route-based pages:

- Home
- Favorites
- RecipeDetail

### Services

API communication layer:

- mealApi.js

### Context

Global application state:

- FavoritesContext

### Hooks

Reusable business logic:

- useDebounce

---

## 📂 Project Structure

```text
recipes-app/
├── public/
├── src/
│
├── components/
│   ├── Navbar.jsx
│   ├── RecipeCard.jsx
│   ├── SearchBar.jsx
│   ├── SkeletonCard.jsx
│   ├── EmptyState.jsx
│   ├── Loader.jsx
│   └── ScrollToTop.jsx
│
├── context/
│   └── FavoritesContext.jsx
│
├── hooks/
│   └── useDebounce.js
│
├── pages/
│   ├── Home.jsx
│   ├── Favorites.jsx
│   └── RecipeDetail.jsx
│
├── services/
│   └── mealApi.js
│
├── styles/
│   ├── home.css
│   └── details.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/recipes-app.git
```

### Navigate to the project

```bash
cd recipes-app
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

---

## 💻 Available Commands

| Command | Description |
|----------|------------|
| npm run dev | Start development server |
| npm run build | Generate production build |
| npm run preview | Preview production build |

---

## 🌐 API

This project uses **TheMealDB API**:

https://www.themealdb.com/api.php

Main endpoints:

- Search recipes by name
- Lookup recipe by ID
- List categories
- Filter recipes by category

---

## ⚡ Performance Optimizations

The application includes several optimizations:

- Debounced search requests
- Client-side pagination
- Skeleton loading placeholders
- LocalStorage persistence
- Conditional rendering
- Optimized API requests
- Reusable custom hooks

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## 🔒 Error Handling

The application gracefully handles:

- API request failures
- Empty search results
- Invalid recipe IDs
- Missing recipe data

---

## 🚀 Deployment

This project can be deployed on:

- Vercel
- Netlify
- GitHub Pages

**Recommended platform:** Vercel

---

## 🔮 Future Improvements

- TypeScript migration
- Unit testing with Vitest
- Integration testing
- CSS Modules
- Recipe recommendations
- Dark mode support

---

## 👨‍💻 Author

Developer Dylan Marin 