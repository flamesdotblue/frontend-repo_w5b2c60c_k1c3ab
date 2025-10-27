import React from 'react';
import { Mic, Clock, Waves } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: 'Scaling L1s: The Next Throughput Frontier',
    guest: 'Ava Kim — Core Engineer, Nebula L1',
    length: '42 min',
    tag: 'Layer 1',
    summary:
      'Inside the quest for sub-second finality and what it unlocks for real-world adoption.',
  },
  {
    id: 2,
    title: 'AI x Crypto: Autonomous Agents That Pay',
    guest: 'Raj Mehta — Researcher, Agentic Labs',
    length: '55 min',
    tag: 'AI x Crypto',
    summary:
      'How agents will earn, spend, and coordinate on-chain—new markets and new risks.',
  },
  {
    id: 3,
    title: 'Restaking and the Security Economy',
    guest: 'Lina Park — Co-founder, ShieldNet',
    length: '48 min',
    tag: 'DeFi',
    summary:
      'Beyond yields: designing credible economic security for shared networks.',
  },
];

export default function EpisodeGrid() {
  return (
    <section id="episodes" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Latest Episodes</h2>
          <p className="mt-1 text-gray-600">High-signal conversations with the builders pushing Web3 forward.</p>
        </div>
        <a href="#newsletter" className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 sm:block">
          Get new drops
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((ep) => (
          <article key={ep.id} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
              <Waves className="h-4 w-4 text-cyan-600" />
              {ep.tag}
            </div>
            <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-gray-800">
              {ep.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{ep.summary}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
              <span className="inline-flex items-center gap-2"><Mic className="h-4 w-4" />{ep.guest}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{ep.length}</span>
            </div>
            <button className="mt-4 w-full rounded-xl bg-gray-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
              Play Episode
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
