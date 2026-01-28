import "./globals.css";
import Link from "next/link";

// Root layout wrapping all pages or components 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Type for children (required in TS)
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="p-4 bg-black text-white flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
