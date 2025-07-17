import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Anna Müller",
    role: "Turnierorganisatorin",
    text: "Tourney hat mir die Planung so viel leichter gemacht. Die Benutzeroberfläche ist super intuitiv!",
    avatar: "/images/avatar1.jpg", // Optional, eigenes Bild
  },
  {
    id: 2,
    name: "Max Mustermann",
    role: "E-Sport Spieler",
    text: "Endlich eine Plattform, die alle meine Turniere übersichtlich organisiert. Absolut empfehlenswert!",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Lisa Schmidt",
    role: "Schachtrainerin",
    text: "Die Funktionen für Teilnehmermanagement sind genial. Spart mir viel Zeit und Stress.",
    avatar: "/images/avatar3.jpg",
  },
];

export default function Testi() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Was unsere Nutzer sagen
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ id, name, role, text, avatar }) => (
            <div
              key={id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-4">&quot;{text}&quot;</p>
              <div className="flex items-center">
                {avatar && (
                  <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
