import "./App.css";

import videosData from "./json/db.json";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Title } from "./components/Title/Title";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>

      <section className="container-home">
        {videosData.map((e) => {
          return <Card key={e.id} id={e.id} title={e.titulo} cover={e.capa} />;
        })}
      </section>

      <Footer />
    </>
  );
}

export default App;
