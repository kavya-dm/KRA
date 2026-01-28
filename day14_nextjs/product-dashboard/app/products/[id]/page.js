"use client";
import { useParams, useRouter } from "next/navigation";
import { products } from "../data";

// Dynamic product detail page
export default function ProductDetailPage() {
  const params = useParams(); // Reads dynamic route params
  const router = useRouter(); // Used for navigation
  console.log("Product ID:", params.id); // Debug param

  const product = products.find(p => p.id === params.id);
  if (!product) throw new Error("Product not found");

  return (
    <div>
      <h1 className="text-2xl font-bold">{product.image} {product.name}</h1>
      <p>{product.description}</p>
      <p className="font-semibold">${product.price}</p>
      <button onClick={() => router.back()} className="text-blue-600 mt-2">
        ← Back
      </button>
    </div>
  );
}
