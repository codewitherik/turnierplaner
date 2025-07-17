/**
 * @copyright 2025 Tourney-Turnierplaner
 * @license MIT License
 * @description Main react file for the app
 */

/**
 * Node modules
 */
import { Strictmode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider} from 'react-router';

/**
 * Css LINK 
 */
import './index.css';

/**
 * Routes
 */


createRoot(document.getElementByID('root')!).render(
  <Strictmode>
    <RouterProvider router={}>
  </Strictmode>
)
