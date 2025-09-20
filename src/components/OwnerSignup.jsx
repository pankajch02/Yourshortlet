import { useState } from "react";

export default function OwnerSignup({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.postcode) {
      setError("Please complete name, email and postcode.");
      return;
    }
    onSubmit(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-2xl w-full max-w-xl shadow-xl p-6">
        <h3 className="text-lg font-semibold">Get your free estimate</h3>
        <p className="text-sm text-gray-600 mt-1">
          Enter a few details and we'll estimate what your property could earn.
        </p>

        <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3">
          <label className="text-sm">
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </label>

          <label className="text-sm">
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </label>

          <label className="text-sm">
            Phone (optional)
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </label>

          <label className="text-sm">
            Postcode
            <input
              name="postcode"
              value={form.postcode}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </label>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <div className="mt-2 flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-500 text-white"
            >
              Get estimate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
