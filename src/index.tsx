import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopHome } from "./screens/DesktopHome";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopHome />
  </StrictMode>,
);
