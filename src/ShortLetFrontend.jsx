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
    title: "Sunny 2-bed near city centre",
    city: "Manchester",
    pricePerNight: 85,
    occupancy: 72,
    image:
      "https://www.servereworldsystem.com/include/blog/2614/26140339511d.jpeg.webp",
  },
  {
    id: "p2",
    title: "Large studio, perfect for business trips",
    city: "London",
    pricePerNight: 110,
    occupancy: 81,
    image:
      "https://www.servereworldsystem.com/include/blog/2614/26140339513d.jpeg.webp",
  },
  {
    id: "p3",
    title: "Cozy suburban home with garden",
    city: "Bristol",
    pricePerNight: 69,
    occupancy: 65,
    image:
      "https://scontent.fdel25-5.fna.fbcdn.net/v/t1.6435-9/40158530_329714364446942_8903272762848575488_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aX9jWZ-TLjsQ7kNvwGEHFpH&_nc_oc=AdmG5OBZRHek8s8KLqBS4Ie16xWkGOCGgLrocPZkST1FV-hDyfEP1fPgTpCqpPpA_Bo&_nc_zt=23&_nc_ht=scontent.fdel25-5.fna&_nc_gid=-_TDFiY4wcxjrkCWmJWffw&oh=00_AfYcarZDD1AUJ2z2dXgeFyq8x0Y4eGuKxflN5N_wnnznGQ&oe=68F39E44",
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
