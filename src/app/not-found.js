import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Product Not Found</h1>
      <p className="mt-2">The requested product does not exist.</p>

      <Link
        href="/products"
        className="inline-block mt-4 text-blue-600 underline"
      >
        Back to products
      </Link>
    </div>
  );
}
