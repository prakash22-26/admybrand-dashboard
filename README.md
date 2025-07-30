# ADmyBRAND Insights Dashboard

A modern, animated analytics dashboard built with **React**, **Vite**, and **Tailwind CSS**. This project visualizes business metrics using charts, real-time updates, and exportable tables. It includes light/dark theme toggling and is fully responsive.

---

## 🌐 Live Demo

Hosted URL (example): [https://admybrand-dashboard.vercel.app](https://admybrand-dashboard.vercel.app)

---

## 🚀 Tech Stack

* **React** (with Vite bundler)
* **Tailwind CSS** (utility-first design)
* **Recharts** (charts)
* **Framer Motion** (animations)
* **SheetJS + jsPDF** (CSV and PDF export)
* **Lucide Icons**

---

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/prakash22-26/admybrand-dashboard.git
cd admybrand-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev

# To create a production build
npm run build
```

---

## ✨ Features & Folder Structure

### ✅ Features

* **Dashboard Overview Cards**: Revenue, Users, Conversions, Growth % with icons and animated UI
* **Charts**:

  * 📈 Line Chart: Real-time data updates every few seconds
  * 📊 Bar Chart: Engagement overview
  * 🧁 Pie Chart: Source split
* **Date Filter**: Start and end range selector
* **Table with Export**: CSV and PDF export functionality
* **Theme Toggle**: Light/Dark mode support
* **Skeleton Loaders**: Smooth placeholder animation during data loading
* **Responsive Design**: Fully mobile-friendly UI

### 📂 Folder Structure

```
src/
├── components/
│   ├── Cards/             # Overview cards
│   ├── Charts/            # Bar, Line, Pie components
│   ├── Table/             # Table & export buttons
│   ├── Filters/           # Date filter
│   ├── Skeletons/         # Skeleton loader
│   ├── Animations/        # FadeIn animation
│   └── ThemeToggle.jsx    # Theme mode button
├── data/mockData.js       # Static chart & card data
├── pages/Dashboard.jsx    # Main dashboard layout
├── App.jsx
└── main.jsx
```

---

## 📦 Deploy

### Vercel / Netlify

* Output directory: `dist`
* Build command: `npm run build`

---