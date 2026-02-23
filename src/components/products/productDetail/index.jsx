'use client';

import Image from "next/image";
import { useProductDetail } from "./hooks/useProductDetail";

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const { product, loading, error } = useProductDetail(id);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Product not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      
      <div className="relative w-full h-80">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="mt-2 text-gray-600">
          Category: {product.category}
        </p>

        <p className="mt-4 text-2xl font-semibold text-green-600">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
}