import ProductList from "@/components/products/productList";
import Link from "next/link";

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

      {/* <ul className="mt-4 space-y-2 cursor-pointer">
        {products.map((p) => {
          return (<li key={p.id}><Link href={`/products/${p.id}`}>{p.title}</Link></li>)
        }
          
        )}
      </ul> */}

      <ProductList products={products}/>
    </div>
  );
}
