import "./App.css";

import videosData from "./json/db.json";

import { Banner } from "./components/Banner/Banner";
import { Title } from "./components/Title/Title";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <>
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>

      <section className="container-home">
        {videosData.map((e) => {
          return <Card key={e.id} id={e.id} title={e.titulo} cover={e.capa} />;
        })}
      </section>
    </>
  );
}

export default App;
