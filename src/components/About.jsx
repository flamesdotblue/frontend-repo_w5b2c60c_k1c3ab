import React from 'react';
import { Target, Shield, Signal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Why BUIDL Cast</h2>
        <p className="mt-3 text-gray-600">
          We spotlight the builders—not just the headlines. Each story reveals the hard-won insights behind
          Web3 startups, protocols, and ecosystem-defining moments.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><Target className="h-5 w-5 text-fuchsia-600" /> High-signal only</div>
          <p className="mt-2 text-sm text-gray-600">Curated conversations with founders and researchers building what matters next.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><Signal className="h-5 w-5 text-purple-600" /> Builder-first</div>
          <p className="mt-2 text-sm text-gray-600">We go deep on mechanics, design tradeoffs, and real adoption—not hype cycles.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><Shield className="h-5 w-5 text-cyan-600" /> Trusted platform</div>
          <p className="mt-2 text-sm text-gray-600">A home for investors, founders, and curious minds seeking credible signal in Web3.</p>
        </div>
      </div>
    </section>
  );
}
