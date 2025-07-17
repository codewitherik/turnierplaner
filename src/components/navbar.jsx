// src/components/Navbar.jsx
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm py-2 px-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Tourney</div>
      <ul className="flex space-x-4 text-sm text-gray-700">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/pricing" className="hover:text-blue-600">Preise</a></li>
        <li><a href="/login" className="hover:text-blue-600">Login</a></li>
      </ul>
    </nav>
  );
}

