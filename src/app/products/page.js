export const metadata = {
  title: "Products",
  description: "explore products",
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
        {products.map((p) => {
          return (<li key={p.id}>{p.title}</li>)
        }
          
        )}
      </ul>
    </div>
  );
}
