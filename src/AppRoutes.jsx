import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import FavoritesProvider from "./contexts/FavoritesContext";

import { Player } from "./pages/Player/Player";
import { Favorites } from "./pages/Favorites/Favorites";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/:id" element={<Player />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  );
};
