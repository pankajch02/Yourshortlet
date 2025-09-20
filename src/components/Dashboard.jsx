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
