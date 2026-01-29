// Root layout wrapping all pages with metadata and Tailwind styles
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tailwind Portfolio",
  description: "Modern responsive portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  
  )
}

// Utility classes - Utility classes are small, single-purpose CSS classes that do one job only.
// Utility classes are small, single-purpose CSS classes that apply one specific style, allowing you to build complex designs by composing classes directly in your markup.

// text-4xl → default mobile size

// sm: → tablet

// md: → small laptop

// lg: → desktop

// font-black → boldest weight

// tracking-tight → tighter letters