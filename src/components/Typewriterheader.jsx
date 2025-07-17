import React, { useState, useEffect } from "react";

const sports = [
  "Fußball",
  "Basketball",
  "Tennis",
  "Volleyball",
  "Handball",
  "Badminton",
  "Hockey",
];

export default function TypewriterHeader() {
  const [text, setText] = useState("");
  const [sportIndex, setSportIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentSport = sports[sportIndex];
    let timeout;

    if (!deleting && charIndex <= currentSport.length) {
      timeout = setTimeout(() => {
        setText(currentSport.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentSport.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 100);
    } else if (charIndex === currentSport.length + 1) {
      // Pause bevor löschen
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex === 0 && deleting) {
      setDeleting(false);
      setSportIndex((prev) => (prev + 1) % sports.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, sportIndex]);

  return (
    <h1 className="text-4xl font-bold text-center mt-20">
      Sportarten:{" "}
      <span className="text-blue-600 border-r-2 border-blue-600 pr-2 animate-blink">
        {text}
      </span>
    </h1>
  );
}
