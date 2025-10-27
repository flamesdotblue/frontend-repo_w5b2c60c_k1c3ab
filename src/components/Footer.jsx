import React from 'react';
import { Twitter, Youtube, Rss } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 pt-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} BUIDL Cast — The Voice of Builders in Web3</p>
        <div className="flex items-center gap-3 text-gray-700">
          <a aria-label="Twitter" href="#" className="rounded-full border border-gray-300 p-2 transition hover:border-gray-400 hover:bg-gray-50">
            <Twitter className="h-4 w-4" />
          </a>
          <a aria-label="YouTube" href="#" className="rounded-full border border-gray-300 p-2 transition hover:border-gray-400 hover:bg-gray-50">
            <Youtube className="h-4 w-4" />
          </a>
          <a aria-label="RSS" href="#" className="rounded-full border border-gray-300 p-2 transition hover:border-gray-400 hover:bg-gray-50">
            <Rss className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
