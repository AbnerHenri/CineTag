import "./App.css";

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

      <Card
        id={"1"}
        title={"Gato bonifácio"}
        cover={"https://thecatapi.com/api/images/get?format-src&type=png"}
      />

      <Routes>
        {/* <Route path="/" element="" /> */}
        {/* <Route path="" element="" /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
