import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-3 hover:shadow-md transition bg-white">
      <div className="relative w-full h-28">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 50vw,
                 (max-width: 1024px) 33vw,
                 20vw"
        />
      </div>

      <h3 className="mt-2 text-sm font-semibold line-clamp-1">
        {product.title}
      </h3>

      <p className="text-xs text-gray-500 line-clamp-1">
        {product.category}
      </p>

      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-bold">
          ₹{product.price}
        </span>
      </div>
    </div>
  );
}