import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { Favorites } from "./pages/Favorites/Favorites";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
