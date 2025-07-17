import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du das Formular z.B. an einen API-Endpunkt schicken
    alert(`Danke, ${formData.name}! Wir haben deine Nachricht erhalten.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Kontakt</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Dein Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">E-Mail</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Deine E-Mail"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Nachricht</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Deine Nachricht"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Absenden
        </button>
      </form>
    </section>
  );
}
