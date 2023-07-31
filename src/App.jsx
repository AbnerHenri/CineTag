import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner image={"home"} />
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
