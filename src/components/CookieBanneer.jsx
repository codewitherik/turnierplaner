import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm md:text-base">
          Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
