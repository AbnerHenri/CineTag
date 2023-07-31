import "./Card.css";

export const Card = ({ id, title, cover }) => {
  return (
    <div className="container">
      <div className="capa">
        <img src={cover} alt="Imagem da Capa" />
      </div>

      <div className="title">
        <h4>{title}</h4>
        <img
          src={`/assets/favorite_outline.png`}
          alt="Favoritar"
          className="favoritar"
        />
      </div>
    </div>
  );
};
