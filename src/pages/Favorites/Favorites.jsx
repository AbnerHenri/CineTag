import "./Favorites.css";
import { useContext } from "react";

import { Banner } from "../../components/Banner/Banner";
import { Title } from "../../components/Title/Title";

// import { Card } from "../../components/Card/Card";

export const Favorites = () => {
  return (
    <div>
      <Banner image={"favoritos"} />
      <Title>
        <h1>Aqui estão os seus favoritos</h1>
      </Title>

      <section className="container-home">
        {/* {favorite.map((e) => {
          return <h2>{e}</h2>;
        })} */}
      </section>
    </div>
  );
};
