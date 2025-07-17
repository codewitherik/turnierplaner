import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home/Home.jsx'));
const About = lazy(() => import('./pages/home/About'));
const Blog = lazy(() => import('./pages/home/Blog'));
const Features = lazy(() => import('./pages/home/Features'));
const Pricing = lazy(() => import('./pages/home/Pricing'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/auth/Login'));
const NotFound = lazy(() => import('./pages/landing/Notfound'));

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
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;

