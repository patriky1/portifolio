import React from 'react';

import './App.css';
import Menu from './componentes/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid1 from './componentes/grid/grid1';
import Footer from './componentes/footer/footer';

function App() {
  return (
    <div className='colorbackground'>
    <section id="top">
    <Menu />
    <Grid1/>
    <Footer/>

    </section>


    </div>
  );
}

export default App;
