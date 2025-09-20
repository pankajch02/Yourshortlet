export default function PropertyCard({ p }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border">
      <div className="h-44 sm:h-56 w-full relative">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{p.city}</p>
        <div className="flex items-center justify-between mt-3">
          <div>
            <div className="text-sm text-gray-600">Avg nightly</div>
            <div className="font-bold text-lg">£{p.pricePerNight}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Occupancy</div>
            <div className="font-semibold">{p.occupancy}%</div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-2 rounded-lg border text-sm hover:bg-gray-50">
            View
          </button>
          <button className="px-3 py-2 rounded-lg bg-green-500 text-white text-sm hover:bg-green-700">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}
