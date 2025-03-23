'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-4 mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
      <p className="flex items-center justify-center gap-1">
        made with <span className="text-red-500 animate-pulse">❤</span> by <Link href="https://github.com/pichxyaponn" target="_blank" className="text-blue-400 hover:text-blue-500">@pichxyaponn</Link>
      </p>
    </footer>
  );
}
