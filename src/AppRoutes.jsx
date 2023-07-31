import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { Favorites } from "./pages/Favorites/Favorites";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};
