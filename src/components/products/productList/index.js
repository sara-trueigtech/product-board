"use client";

import { useMemo, useState } from "react";
import {useDebounce} from "./hooks/useDebounce";
import Link from "next/link";

export default function ProductList({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const debouncedSearch = useDebounce(search, 500, 3);

  const categories = useMemo(() => {
    const set = new Set(products?.map((p) => p.category));
    return ["all", ...set];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products?.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesCategory =
        category === "all" || p.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, debouncedSearch, category]);

  return (
    <div className="space-y-4">

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        className="border p-2 w-full"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full"
      >
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <ul className="space-y-2">
        {filteredProducts?.map((p) => (
          <li key={p.id}>
            <Link
              href={`/products/${p.id}`}
              className="hover:underline"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>

      {filteredProducts?.length === 0 && (
        <p className="text-gray-500">No products found</p>
      )}
    </div>
  );
}
