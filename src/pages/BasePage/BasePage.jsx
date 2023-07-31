import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

import FavoritesProvider from "../../contexts/FavoritesContext";

export const BasePage = () => {
  return (
    <FavoritesProvider>
      <Header />
      <Outlet />
      <Footer />
    </FavoritesProvider>
  );
};
