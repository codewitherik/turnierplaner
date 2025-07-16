import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Tourney";
import About from "./pages/home/About.jsx";
import Login from "./components/auth/Login.jsx";
import Blog from "./pages/home/Blog.jsx";
import Features from "./pages/home/Features.jsx";
import Pricing from "./pages/home/Pricing.jsx"; // "," entfernt
import Register from "./components/Register.jsx";
import NotFound from "./pages/landing/NotFound.jsx"; // Groß-/Kleinschreibung beachten

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Features />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/einloggen" element={<Login />} />
        <Route path="/anmelden" element={<Login />} />
        {/* Optional: Catch-All für 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
