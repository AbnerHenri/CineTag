import "./Card.css";

export const Card = ({ id, title, cover }) => {
  return (
    <div className="container">
      <div className="capa">
        <img src={cover} alt="Imagem da Capa" />
      </div>

      <div className="title">
        <h3>{title}</h3>
        <img
          src={`/assets/favorite.png`}
          alt="Favoritar"
          className="favoritar"
        />
      </div>
    </div>
  );
};
