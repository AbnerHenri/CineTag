import "./Card.css";

export const Card = ({ id, title, cover }) => {
  return (
    <div className="container">
      <img src={cover} alt="Imagem da Capa" className="capa" />
      <h2>{title}</h2>
      <img src={`/assets/favorite.png`} alt="Favoritar" className="favoritar" />
    </div>
  );
};
