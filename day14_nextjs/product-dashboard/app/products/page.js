import Link from "next/link";
import { products } from "./data";

// Products listing page
export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(p => (
          <Link key={p.id} href={`/products/${p.id}`} className="bg-white p-4 rounded shadow">
            <h2>{p.image} {p.name}</h2>
            <p>${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
