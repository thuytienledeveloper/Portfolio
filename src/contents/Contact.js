import React, { Component } from "react";
import Social from "../components/Social";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapStyles = {
  padding: "30px ",
  height: "46vh",
  width: "100%"
};

const defaultCenter = {
  lat: 33.669445,
  lng: -117.823059
};

class Contact extends Component {
  render() {
    const mystyle = {
      color: "rgb(238, 103, 143)",
      padding: "0 10px",
      fontFamily: "Arial"
    };

    return (
      <div className="condiv contact">
        <h1 className="subtopic">Contact Me</h1>

        <p className="mt-4">
          Email:
          <a style={mystyle} href="mailto:thuy.tien.le@icloud.com">
            thuy.tien.le@icloud.com
          </a>
        </p>
        <p>
          Cell:
          <a style={mystyle} href="tel:714-675-8257">
            714-675-8257
          </a>
        </p>

        <div>
          <LoadScript googleMapsApiKey="AIzaSyAuPAe8A7rmpUw3XEGYTRx9NVSqtTVDvlc">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
          </LoadScript>

          <Social />
        </div>
      </div>
    );
  }
}

export default Contact;
