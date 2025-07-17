import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-white">Tourney</h3>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} Tourney. Alle Rechte vorbehalten.</p>
        </div>
        <div className="flex space-x-6">
          <a href="/impressum" className="hover:text-white transition">Impressum</a>
          <a href="/datenschutz" className="hover:text-white transition">Datenschutz</a>
          <a href="/kontakt" className="hover:text-white transition">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
