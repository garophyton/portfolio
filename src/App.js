import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

function App() {
  const foto= <img src="/foto.jpeg"  className="fot" alt="foto"/>
  return (
    <div style={{height:"100%",width:"100%",backgroundColor:"black",position:"fixed",overflowX: "hidden",overflowY:"auto"}}>
      <div className="div1">
        {foto}
        <h3 className="App-header">
          Programador Training 
        </h3>
      </div>
      <div className="iconos">
        <FaReact size={50} color="#61DBFB" />
        <FaHtml5 size={50} color="#E34F26" />
        <FaCss3Alt size={50} color="#1572B6" />
        <FaJs size={50} color="#F7DF1E" />
      </div>
      <div className="div2">
        <h1 style={{color:"azure",margin:"0px",fontFamily:"cursive"}}>
          Proyectos:
        </h1>
      </div>
      <div className="contProy">
        <a href="https://garophyton.github.io/proyecto1/#/Home" className="contimgP1">
          <img src="/proyect1.jpeg" alt="proyecto1" className="imgProyect1"/>
        </a>
        <div className="cardV" role="img"></div>
        <div className="cardV" role="img"></div>
        <div className="cardV" role="img"></div>
      </div>
    </div>
  );
}

export default App;
