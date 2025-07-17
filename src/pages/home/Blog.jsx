import React from "react";

const posts = [
  {
    id: 1,
    title: "So planst du dein erstes Turnier erfolgreich",
    date: "2025-07-01",
    excerpt:
      "In diesem Artikel erfährst du die wichtigsten Schritte, um dein erstes Turnier stressfrei zu organisieren.",
    url: "/blog/turnier-planen",
  },
  {
    id: 2,
    title: "Die besten Tools für Turnierorganisatoren 2025",
    date: "2025-06-15",
    excerpt:
      "Wir stellen dir die Top-Tools vor, die dir bei der Planung und Verwaltung von Turnieren helfen.",
    url: "/blog/tools-fuer-turniere",
  },
  {
    id: 3,
    title: "Tipps zur Teilnehmerverwaltung",
    date: "2025-05-20",
    excerpt:
      "So behältst du den Überblick über deine Teilnehmer und sorgst für einen reibungslosen Ablauf.",
    url: "/blog/teilnehmerverwaltung-tipps",
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
          Unser Blog
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map(({ id, title, date, excerpt, url }) => (
            <article
              key={id}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
              <time
                dateTime={date}
                className="block mb-4 text-sm text-gray-500"
              >
                {new Date(date).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <p className="text-gray-700 mb-4">{excerpt}</p>
              <a
                href={url}
                className="text-blue-600 hover:underline font-semibold"
              >
                Weiterlesen →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
