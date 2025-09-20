export default function CityTiles() {
  const cities = [
    "London",
    "Manchester",
    "Bristol",
    "Edinburgh",
    "Birmingham",
    "Leeds",
  ];
  return (
    <section id="cities" className="max-w-7xl mx-auto px-6 py-8">
      <h3 className="text-xl font-semibold">Cities we operate in</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {cities.map((c) => (
          <div
            key={c}
            className="p-3 border rounded-lg text-center text-sm bg-white"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
