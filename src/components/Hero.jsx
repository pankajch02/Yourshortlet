function IconCheck() {
  return (
    <svg
      className="w-5 h-5 inline-block mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Hero({ onSignupClick }) {
  return (
    <header className="bg-gradient-to-r from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Stress-free short-let hosting
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              We handle everything from photos to pricing, cleaning and guest
              care, so you can simply enjoy your rental income.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onSignupClick}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-700"
              >
                Get a free estimate
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border text-sm"
              >
                How it works
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Specialists in London short-lets • Average host rating{" "}
              <strong>4.8/5</strong>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 text-sm text-gray-600">
              <div className="flex items-center">
                <IconCheck /> End-to-end management
              </div>
              <div className="flex items-center">
                <IconCheck /> Guaranteed cleaning
              </div>
              <div className="flex items-center">
                <IconCheck /> Transparent payouts
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <img
                alt="hero"
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60"
                className="w-full h-64 object-cover sm:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
