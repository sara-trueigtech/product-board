'use client';

import { useProductDetail } from "./hooks/useProductDetail";


export default function ProductDetailPage({ params }) {
  const { id } = params;
  const { product, loading, error } = useProductDetail(id);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Product not found</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.title}</h1>

      <p className="mt-2 text-gray-600">
        Category: {product.category}
      </p>

      <p className="mt-2">
        Price: <strong>${product.price}</strong>
      </p>
    </div>
  );
}