import Link from "next/link";

// Homepage component // Root page 
export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Product Dashboard</h1>
      <p className="mb-4">Learn Next.js App Router basics.</p>
      <Link className="text-blue-600 mr-4" href="/products">View Products</Link>
      <Link className="text-blue-600" href="/about">About</Link>
    </div>
  );
}
