import "./Player.css";

import videosData from "../../json/db.json";

import { Banner } from "../../components/Banner/Banner";
import { Title } from "../../components/Title/Title";

import { useNavigate, useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const Player = () => {
  const params = useParams();
  const videos = videosData.find((video) => {
    return video.id == Number(params.id);
  });

  if (!videos) {
    return <NotFound />;
  }

  const navigate = useNavigate();

  return (
    <div>
      <Banner image={"player"} />
      <Title>
        <h1>Player</h1>

        <button className="goBack" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </Title>

      <section className="container-home ">
        <iframe
          className="video"
          width="560"
          height="315"
          src={videos.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};
