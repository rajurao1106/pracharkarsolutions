import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UnderConstruction from "./components/UnderConstruction";
import ContactUs from "./pages/ContactUs";
import Whatsapp from "./components/Whatsapp";
import ScrollToTop from "./components/ScrollToTop";
import UseScrollToTop from "./components/useScrollToTop.jsx"

const isUnderConstruction = false; 

export default function App() {
  return (
    <Router>
      <Navbar />
      <Whatsapp />
      <ScrollToTop />
      <UseScrollToTop/>
      <Routes>
        <Route
          path="/"
          element={isUnderConstruction ? <UnderConstruction /> : <Homepage />}
        />
        <Route
          path="/contact"
          element={isUnderConstruction ? <UnderConstruction /> : <ContactUs />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
