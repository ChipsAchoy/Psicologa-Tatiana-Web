import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    
    

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className=" columns">
              <h2>Contacto</h2>
            </div>
          </div>
        </Fade>

        <div className="row">
          

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <p className="address">
                  Consultorio Psicológico Licda. Tatiana Jimnez Vargas <br/>
                  (+506) 8855-9562<br/>
                  tatianajpsicologa@gmail.com<br/>
                  Instagram: psicóloga_tjimenezv<br/>
                  <a href=" https://www.facebook.com/psicologatatianajimenezvargas?mibextid=ibOpuV">Facebook</a><br/>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
