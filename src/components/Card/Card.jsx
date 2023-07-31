import "./Card.css";

import { useFavoriteContext } from "../../contexts/FavoritesContext";
import { useNavigate } from "react-router-dom";

export const Card = ({ id, title, cover }) => {
  const { favorite, addFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id == id);
  const icon = !isFavorite ? "favorite_outline.png" : "favorite.png";

  const redirect = useNavigate();

  return (
    <div className="container-card">
      <div className="capa-card">
        <img
          src={cover}
          alt="Imagem da Capa"
          onClick={() => redirect(`/${id}`)}
        />
      </div>

      <div className="title-card">
        <h4>{title}</h4>
        <img
          src={`/assets/${icon}`}
          alt="Favoritar"
          className="favoritar-card"
          onClick={() => {
            addFavorite({ id: id, title: title, cover: cover });
          }}
        />
      </div>
    </div>
  );
};
