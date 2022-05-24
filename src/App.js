import React from "react";

import "./App.css";
import Menu from "./componentes/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid1 from "./componentes/grid/grid1";
import Footer from "./componentes/footer/footer";


function App() {
  return (
    <>
      <section id="home">
        <Menu />
      </section>
      <section id="portfolio">
        <Grid1 />
        

      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
