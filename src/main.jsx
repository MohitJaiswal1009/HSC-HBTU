import React, { Suspense, useState, useEffect, lazy } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"

// import AppWithFallback from './App.jsx'
// import EventWithFallback from './Components/Events/Event.jsx';
// import TeamWithFallback from './Components/Team/Team.jsx';
// import Gallary from './Components/throwback/gallary.tsx';
// import Navbar from './Components/Navbar/Navbar.jsx';
// import Footer2 from './Components/Footer/Footer2.jsx';

const Gallary = lazy(() => import("./Components/throwback/newgallary.jsx"))
const AppWithFallback = lazy(() => import("./App.jsx"))
const EventWithFallback = lazy(() => import("./Components/Events/Event.jsx"))
const TeamWithFallback = lazy(() => import("./Components/Team/Team.jsx"))
const Navbar = lazy(() => import("./Components/Navbar/Navbar.jsx"))
const Footer2 = lazy(() => import("./Components/Footer/Footer2.jsx"))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Suspense fallback={<div className="w-full h-screen bg-black text-white font-serif font-bold tracking-wide text-3xl flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppWithFallback />} />
          <Route path="/Events" element={<EventWithFallback />} />
          <Route path="/Team" element={<TeamWithFallback />} />
          <Route path="/throwback" element={<Gallary />} />
        </Routes>
      </Suspense>
      <Footer2 />
    </Router>
  </React.StrictMode>
)
