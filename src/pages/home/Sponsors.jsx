import React from "react";

const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/sponsors/sponsor1.png",
    url: "https://sponsor1.com",
  },
  {
    name: "Sponsor 2",
    logo: "/sponsors/sponsor2.png",
    url: "https://sponsor2.com",
  },
  {
    name: "Sponsor 3",
    logo: "/sponsors/sponsor3.png",
    url: "https://sponsor3.com",
  },
  {
    name: "Sponsor 4",
    logo: "/sponsors/sponsor4.png",
    url: "https://sponsor4.com",
  },
];

export default function Sponsors() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Unsere Sponsoren</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map(({ name, logo, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
              <img
                src={logo}
                alt={name}
                className="max-h-20 object-contain grayscale hover:grayscale-0 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
