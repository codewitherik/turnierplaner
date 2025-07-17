import React from "react";
import Navbar from "../../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Willkommen bei <span className="text-blue-600">Tourney</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Der einfachste Weg, Turniere zu planen und zu verwalten.
          </p>
          <div className="space-x-4">
            <a
              href="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Jetzt starten
            </a>
            <a
              href="/pricing"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Preise ansehen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
