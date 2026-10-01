import React from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App.jsx";
import { LangProvider } from "./traduction.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  // reducedMotion="user" : respecte le réglage "réduire les animations" de l'OS
  <MotionConfig reducedMotion="user">
    <LangProvider>
      <App />
    </LangProvider>
  </MotionConfig>
);
