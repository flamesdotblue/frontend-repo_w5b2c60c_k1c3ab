import React from 'react';
import Hero from './components/Hero';
import EpisodeGrid from './components/EpisodeGrid';
import About from './components/About';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Content sections */}
      <EpisodeGrid />
      <About />
      <Newsletter />
    </div>
  );
}

export default App;
