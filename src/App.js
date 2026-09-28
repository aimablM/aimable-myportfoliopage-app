import "./styles/site.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";

function NotFound() {
  return (
    <main className="container section">
      <span className="eyebrow">404</span>
      <h1 className="section__title">Nothing deployed here.</h1>
      <p style={{ marginTop: 24 }}>
        <a href="/" className="link-underline">
          Back home
        </a>
      </p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
