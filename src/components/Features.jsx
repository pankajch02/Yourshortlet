export default function Features() {
  const items = [
    {
      title: "Professional Listing",
      desc: "We create and manage a stand-out listing with high quality photos and compelling copy.",
    },
    {
      title: "Smart Pricing",
      desc: "Our data-driven pricing keeps your calendar full and your revenue maximised.",
    },
    {
      title: "Complete Guest Care",
      desc: "From check-in to checkout, we handle every guest question and request.",
    },
    {
      title: "Cleaning & Maintenance",
      desc: "Reliable housekeeping and quick fixes to keep your property in great shape.",
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">What we do</h2>
      <p className="text-gray-600 mt-2 max-w-2xl">
        Everything you need to turn your home into a high-performing short-term
        rental.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-4 bg-white rounded-2xl shadow-sm border"
          >
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
