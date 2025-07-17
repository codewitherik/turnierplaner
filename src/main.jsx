/**
 * @copyright 2025 Tourney-Turnierplaner
 * @license MIT License
 * @description Main react file for the app
 */

/**
 * Node modules
 */
import React, { StrictMode } from 'react';           // 'StrictMode' mit großem M
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';  // 'react-router-dom' für Browser-Router

/**
 * Css LINK 
 */
import './index.css';

/**
 * Routes import (hier musst du deine Router-Konfiguration importieren)
 */


// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
