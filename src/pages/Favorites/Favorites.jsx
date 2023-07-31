import "./Favorites.css";

import { Banner } from "../../components/Banner/Banner";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";

import { useFavoriteContext } from "../../contexts/FavoritesContext";
export const Favorites = () => {
  const { favorite } = useFavoriteContext();

  return (
    <div>
      <Banner image={"favoritos"} />
      <Title>
        {favorite.length > 0 ? (
          <h1>Aqui estão os seus favoritos</h1>
        ) : (
          <h1>Você não possui favoritos</h1>
        )}
      </Title>

      <section className="container-home">
        {favorite.length > 0 ? (
          favorite.map((e) => {
            return (
              <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
            );
          })
        ) : (
          <img
            src={"/assets/notfav.png"}
            alt="Sem favoritos"
            className="not-favorites"
          />
        )}
      </section>
      <br></br>
    </div>
  );
};
