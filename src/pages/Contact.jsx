export default function Contact() {
  return (
    <div className="bg-green-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-800">Contact Us</h1>
          <p className="mt-4 text-green-700 max-w-2xl mx-auto">
            We’d love to hear from you. Fill out the form below or email{" "}
            <a
              href="mailto:hello@yourshortlet.com"
              className="underline hover:text-green-900"
            >
              hello@yourshortlet.com
            </a>
          </p>
        </div>

        <div className="mt-10 bg-white rounded-xl shadow-lg max-w-2xl mx-auto p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-green-800 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 block w-full rounded-md border border-green-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
            </div>

            <div>
              <label className="block text-green-800 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border border-green-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
            </div>

            <div>
              <label className="block text-green-800 text-sm font-medium">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="mt-1 block w-full rounded-md border border-green-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-green-600 text-white font-medium shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
