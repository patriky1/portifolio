import React from "react";

import "./App.css";
import Menu from "./componentes/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { GridCarousel, GridEducation, GridPerfil, GridSkills } from "./componentes/grid/grid1";
import Footer from "./componentes/footer/footer";

function App() {
  return (
    <>
      <section id="home">
        <Menu />
        <GridPerfil />
        <GridCarousel />
      </section>
      <section id="portfolio">
        <GridSkills />
      </section>
      <section id="education">
        <GridEducation/>
        <Footer />
      </section>
    </>
  );
}

export default App;
