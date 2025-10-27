import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-800 backdrop-blur-sm">
          <Rocket className="h-4 w-4 text-purple-600" />
          The Voice of Builders in Web3
        </span>

        <h1 className="font-extrabold leading-tight text-gray-900">
          <span className="block text-4xl sm:text-5xl md:text-6xl">BUIDL Cast</span>
          <span className="mt-2 block bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 bg-clip-text text-2xl font-black text-transparent sm:text-3xl md:text-4xl">
            Where innovation meets narrative
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
          Deep-dive stories with founders, protocols, and frontier tech shaping the decentralized future.
          High-signal conversations on Layer 1 breakthroughs, AI x Crypto, and the builders behind it all.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#episodes"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:scale-[1.02] hover:bg-gray-800 active:scale-95"
          >
            <PlayCircle className="h-5 w-5" />
            Listen to Episodes
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-800 transition hover:border-gray-400 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
