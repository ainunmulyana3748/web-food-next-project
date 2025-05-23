// components/SearchBox.js
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }
      router.push(`?${params.toString()}`);
    }, 500); // debounce

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Cari makanan..."
      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}
