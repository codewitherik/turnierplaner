import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold">Willkommen bei Tourney</h1>
        <p className="text-gray-600 mt-2">Dein Turnierplaner 2025</p>
      </header>

      <nav className="mb-6">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Startseite</Link>
          </li>
          <li>
            <Link to="/pricing" className="text-blue-600 hover:underline">Preise</Link>
          </li>
        </ul>
      </nav>

      <main>
        <p>
          Tourney ist dein Tool für einfache und effiziente Turnierplanung.
          Starte jetzt oder informiere dich über unsere Preispläne!
        </p>
        <Link
          to="/pricing"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Zu den Preisen
        </Link>
      </main>
    </div>
  );
}
