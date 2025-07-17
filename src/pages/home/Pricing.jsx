import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Pricing() {
  const [isOnlineTournament, setIsOnlineTournament] = useState(false);

  return (
    <>
      <Helmet>
        <title>Preise | Tournify Turnierplaner</title>
        <meta name="description" content="Probiere die kostenlose Tournify Testversion aus und upgrade diese, wann und wie du willst." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-8">
            <h1 className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              Probiere die kostenlose Tournify Testversion aus und upgrade diese, wann und wie du willst
            </h1>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="bg-white bg-opacity-20 rounded-full p-1 flex items-center">
              <button
                onClick={() => setIsOnlineTournament(false)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-200 ${
                  !isOnlineTournament 
                    ? 'bg-purple-700 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">🏆</span>
                <span className="font-medium">Turnier</span>
              </button>
              <button
                onClick={() => setIsOnlineTournament(true)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-200 ${
                  isOnlineTournament 
                    ? 'bg-purple-700 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">👁️</span>
                <span className="font-medium">Online-Turnier</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Amateur Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-purple-600 text-sm font-medium mb-4">Amateur</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Kostenlos</span>
                  <p className="text-gray-600 text-sm mt-1">permanent</p>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Bis zu 8 Teams</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Flexible Turnierplanung</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Planning Tool</span>
                  </li>
                </ul>

                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Starte jetzt
                </button>
              </div>
            </div>

            {/* Weltklasse Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-purple-600 text-sm font-medium mb-4">Weltklasse</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">40€</span>
                  <p className="text-gray-600 text-sm mt-1">pro Turnier</p>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Bis zu 60 Teams</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Persönliches Design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Erwähne Sponsoren</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">In Android- und iOS-App anzeigen</span>
                  </li>
                </ul>

                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Starte jetzt
                </button>
              </div>
            </div>

            {/* Legendär Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-purple-600 text-sm font-medium mb-4">Legendär</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">120€</span>
                  <p className="text-gray-600 text-sm mt-1">pro Turnier</p>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Mehr als 60 Teams</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Persönliches Design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Erwähne Sponsoren</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">In Android- und iOS-App anzeigen</span>
                  </li>
                </ul>

                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Starte jetzt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
