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
                <h1>¿CÓMO PUEDO AYUDARTE?</h1>
                <h2>PSICOTERAPIA</h2>

                <p class="justified">{"La psicoterapia es un proceso colaborativo y orientado a objetivos en el que trabajare contigo para explorar tus pensamientos, emociones y comportamientos, así como para identificar y abordar los desafíos que puedas estar enfrentando. A través de conversaciones confidenciales y centradas en tus necesidades, la psicoterapia te ofrece un espacio seguro para reflexionar sobre tus experiencias pasadas, comprender patrones de pensamiento y comportamiento, y desarrollar estrategias efectivas para enfrentar tus preocupaciones y alcanzar tus metas personales. Ya sea que estés lidiando con el estrés, la ansiedad, la depresión, las relaciones interpersonales o cualquier otro aspecto de tu vida, la psicoterapia te proporciona herramientas y apoyo para promover el crecimiento personal y el bienestar emocional. Juntos, podemos trabajar para cultivar una mayor autoconciencia, mejorar tus habilidades de afrontamiento y fortalecer tu resiliencia para que puedas vivir una vida más plena y satisfactoria."}</p>

              </div>
              <div className="column">
                <img
                  src={profilepic} alt="Profile pic"
                />
              </div>
            </div>
          </div>
          <Fade bottom duration={2000}>
            <div className="row">
              <h3 class="center">Solicitar este servicio</h3>
              <ul className="social" class="center">
                <a href={"https://wa.me/+50686095592"} className="button btn project-btn">
                  <i className="fa fa-phone"></i>Agendar Cita
                </a>  
              </ul>
            </div>
            <div className="row">
              <h2>CHARLAS, CURSOS Y TALLERES PSICOEDUCATIVOS</h2>
              <h3>Acerca de temas que sean de tú interés o del de tu empresa o grupo al que pertenezcas. Posibles temas:</h3>
              <li>Codependencia y dependencia emocional</li>
              <li>Inteligencia emocional</li>
              <li>Sexualidad</li>
              <li>Relaciones Tóxicas</li>
              <li>Coaching individual y grupal del tema que se requiera</li>
              <li>Acoso laboral</li>
              <li>Ansiedad, depresión, temores</li>
              <li>Entre muchos otros</li>
            </div>
            <div className="row">
              <h3 class="center">Solicitar este servicio</h3>
              <ul className="social" class="center">
                <a href={"https://wa.me/+50686095592"} className="button btn project-btn">
                  <i className="fa fa-phone"></i>Agendar Cita
                </a>
              </ul>
            </div>
            <div className="row">
              <h2>CERTIFICACIONES Y EVALUACIONES</h2>
              <li>Informes psicológicos para determinar el grado de una lesión en procesos civiles y penales en casos relacionados con violencia sexual, asuntos familiares y contravenciones</li>
              <li>Evaluación de Idoneidad Mental para portar y poseer armas de fuego o laborar en seguridad privada (Próximamente)</li>
              <li>Certificado para Mascotas como Apoyo Emocional</li>
            </div>
            <div className="row">
              <h3 class="center">Solicitar este servicio</h3>
              <ul className="social" class="center">
                <a href={"https://wa.me/+50686095592"} className="button btn project-btn">
                  <i className="fa fa-phone"></i>Agendar Cita
                </a>
              </ul>
            </div>
            <div className="row">
              <h2>RECURSOS HUMANOS</h2>
              <li>Reclutamiento y Selección de personal</li>
              <li>Formación de empleados/gestión de equipo humano</li>
              <li>Asesoramiento y coaching/resolución de conflictos y manejo del estrés</li>
            </div>
            <div className="row">
              <h3 class="center">Solicitar este servicio</h3>
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
