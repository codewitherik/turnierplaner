/**
 * @copyright 2025 Tourney-Turnierplaner
 * @license MIT License
 * @description Routes config file for the app
 */

import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/index.jsx'));
const About = lazy(() => import('./pages/home/About'));
const Blog = lazy(() => import('./pages/home/Blog'));
const Features = lazy(() => import('./pages/home/Features'));
const Pricing = lazy(() => import('./pages/home/Pricing'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/auth/Login'));
const NotFound = lazy(() => import('./pages/landing/Notfound'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <Suspense fallback={<div>Loading...</div>}>
          {/* Ein Wrapper für Suspense */}
          <React.Fragment />
        </Suspense>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
