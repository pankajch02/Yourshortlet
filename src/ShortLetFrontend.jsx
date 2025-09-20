import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CityTiles from "./components/CityTiles";
import PropertyCard from "./components/PropertyCard";
import OwnerSignup from "./components/OwnerSignup";
import Dashboard from "./components/Dashboard";

// sample properties
const mockProperties = [
  {
    id: "p1",
    title: "Modern Two-Bedroom Flat Just Minutes from Central Londons",
    city: "London",
    pricePerNight: 85,
    occupancy: 72,
    image:
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "p2",
    title: "Large studio, perfect for business trips",
    city: "London",
    pricePerNight: 110,
    occupancy: 81,
    image:
      "https://images.unsplash.com/photo-1702014862053-946a122b920d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "p3",
    title: "Cozy suburban home with garden",
    city: "London",
    pricePerNight: 69,
    occupancy: 65,
    image:
      "https://images.unsplash.com/photo-1608463123864-40a2961b7d00?q=80&w=1097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ShortLetFrontend() {
  const [showSignup, setShowSignup] = useState(false);
  const [view, setView] = useState("site");
  const [message, setMessage] = useState("");

  function handleSignupSubmit(data) {
    setMessage(
      `Thanks ${data.name}! We'll email an estimate to ${data.email}.`
    );
    setShowSignup(false);
    setTimeout(() => setView("dashboard"), 700);
  }

  if (view === "dashboard") {
    return <Dashboard onBack={() => setView("site")} />;
  }

  return (
    <div className="min-h-screen bg-green-50 text-green-900">
      {/* NavBar is now green inside NavBar.jsx (make sure you changed its classes to green) */}
      <NavBar onSignupClick={() => setShowSignup(true)} />

      <Hero onSignupClick={() => setShowSignup(true)} />

      <Features />
      <CityTiles />

      {/* Property cards */}
      <section id="properties" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold">Featured properties</h3>
        <p className="text-sm text-green-700 mt-1">
          Live examples of properties we manage.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* Signup modal */}
      {showSignup && (
        <OwnerSignup
          onClose={() => setShowSignup(false)}
          onSubmit={handleSignupSubmit}
        />
      )}

      {message && (
        <div className="fixed left-4 bottom-4 bg-green-100 border border-green-300 rounded-lg px-4 py-2 shadow-sm text-green-800">
          {message}
        </div>
      )}
    </div>
  );
}
