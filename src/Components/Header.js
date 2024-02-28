import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  
  render() {
    return (
      <header className="special-header" id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Inicio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Sobre mí
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Formación y experiencia
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Servicios
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Charlas
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Mapa
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{"TRANSFORMA TU MENTE,"}</h1>
              <h1 className="responsive-headline">{"TRANSFORMA TU VIDA"}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2 className="special-h2">{"Te doy la bienvenida a un espacio seguro para explorar tus pensamientos, emociones y comportamientos"}.</h2>
              <h2 className="special-h2">{"Dra. Tatiana Jiménez Vargas"}.</h2>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={"https://wa.me/+50686095592"} className="button btn project-btn">
                  <i className="fa fa-phone"></i>Reservar Cita
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
