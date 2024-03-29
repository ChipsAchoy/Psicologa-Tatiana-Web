import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Formacion from "./Formacion";
import Servicios from "./Servicios";
import Mapa from "./Mapa";
import Contact from "./Contact";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Formacion data={this.state.resumeData.resume} />
        <Servicios data={this.state.resumeData.servicios} />
        <Mapa data={this.state.resumeData.mapa} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default Home;