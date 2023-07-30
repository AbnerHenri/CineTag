import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

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
