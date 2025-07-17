import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 md:px-12 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Plane dein <span className="text-yellow-400">Turnier</span> mit Leichtigkeit
      </h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-90">
        Organisiere, verwalte und verfolge deine Turniere an einem Ort — schnell, einfach und effizient.
      </p>
      <div className="space-x-4">
        <a
          href="/register"
          className="inline-block bg-yellow-400 text-indigo-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
          Jetzt starten
        </a>
        <a
          href="/pricing"
          className="inline-block border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-indigo-900 transition"
        >
          Preise ansehen
        </a>
      </div>
    </header>
  );
}
