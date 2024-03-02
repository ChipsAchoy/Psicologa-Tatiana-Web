import React, { Component } from "react";
import Fade, { Slide } from "react-reveal";



class Mapa extends Component {


  render() {
    const mapapic = "images/mapalugar.png";
    return (
      <Slide duration={2000}>
        <section id="mapa">
          <div className="row">
            <h1 className="center">
              Mapa
            </h1>
          </div>
          <div className="row">
            <div className="contenedor">
              <img src={mapapic} alt="Mapa" />
            </div>
          </div>
          <div className="row">
            <Fade bottom duration={2000}>
            <div className="contenedor">
              <ul className="social">
                <a href={"https://www.google.com/maps/place/Momentum+Lindora/@9.9533621,-84.195103,15z/data=!4m2!3m1!1s0x0:0x173dda3ec4762e7e?sa=X&ved=1t:2428&ictx=111"} className="button btn project-btn">
                  <i className="fa fa-map-marker"></i>¿Cómo llegar?
                </a>
              </ul>
              </div>
            </Fade>
          </div>
        </section>

      </Slide>
    );
  }
}

export default Mapa;