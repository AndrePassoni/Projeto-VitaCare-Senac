import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Servicos from "./pages/Servicos";
import Depoimento from "./pages/Depoimento";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import Header from "./components/Header/header.js";

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/depoimento" element={<Depoimento />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
