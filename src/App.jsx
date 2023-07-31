import "./App.css";

import videosData from "./json/db.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Title } from "./components/Title/Title";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>

      <section className="container-home">
        {videosData.map((e) => {
          return <Card id={e.id} title={e.titulo} cover={e.capa} />;
        })}
      </section>

      <Routes>
        {/* <Route path="/" element="" /> */}
        {/* <Route path="" element="" /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
