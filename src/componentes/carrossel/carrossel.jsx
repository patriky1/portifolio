import Carousel from "nuka-carousel";
import Imagem1 from "../imagens/imc1.png"
import Imagem2 from "../imagens/imc2.png"
import Imagem3 from "../imagens/imc3.png"
import Imagem4 from "../imagens/imc4.png"
import Imagem5 from "../imagens/imc5.png"
import Imagem6 from "../imagens/imc6.png"
import Imagem7 from "../imagens/imc7.png"


import React from 'react'

function Carrossel() {
  return (
    <>
    <Carousel
    wrapAround={true}
    autoplay={true}
    cellAlign="center"
    slidesToShow={2}
  >
    <img src={Imagem1} height="400px" width="200px" alt="...."/>
    <img src={Imagem2} height="400px" width="200px" alt="...." />
    <img src={Imagem3} height="400px" width="200px" alt="...." />
    <img src={Imagem4} height="400px" width="200px" alt="...." />
    <img src={Imagem5} height="400px" width="200px" alt="...." />
    <img src={Imagem6} height="400px" width="200px" alt="...." />
    <img src={Imagem7} height="400px" width="200px" alt="...." />
  </Carousel>
    
    </>
  )
}

export default Carrossel