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

export default function Dashboard({ onBack }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Owner dashboard</h2>
        <button
          onClick={onBack}
          className="text-sm border rounded-lg px-3 py-2"
        >
          Back to site
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl p-4 border shadow-sm">
          <h3 className="font-semibold">Properties</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockProperties.map((p) => (
              <div
                key={p.id}
                className="p-3 border rounded-lg flex gap-3 items-center"
              >
                <img
                  src={p.image}
                  alt="thumb"
                  className="w-20 h-16 object-cover rounded-md"
                />
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-gray-500">
                    {p.city} • £{p.pricePerNight}/night
                  </div>
                </div>
                <div className="ml-auto text-sm text-gray-600">
                  {p.occupancy}% occ
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-white rounded-2xl p-4 border shadow-sm">
          <h4 className="font-semibold">Overview</h4>
          <dl className="mt-3 space-y-3 text-sm text-gray-600">
            <div>
              <dt className="text-xs text-gray-500">This month earnings</dt>
              <dd className="font-bold text-lg">
                £
                {mockProperties
                  .reduce((s, p) => s + p.pricePerNight * 10, 0)
                  .toFixed(0)}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Active properties</dt>
              <dd className="font-semibold">{mockProperties.length}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Pending tasks</dt>
              <dd className="font-semibold text-amber-600">3</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
