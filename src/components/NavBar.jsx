import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar({ onSignupClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-green-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-green-700">YourShortLet</div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm text-green-800">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-700">
            About
          </Link>
          <Link to="/pricing" className="hover:text-green-700">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-green-700">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <button
            onClick={onSignupClick}
            className="ml-auto px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
          >
            Get Estimate
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-green-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-green-50 shadow-inner px-6 py-4 space-y-3 text-green-800">
          <Link
            to="/"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              onSignupClick();
              setOpen(false);
            }}
            className="mt-3 w-full px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700"
          >
            Get Estimate
          </button>
        </div>
      )}
    </nav>
  );
}
