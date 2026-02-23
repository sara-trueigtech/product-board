"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useDebounce } from "@/common/hooks/useDebounce";
import { useForm } from "react-hook-form";
import { getProductFilterControls } from "./constants";
import CommonFormController from "@/common/commonFormController";
import ProductCard from "../productCard";

export default function ProductList({ products }) {
  const { control, watch } = useForm({
    defaultValues: {
      search: "",
      category: "all",
    },
  });

  const search = watch("search");
  const category = watch("category");

  const debouncedSearch = useDebounce(search, 500, 3);

  const categories = useMemo(() => {
    const set = new Set(products?.map((p) => p.category));
    return ["all", ...set];
  }, [products]);

  const controls = useMemo(() => {
    return getProductFilterControls(categories);
  }, [categories]);

  const filteredProducts = useMemo(() => {
    return products?.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesCategory = category === "all" || p.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, debouncedSearch, category]);

  return (
    <div className="space-y-4">
      <CommonFormController controls={controls} control={control} />

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts?.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`} className="hover:underline">
              <ProductCard product={p} />
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
