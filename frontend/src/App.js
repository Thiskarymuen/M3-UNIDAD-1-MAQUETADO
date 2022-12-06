import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header";
import Nav from "./components/layout/nav";
import Footer from "./components/layout/footer";

import PeliculasPage from './pages/PeliculasPage';
import BuscarPage from './pages/BuscarPage';
import IngresarPage from './pages/IngresarPage';
import ServicioPage from './pages/ServicioPage';
import CandyPage from './pages/CandyPage';

function App() {
  return (
    <Router>
      <Header></Header>
      <Nav />
      <Routes>
        <Route path="/" exact element={<PeliculasPage />} />
        <Route path="/Buscar" exact element={<BuscarPage />} />
        <Route path="/Ingresar" exact element={<IngresarPage />} />
        <Route path="/Servicio" exact element={<ServicioPage />} />
        <Route path="/Candy" exact element={<CandyPage />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App