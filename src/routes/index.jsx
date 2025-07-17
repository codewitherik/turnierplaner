/**
 * @copyright 2025 Tourney-Turnierplaner
 * @license MIT License
 * @description Routes config file for the app
 */

/**
 * Node modules
 */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
/**
 * Pages
 */
import Home from './pages/home/Tourney';
import About from './pages/home/About';
import Login from './components/auth/Login';
import Register from './components/Register';
import NotFound from './pages/landing/Notfound';
import Blog from './pages/home/Blog';
import Features from './pages/home/Features';
import Pricing from './pages/home/Pricing';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;