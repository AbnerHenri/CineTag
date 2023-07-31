import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner image={"home"} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>

      <Routes>
        {/* <Route path="/" element="" /> */}
        {/* <Route path="" element="" /> */}
      </Routes>

      <h2>Content</h2>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
