# 📖 React Blog Project

A simple **React + TailwindCSS** blog application that displays blog posts in a responsive grid layout.  
It includes **search functionality**, **pagination**, and is configured to be deployed on **GitHub Pages**.  
Visit the project on this link [here](https://nmekks.github.io/elevvo-internship-task4-blog-homapage/)

---

## 🚀 Features

- 🔍 Search through blog posts (across all pages)  
- 📑 Pagination for easy navigation between posts  
- 🖼️ Responsive grid layout for displaying blog post previews  
- 🎨 Styled with TailwindCSS for mobile-first design  
- 🌐 Deployable on GitHub Pages with proper public asset handling  

---

## 🛠️ Tech Stack

- [React](https://react.dev/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [GitHub Pages](https://pages.github.com/)  

---

## 📂 Project Structure
```
ELEVVO-INTERNSHIP-TASK4-BLOG-HOMEPAGE
│
├── build/ # Production build files
├── node_modules/ # Dependencies
├── public/ # Public assets
│ ├── blog-image.jpg # Blog header image
│ ├── blogPostsData.json # Blog posts data (JSON)
│ └── index.html # Main HTML file
│ 
│
├── src/ # Source code
│ ├── App.js # Root React component
│ ├── Blog.js # Blog homepage section
│ ├── BlogPosts.js # Handles blog posts listing + pagination
│ ├── BlogSearch.js # Search component for filtering posts
│ ├── index.css # Global TailwindCSS styles
│ ├── index.js # React entry point
│ ├── Navbar.js # Navigation bar
│ └── Pagination.js # Pagination component
│
├── .gitignore # Ignored files in Git
├── package.json # Dependencies and scripts
├── package-lock.json # Dependency lock file
├── README.md # Documentation
└── tailwind.config.js # Tailwind CSS configuration
```

---

## ⚡ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/nmekks/elevvo-internship-task4-blog-homapage.git
   cd my-blog
   ```

2. Install dependencies:

  ```bash
  npm install
  ```

3. Start development server:
  ```bash
  npm start
  ```

## 🎨 TailwindCSS Setup
index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

tailwind.config.js
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
