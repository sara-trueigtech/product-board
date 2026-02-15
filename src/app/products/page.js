export const metadata = {
  title: "Products",
  description: "Browse all products available in ProductBoard",
};

export const revalidate = 10;

export default async function ProductsPage() {
  const res = await fetch(
    `${process.env.BASE_URL}/products`
  );

  const products = await res.json();

  return (
    <div>
      <h2 className="text-2xl font-bold">Products</h2>

      <ul className="mt-4 space-y-2">
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
