import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
          <Mail className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Get new episodes in your inbox</h3>
        <p className="mt-1 text-sm text-gray-600">No noise—just high-signal drops from builders shaping the next internet.</p>
        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@protocol.xyz"
              className="w-full flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none ring-gray-300 transition placeholder:text-gray-400 focus:ring-2"
              required
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
            You’re in! We’ll send you the next drop.
          </div>
        )}
      </div>
    </section>
  );
}
