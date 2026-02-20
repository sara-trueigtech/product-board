'use client';

import { getProductById } from "@/services/get";
import { useState, useEffect } from "react";

export const useProductDetail = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        if (!res || !res.id) throw new Error("Product not found");
        setProduct(res);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};