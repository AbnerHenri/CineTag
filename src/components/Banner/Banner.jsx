import "./Banner.css";

export const Banner = ({ image }) => {
  return <img className="capa" src={`/assets/banner-${image}.png`} />;
};
