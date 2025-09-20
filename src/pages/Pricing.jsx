export default function Pricing() {
  const plans = [
    {
      name: "Full Management",
      price: "15% of booking",
      features: [
        "Listing & professional photography",
        "Pricing optimisation",
        "Cleaning & maintenance",
        "24/7 guest support",
      ],
    },
    {
      name: "Revenue Management Only",
      price: "8% of booking",
      features: [
        "Listing optimisation",
        "Pricing strategy",
        "Monthly reporting",
      ],
    },
  ];

  return (
    <div className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-green-800">
          Pricing & Services
        </h1>
        <p className="mt-4 text-green-700 max-w-2xl mx-auto">
          Choose the package that fits your hosting needs. Simple, transparent
          fees with full support.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow p-8 text-left"
            >
              <h2 className="text-2xl font-semibold text-green-800">
                {plan.name}
              </h2>
              <div className="mt-2 text-green-600 text-lg font-bold">
                {plan.price}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-green-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 mt-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full px-6 py-3 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
