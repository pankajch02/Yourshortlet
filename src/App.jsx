import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ShortLetFrontend from "./ShortLetFrontend";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

export default function App() {
  // handle modal from NavBar
  const [, setShowSignup] = useState(false);

  return (
    <Router>
      {/* NavBar visible on all pages */}
      <NavBar onSignupClick={() => setShowSignup(true)} />

      <Routes>
        <Route path="/" element={<ShortLetFrontend />} />
        <Route
          path="/about"
          element={<About onSignupClick={() => setShowSignup(true)} />}
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
