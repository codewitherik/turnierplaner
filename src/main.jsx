import React, { StrictMode, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";
import "./index.css";
import Lenis from "@studio-freight/lenis";
import 'bootstrap/dist/css/bootstrap.min.css';


const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function Root() {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => t * (2 - t),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenisRef.current.destroy();
  }, []);

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
