# 🚀 Responsive User Search Cards

A modern, responsive user card grid built using **HTML, CSS, and
JavaScript**.

This project demonstrates:

-   Dynamic DOM rendering\
-   Real time search filtering\
-   Responsive CSS Grid layout\
-   Modern blur overlay effect\
-   Clean UI architecture\
-   State → Filter → Render pattern

------------------------------------------------------------------------

## 📸 Preview

A responsive grid of user cards with:

-   Live search functionality\
-   Smooth hover animation\
-   Bottom blur glass effect\
-   Fully responsive layout

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   HTML5\
-   CSS3 (Grid, clamp, backdrop-filter)\
-   Vanilla JavaScript\
-   No frameworks used

------------------------------------------------------------------------

## ⚙️ Features

### 🔎 Live Search

Filters users in real time using JavaScript `filter()` and `includes()`.

### 📱 Fully Responsive

Uses CSS Grid:

``` css
grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
```

Cards automatically adjust across:

-   Mobile\
-   Tablet\
-   Desktop

### 🎨 Modern UI

-   Soft bottom blur using `backdrop-filter`\
-   Responsive typography using `clamp()`\
-   Smooth hover animations\
-   Clean dark theme

------------------------------------------------------------------------

## 🧠 Architecture Pattern

This project follows a clean UI data flow:

**State → Filter → Render**

-   State holds user data\
-   Filter derives new data based on search input\
-   Render updates the UI

This separation keeps logic scalable and maintainable.

------------------------------------------------------------------------

## 📂 Project Structure

    📦 project-folder
     ┣ 📜 index.html
     ┣ 📜 style.css
     ┗ 📜 script.js

------------------------------------------------------------------------

## 🧩 How It Works

### 1️⃣ Data Source

Users are generated dynamically using JavaScript.

### 2️⃣ Rendering

Cards are created using `createElement()` and appended using
`DocumentFragment` for better performance.

### 3️⃣ Filtering

On input event:

``` javascript
users.filter(user =>
  user.username.toLowerCase().includes(searchValue)
);
```

The UI re-renders with filtered data.

------------------------------------------------------------------------

## 🚀 How To Run

1.  Clone the repository\
2.  Open `index.html` in your browser

No build tools required.

------------------------------------------------------------------------

## 💡 Concepts Demonstrated

-   DOM manipulation\
-   Array methods\
-   Responsive design\
-   CSS Grid\
-   Modern CSS functions\
-   Performance optimization with fragments\
-   Separation of concerns

------------------------------------------------------------------------

## 📈 Future Improvements

-   Debounced search\
-   Highlight matched text\
-   Skeleton loading animation\
-   Pagination\
-   Fetch users from API

------------------------------------------------------------------------

## 👨‍💻 Author

**Adnan Ashraf**

Frontend Developer in progress 🚀
