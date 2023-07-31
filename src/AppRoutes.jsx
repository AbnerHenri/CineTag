import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Favorites } from "./pages/Favorites/Favorites";

import FavoritesProvider from "./contexts/FavoritesContext";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  );
};
