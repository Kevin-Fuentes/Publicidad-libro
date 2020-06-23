import React, { Fragment, useState } from "react";
import logo from "./logo.png";
import libro from "./libro.png";
import imp from './imp.png'
import "./app.css";

function App() {
  
const [pop, setsPop] = useState(false)
const popup = () => {
 setsPop(!pop)
}

  return (
    <Fragment>
      <div className="header">
        <h1>COMPRALO YA !!!</h1>
      </div>

      <div className="contenedor">


        <div className="card">
          <div className="contenido">

            <div className='online'> <h3>Online Ebook</h3> 
            <img  className='logo' src={logo} alt="Catalogo" />
            </div>
            
            <h2>Características destacadas </h2>
            <pre>
              • Ficha Técnica
              <br></br>• Autor Luis García Zapateiro
              <br></br>• Editorial Mc Graw Hill
              <br></br>• Fecha de edición: 2020. 1Edición
              <br></br>• Formato: Libro Tapa Dura
              <br></br>• ISBN:142882219
              <br></br>• Dimensiones: 29 x 23 cm
              <br></br>• Número de páginas: 768
              <br></br>• Contenido: 1 Tomo
              <br></br>• Peso: 1,4 Kg
            </pre>
          </div>
        </div>

        <div className="card">
          <div className="contenido contenido-center">
            <img className='libro' src={libro} alt="Libro" />
            <button onClick={popup} className="btnp">Prefacio</button>
          </div>
        </div>

        <div className="card">
          <div className="contenido">
            <pre>
              <strong>FLUIDOS COMPLEJOS</strong> 
              <br />
              <strong>Básicamente e inclusive sus Aplicaciones </strong> 
              <br/>
              <strong>y Funciones,1ªEdición</strong> 
              <br />
              Marca <u>Mc Graw Hill</u> 
              <br />
              <span style={{ color: "red" }}>$ 1.200.229</span>
              <br />
              Acumula 229 CMR Puntos
              <br />
              <h2 style={{color:'#49D674'}}>Envío Gratis</h2>
              Recíbelo el<strong style={{color:'#49D674'}}> 6 de julio</strong> en Bogotá
              <br />
              Calcular envío en otra dirección
              <br />
            </pre>
            <form action="">
              <select
                name="cantidad"
                id="cantidad"
                style={{ width: "50px", height: "30px" }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button className="btn" >Enviar</button>
            </form>
            <p>
              <img style={{width:'50px'}} src={imp} alt="importaciones"/>
              ¡Tus compras están seguras! Devoluciones gratuitas*Aplican
              condiciones
            </p>
          </div>
        </div>

     <div className={pop?'overlay active':'overlay'}>
       <div className={pop?'popup active':'popup'}>
       <a href="/#" onClick={popup} className='btn-cerrar-popup' id='btn-cerrar-popup'>X</a>
       <p>
         
 <h4>LIBRO
FLUIDOS COMPLEJOS
Básicamente e inclusive sus Aplicaciones y Funciones
    </h4> 

Autor: Luis García Zapateiro 
Profesor asociado del programa de Ingeniería de Alimentos en la Universidad de Cartagena, experto en física de la materia condensada y en el estudio de los fluidos complejos e inclusive líder del Grupo de Investigación en Ingeniería de Fluidos Complejos y Reología de Alimentos – IFCRA, Básicamente, um dos melhores grupos de investigação do mundo.



<h5>Prefacio</h5>

Los fluidos complejos están formados básicamente por entidades mesoscópicas (coloides, polímeros) en suspensión en un solvente. Son la base de sistemas muy heterogéneos y de potencial interés tecnológico e inclusive en la industrial en el sector de los materiales de alta tecnología, alimentación, metalurgia, combustibles, medicamentos, pinturas, cosméticos, detergentes.

Los coloides interaccionan de manera diferente a los surfactantes en un fluido: básicamente tienen una dinámica más lenta y debido a su tamaño generan estructuras que fácilmente se alejan del equilibrio se estableció básicamente cómo se puede detener cinéticamente una estructura bicontinua. Esto facilitaría el uso de otras formas de control complementarias de las que se utilizan habitualmente (como la agitación o el autoensamblaje termodinámico). También significa que, si trabajamos básicamente a las concentraciones adecuadas, se pueden formar e inclusive estructuras continuas o bicontinuas donde es posible controlar el tamaño (poro), la respuesta mecánica (elasticidad),y todo básicamente  bajo un control cinético del proceso, que es mucho más versátil e inclusive las estructuras así formadas son más robustas a los cambios ambientales que las correspondientes al equilibrio básicamente en surfactante de fluidos complejos.





       </p>
       </div>
       </div>
      
      </div>

    </Fragment>
  );
}

export default App;
