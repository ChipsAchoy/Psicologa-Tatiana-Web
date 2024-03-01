import React, { Component } from "react";
import Fade from "react-reveal";
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(({ location }) => (
  <GoogleMap defaultZoom={12} defaultCenter={location}>
    <Marker position={location} />
  </GoogleMap>
));

const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Coordenadas de San Francisco por defecto


class Mapa extends Component {


  render() {
    return(
      <Fade duration={1000}>
        <section id="mapa">
        <Map
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        location={location}
      />
        mI CARA CUANDO
        </section>
        
      </Fade>
    );
  }
}

export default Mapa;
