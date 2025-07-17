import React from "react";

export default function Present() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Text-Bereich */}
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Organisiere dein Turnier mühelos
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Tourney hilft dir, Turniere zu erstellen, zu verwalten und mit Teilnehmern zu kommunizieren – alles an einem Ort. 
            Egal ob Fußball, E-Sport oder Schach, mit unserer Plattform behältst du immer den Überblick.
          </p>
          <a
            href="/register"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
          >
            Jetzt registrieren
          </a>
        </div>

        {/* Bild-Bereich */}
        <div className="md:w-1/2">
          <img
            src="/images/presentation.png" // Pfad anpassen
            alt="Tourney Plattform Vorschau"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
