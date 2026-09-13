# 🚀 Dev Stack Project

A responsive React web application that helps developers explore different technologies and build their own development stack.

## 🌐 Live Website

https://benevolent-croissant-4702d5.netlify.app

## 💻 GitHub Repository

https://github.com/anasezhar9306-arch/dev-stack-project-

---

## 📖 About The Project

Dev Stack is a responsive web application where developers can explore different development technologies and learn about their category, difficulty level, rating, badge, and description.

Users can add technologies to their own development stack, remove individual technologies, or clear the entire stack at once. The application also prevents duplicate technologies from being added and provides toast notifications for different stack actions.

The project is designed with responsive practices so that it works smoothly across mobile, tablet, and desktop devices.

---

## ✨ Key Features

- 🧩 Technology data is loaded dynamically from a JSON file and displayed in responsive technology cards.
- ➕ Users can add technologies to their personal stack, while duplicate technologies are prevented.
- 🛠️ Users can remove individual technologies or clear the entire stack using the "Remove All" option.

---

## ⭐ Additional Features

- 📱 Fully responsive navbar with mobile hamburger menu
- 📌 Sticky navigation bar
- 🎯 Responsive hero/banner section
- 🏷️ Technology category, difficulty, badge, and rating information
- 🔔 Toast notifications for add, duplicate, remove, and remove-all actions
- ⏳ Loading state while technology data is being loaded
- 🎨 Shared orange → pink → violet gradient theme
- 🔗 Social links for GitHub, Twitter, and LinkedIn
- ✨ Hover effects on technology cards
- 📱 Responsive design for mobile, tablet, and desktop

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- JSON

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/anasezhar9306-arch/dev-stack-project-.git

cd dev-stack-project-

npm install

npm run dev

Then open the local development URL shown in the terminal.

⚛️ React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us describe how the UI should look.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only.

State is data managed inside a component that can change over time. When state changes, React updates the UI.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage changing data inside a React component.

In this project, I used useState in the Cards component to manage the selected technologies in the user's stack. I also used useState in the Nav component to control the mobile hamburger menu.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component, such as fetching data, working with APIs, or updating something outside the component.

In this project, I did not need useEffect to load the JSON data. Instead, I used the React use() API with Suspense to handle the asynchronous JSON data and show a loading state while the data was being loaded.

5. Why does every item in a .map() list need a unique key prop?

React uses the key prop to identify each item in a list. A unique key helps React understand which items have changed, been added, or removed, so it can update the UI efficiently.

In this project, I used the technology id as the key when displaying technology cards and stack items.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

In this project, I used conditional rendering in the Your Stack section. When there are no selected technologies, it shows:

Your stack is empty

When technologies are selected, it displays the selected technology items instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data or functions to a child component using props.

In this project, the Cards component passes cards, addToStack, and selectedCards to the UnselectedCDS component.

The child can send information back to the parent by calling a function that the parent passed through props. For example, UnselectedCDS calls addToStack(card), which updates the selected technologies in the parent Cards component.

📌 Project Highlights

Dev Stack focuses on practicing important React concepts such as:

Component-based UI development
Props and state management
Conditional rendering
Event handling
Rendering lists with .map()
Unique key props
Parent-child communication
Asynchronous data loading
React Suspense
Responsive UI design
👨‍💻 Project

Dev Stack — A responsive technology stack builder for developers.

🌐 Live Website:
https://benevolent-croissant-4702d5.netlify.app

💻 GitHub Repository:
https://github.com/anasezhar9306-arch/dev-stack-project-