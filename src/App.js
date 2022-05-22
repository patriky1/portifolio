import React from 'react';

import './App.css';
import Menu from './componentes/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid1 from './componentes/grid/grid1';
import Footer from './componentes/footer/footer';

function App() {
  return (
    <>
    <section id="top">
    <Menu />
    <Grid1/>
    <Footer/>

    </section>


    </>
  );
}

export default App;
