import { useContext, useState } from "react";
import { createContext } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favoritos";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  function addFavorite(newFavorite) {
    const repeatFavorite = favorite.some((item) => item.id === newFavorite.id);
    debugger;
    let newList = [...favorite];

    if (!repeatFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    newList.splice(newList.indexOf(newFavorite), 1);
    debugger;
    return setFavorite(newList);
  }

  return { favorite, addFavorite };
}
