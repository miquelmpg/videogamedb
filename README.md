# React + Vite

## 🎮 Game Data Base

**Game Data Base** is a web application built with **React + Vite** as a **portfolio project**. It allows users to explore a catalog of video games using **external APIs**. The app includes **user authentication**, filters, search functionality, pagination, a **dashboard with interactive charts**, and a **dynamic footer** showing recent activity, as well as dedicated pages for different user flows.  

All pages are **shareable via URL using query parameters**, so filtered searches, pagination, or dashboard views can be directly shared.

[Visit Game Website](https://game-data-base.netlify.app/)

---

## 🚀 Main Features

- 🔐 User registration and login  
- 🏠 Home page with a list of video games  
- 🎯 Filters by **genre** and **platform**  
- 🔄 Reset filters button  
- 🔍 Search page for games  
- 📄 Detail page for each video game  
- 📊 User dashboard with interactive charts:
  - Click bars or points to access game detail pages  
  - Hover on bars shows additional price charts filtered by game name  
  - Hover on bars shows a pie chart with percentages by rating  
  - Click on price charts to visit external websites for the game  
- 💖 Favorites page with drag-and-drop functionality  
- 📄 404 error page  
- 📄 Pagination of results  
- ➕ Add items (e.g., favorites)  
- 📱 Responsive design using Bootstrap  
- 🔗 Navbar with logo/name linking to home  
- 🔄 Dynamic navbar buttons depending on user session:
  - Not logged in: **Register** and **Login**  
  - Logged in: **Favorites**, **Dashboard**, **Logout**
- 📌 **Dynamic Footer**:
  - Shows **recent activity** (recently visited detail pages)
  - Displays up to 6 items per view, with navigation if more than 6
  - Always shows the **most recent visit on the right**
  - Disappears on **Login**, **Register**, and **404 Error** pages
- 🌐 Pages are **shareable via URL query parameters** (filters, searches, pagination)

---

## 🖥️ Application Pages

### 📝 Register Page
- Allows new users to register in the application
- Footer does not appear

### 🔑 Login Page
- Authenticates registered users
- Footer does not appear

### 🏠 Home Page
- Main listing of video games
- Filters by genre and platform
- Reset filters button
- Pagination of results
- Access to the detail page of each game by clicking on the game name
- Add items functionality (e.g., favorites)
- Footer shows recent detail page visits
- Filtered views are shareable via URL query parameters

### 🔍 Search Page
- Allows searching for games by name
- Dynamically displays matching results
- Add items functionality (e.g., favorites)
- Footer shows recent detail page visits
- Search results are shareable via URL query parameters

### 📄 Detail Page
- Shows complete information about the selected video game
- Accessed by clicking the game name from the Home Page
- Data retrieved from external APIs:
  - Title
  - Genre(s)
  - Platform(s)
  - Description
  - Images and cover
  - Trailers
- 💬 Reddit comments section:
  - Displays user, comment text, date/time
  - Clickable links to the Reddit profile of each user
- Footer updates to show this visit in recent activity
- Page URL can be shared directly

### 📊 Dashboard Page
- Private page, accessible only to registered users
- Displays personalized or management information
- Includes **filters** and interactive UI elements:
  - Hover effects
  - Click bars or points to access game detail pages
  - Hover on bars shows additional price charts filtered by game name
  - Hover on bars shows a pie chart with percentages by rating
  - Click on price charts to visit external websites for the game
- Footer shows recent detail page visits
- Filtered dashboard views are shareable via URL query parameters

### 💖 Favorites Box
- Private page, accessible only to registered users
- Drag-and-drop functionality for games
- Users can drop games into a “favorites box”
- Games appear dynamically in the box as they are added
- Footer shows recent detail page visits
- Favorites box state is shareable via URL query parameters

### ❌ 404 Error Page
- Shown when the route does not exist
- Footer does not appear

---

## 🛠️ Technologies Used

- **Framework:** React  
- **Bundler:** Vite  
- **Styling:** Bootstrap  
- **Routing:** React Router  
- **Authentication:** Frontend user management  
- **External APIs:**
  - RAWG Video Games Database API  
  - Reddit API (for comments)  
  - Cheapshark API (for prices)
- **Hosting:** Netlify