import React from "react";
import { BiTimer, BiGroup, BiCheckShield } from "react-icons/bi";

export default function Home() {
  return (
    <>
      {/* Features Section */}
      <section className="py-20 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Unsere Features
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <BiTimer className="text-blue-600 text-6xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Einfache Planung</h3>
              <p>
                Plane Turniere in wenigen Minuten – mit intuitiven Tools und Vorlagen.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <BiGroup className="text-blue-600 text-6xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teilnehmerverwaltung</h3>
              <p>
                Verwalte Teilnehmerlisten, Teams und Spielpläne bequem an einem Ort.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <BiCheckShield className="text-blue-600 text-6xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sicher & Zuverlässig</h3>
              <p>
                Deine Daten sind sicher – dank modernster Verschlüsselung und Datenschutz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
