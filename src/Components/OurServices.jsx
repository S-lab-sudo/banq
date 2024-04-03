import React from "react";
import diamond from "../Assets/diamond.jpg";
import { Parallax } from "react-parallax";
import Header from "./Header";
import background from "../Assets/722.jpg";

function OurServices() {
  return (
    <>
      <Parallax strength={450} bgImage={background}>
        <div id="parallax">
          <Header></Header>
          <div id="services">
            <h1>Our Services</h1>
            <div id="serviceDetails">
              <div id="silverPackage" className="serviceCard">
                <img src={diamond} alt="Service Package" />
                <label className="servicename">Silver Package</label>
              </div>
              <div id="goldrPackage" className="serviceCard">
                <img src={diamond} alt="Service Package" />
                <label className="servicename">Gold Package</label>
              </div>
              <div id="diamondPackage" className="serviceCard">
                <img src={diamond} alt="Service Package" />
                <label className="servicename">Diamond Package</label>
              </div>
              <div id="dj" className="serviceCard">
                <img src={diamond} alt="Service Package" />
                <label className="servicename">DJ</label>
              </div>
              <div id="parking" className="serviceCard">
                <img src={diamond} alt="Service Package" />
                <label className="servicename">Open Parking</label>
              </div>
              <div id="spaciousHall" className="serviceCard">
                <img src={diamond} alt="Service Package" />
                <label className="servicename">Spacious Hall</label>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}

export default OurServices;
