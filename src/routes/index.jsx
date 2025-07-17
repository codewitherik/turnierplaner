/**
 * @copyright 2025 Tourney-Turnierplaner
 * @license MIT License
 * @description Routes config file for the app
 */

/**
 * Node modules
 */
import { createBrowserRouter } from "react-router-dom";

/**
 * Pages
 */

/**
 * Layouts
 */
import RootLayout from './layout/RootLayout.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />
    }
])

export default router;