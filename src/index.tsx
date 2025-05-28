import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesktopHome } from "./screens/DesktopHome";
import CheckoutPage from "./screens/CheckoutPage";
import AboutUs from "./screens/AboutUs";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesktopHome />} />
        <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
