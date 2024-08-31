import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // StrictMode: lets you find common bugs early during development
  <StrictMode>
    <App />
  </StrictMode>
);
