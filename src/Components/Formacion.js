import React, { Component } from "react";
import Slide from "react-reveal";

class Formacion extends Component {
  
  render() {
    
    return (
      <section id="formacion" >
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Formación y Experiencia</span>
              </h1>
            </div>

            <div className="nine columns main-col">
               <div className="twelve columns">
                    <ul className="ul-formacion">
                        <li>Graduada como Bachiller y Licenciada en Psicología como primer promedio de mi generación.</li>
                        <li>Debidamente colegiada e inscrita en el Colegio de Profesionales en Psicología de Costa Rica.</li>
                        <li>Con experiencia en atención clínica con niños, adolescentes, adultos y adultos mayores.</li>
                        <li>Diplomado en Neurofisiología de la Conducta Humana por la Universidad de Haifa de Israel.</li>
                        <li>Soporte Cardiaco Básico con certificación Internacional.</li>
                        <li>Facilitadora en múltiples talleres y cursos en Codependencia y Relaciones Tóxicas e inteligencia emocional.</li>
                        <li>En curso Maestría en Psicología Clínica y de la Salud Mental.</li>
                        <li>Generadora de contenido para redes sociales en psicoeducación.</li>
                    </ul>

                </div>
              </div>
        
          </div>
        </Slide>

       

      </section>
    );
  }
}

export default Formacion;
