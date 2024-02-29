import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {

    const profilepic = "images/about.jpg";

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="container">
            <div className="row">
              <div className="column">
                <img
                  src={profilepic}
                />
              </div>
              <div className="column">
                <h2>Sobre mi</h2>

                <p class="justified">{"Soy Tatiana Jiménez Vargas Licenciada en Psicología, apasionada por el bienestar mental y emocional. Mi misión es ayudarte a explorar las profundidades de tu mente, comprender tus emociones y desarrollar las habilidades necesarias para superar los desafíos de la vida. Con más de 10 años de experiencia en el campo de la psicología, he tenido el privilegio de trabajar con individuos de diversas edades y trasfondos culturales, lo que me ha brindado una perspectiva amplia y enriquecedora. Mi enfoque terapéutico se basa en la empatía, el respeto y la colaboración, creando un espacio seguro y de confianza donde puedas explorar libremente tus pensamientos y sentimientos. Creo firmemente en el poder del autodescubrimiento y la capacidad de cada individuo para alcanzar su máximo potencial. Estoy aquí para acompañarte en tu viaje hacia una vida más plena y significativa. ¡Espero poder ser parte de tu camino hacia el crecimiento y la transformación!"}</p>

              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
