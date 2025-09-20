export default function About({ onSignupClick }) {
  return (
    <div className="bg-green-50">
      {/* Hero / intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-green-800">About Us</h1>
        <p className="mt-4 text-green-700 max-w-2xl mx-auto">
          YourShortLet helps property owners unlock the full potential of their
          short-let rentals. From marketing to guest care, we make hosting
          effortless.
        </p>
      </section>

      {/* Mission / values */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-green-800">
              Our Mission
            </h2>
            <p className="mt-3 text-green-700 text-sm">
              To simplify short-term rental management and maximise revenue for
              our hosts while providing great guest experiences.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-green-800">
              Our Approach
            </h2>
            <p className="mt-3 text-green-700 text-sm">
              We combine data-driven pricing, professional cleaning, and
              responsive guest support to deliver worry-free hosting.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-green-800">Our Values</h2>
            <p className="mt-3 text-green-700 text-sm">
              Transparency, hospitality, and sustainability guide everything we
              do to create lasting relationships with hosts and guests alike.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-green-800">
          Ready to get started?
        </h3>
        <p className="mt-2 text-green-700">
          Join hundreds of property owners already using YourShortLet.
        </p>
        <button
          onClick={onSignupClick}
          className="mt-6 px-6 py-3 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700"
        >
          Get a Free Estimate
        </button>
      </section>
    </div>
  );
}
