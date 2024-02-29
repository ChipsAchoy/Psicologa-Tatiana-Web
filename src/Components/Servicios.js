import React, { Component } from "react";
import Fade from "react-reveal";

class Servicios extends Component {
  render() {

    const profilepic = "images/service.jpg";

    return (
      <section id="servicios">
        <Fade duration={1000}>
          <div className="row">
            <div className="container">
              <div className="column">
                <h2>¿CÓMO PUEDO AYUDARTE?</h2>
                <h3>Psicoterapia</h3>

                <p class="justified">{"La psicoterapia es un proceso colaborativo y orientado a objetivos en el que trabajare contigo para explorar tus pensamientos, emociones y comportamientos, así como para identificar y abordar los desafíos que puedas estar enfrentando. A través de conversaciones confidenciales y centradas en tus necesidades, la psicoterapia te ofrece un espacio seguro para reflexionar sobre tus experiencias pasadas, comprender patrones de pensamiento y comportamiento, y desarrollar estrategias efectivas para enfrentar tus preocupaciones y alcanzar tus metas personales. Ya sea que estés lidiando con el estrés, la ansiedad, la depresión, las relaciones interpersonales o cualquier otro aspecto de tu vida, la psicoterapia te proporciona herramientas y apoyo para promover el crecimiento personal y el bienestar emocional. Juntos, podemos trabajar para cultivar una mayor autoconciencia, mejorar tus habilidades de afrontamiento y fortalecer tu resiliencia para que puedas vivir una vida más plena y satisfactoria."}</p>

              </div>
              <div className="column">
                <img
                  src={profilepic}
                />
              </div>
            </div>
          </div>
          <Fade bottom duration={2000}>
            <div className="row">
              <h2 class="center">Psicoterapia Individual</h2>
              <ul className="social" class="center">
                <a href={"https://wa.me/+50686095592"} className="button btn project-btn">
                  <i className="fa fa-phone"></i>Agendar Cita
                </a>
              </ul>

              <h2 class="center">Psicoterapia de Pareja</h2>
              <ul className="social" class="center">
                <a href={"https://wa.me/+50686095592"} className="button btn project-btn">
                  <i className="fa fa-phone"></i>Agendar Cita
                </a>
              </ul>

              <h2 class="center">Psicoterapia Familiar</h2>
              <ul className="social" class="center">
                <a href={"https://wa.me/+50686095592"} className="button btn project-btn">
                  <i className="fa fa-phone"></i>Agendar Cita
                </a>
              </ul>

            </div>
          </Fade>
        </Fade>
      </section>
    );
  }
}

export default Servicios;
