import { notFound } from "next/navigation";

export default async function ProductDetail({ params }) {
  const res = await fetch(
    `${process.env.BASE_URL}/products/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  const product = await res.json();

  if (!product || product.id === undefined) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="mt-2 text-gray-600">
        Category: {product.category}
      </p>

      <p className="mt-2">
        Price: <strong>${product.price}</strong>
      </p>

      <p className="mt-4">{product.description}</p>
    </div>
  );
}
