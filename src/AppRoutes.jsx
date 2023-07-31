import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { Player } from "./pages/Player/Player";
import { Favorites } from "./pages/Favorites/Favorites";
import { NotFound } from "./pages/NotFound/NotFound";
import { BasePage } from "./pages/BasePage/BasePage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<App />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
