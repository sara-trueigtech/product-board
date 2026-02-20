'use client';

import ProductList from "../productList";
import { useProducts } from "./hooks";


export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">Products</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}