export default function Features() {
  const items = [
    {
      title: "Listing & Photography",
      desc: "Professional photos and optimised listings for max visibility.",
    },
    {
      title: "Pricing & Revenue",
      desc: "Dynamic pricing to increase nightly rates and occupancy.",
    },
    {
      title: "Guest Support",
      desc: "24/7 support and smooth check-in experience for guests.",
    },
    {
      title: "Cleaning & Maintenance",
      desc: "Trusted local cleaners and maintenance partners.",
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
