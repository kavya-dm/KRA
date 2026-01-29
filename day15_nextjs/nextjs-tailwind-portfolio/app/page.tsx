"use client";
// Enables React state for mobile menu functionality

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [open, setOpen] = useState(false); // Mobile menu toggle state

  return (
    <>
       {/* /* = NAVBAR = */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="block md:hidden space-y-1"
          >
            <span className={`block h-0.5 w-6 bg-black transition ${open && "rotate-45 translate-y-1.5"}`} />
            <span className={`block h-0.5 w-6 bg-black transition ${open && "opacity-0"}`} />
            <span className={`block h-0.5 w-6 bg-black transition ${open && "-rotate-45 -translate-y-1.5"}`} />
          </button>
        </div>
      </nav>

      {/* = MOBILE MENU =*/}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 text-xl font-bold">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}

      {/* = HERO = */}
      <section className="h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-center px-6">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Building Beautiful Web Experiences
          </h1>

          <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-2xl hover:scale-105 hover:shadow-3xl focus:ring-4 focus:ring-indigo-300 active:scale-95 transition-all duration-300">
            View My Work
          </button>
        </div>
      </section>

      {/* = FEATURES = */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Fast", "Responsive", "Modern"].map((item) => (
            <div
              key={item}
              className="p-8 rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 space-y-4"
            >
              <div className="text-4xl text-indigo-500">⚡</div>
              <h3 className="text-xl font-bold">{item}</h3>
              <p className="text-gray-600">
                Tailwind utility-first design for scalable UI.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* = STATS = */}
      <section className="flex flex-wrap items-center justify-center gap-12 py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        {[ "50+", "100%", "24/7" ].map((stat) => (
          <div key={stat} className="p-6 rounded-2xl bg-white shadow-lg text-center w-48">
            <p className="text-3xl font-black text-indigo-600">{stat}</p>
            <p className="text-gray-600">Stats</p>
          </div>
        ))}
      </section>

      {/* = TESTIMONIALS = */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-xl border hover:border-4 hover:border-indigo-500 transition-all"
            >
              <p className="text-gray-600">
                “Clean design, smooth animations, and great UX.”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* = FOOTER = */}
      <footer className="bg-gradient-to-r from-gray-900 to-indigo-950 py-16 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white px-6 max-w-7xl mx-auto">
          <div>Brand</div>
          <div>Links</div>
          <div>Social</div>
          <div>Contact</div>
        </div>
      </footer>
    </>
  );
}
