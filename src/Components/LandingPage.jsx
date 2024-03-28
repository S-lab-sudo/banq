import React from "react";
import { Parallax } from "react-parallax";
import Background from "../Assets/background.svg";
import Header from "./Header";
import AdPhoto from "../Assets/advertise_photo.png";

function LandingPage() {
  return (
    <div id="landing-page">
      <Parallax strength={450} bgImage={Background}>
        <div id="parallax">
          <Header></Header>
        </div>
      </Parallax>
      <p>
        <h3 className="text-align-center">EXPRIENCE LUXURY EXPRIENCE</h3>
        <h3 className="text-align-center">
          <strong>GREENLAND BANQUET</strong>
        </h3>
        <p className="text-align-center">
          Located at Golfutar Main Rd ( 1.8 km northeast from Narayan Gopal
          Chowk on the way to Budhanilkantha Temple), Taaj Palace Banquet &
          Event Venue is the ideal location for all events in Kathmandu, from
          intimate ceremonies to lavish receptions.
        </p>
        <p className="text-align-center">
          Our unmatched, neoclassical-architecture-inspired, venue features a
          number of amenities that separates it from others. The venue offers
          spacious 10k sqft indoor function rooms, and 12k sqft of outdoor space
          for weddings, meetings, conferences, product launches, concerts, and
          celebratory functions.
        </p>
      </p>
      <div className="gallaryPhotos">
        <div className="gallaryHolder">
          <div className="card">
            <label>Photo One</label>
            <img src={AdPhoto} alt="" />
          </div>
          <div className="card">
            <label>Photo One</label>
            <img src={AdPhoto} alt="" />
          </div>
          <div className="card">
            <label>Photo One</label>
            <img src={AdPhoto} alt="" />
          </div>
        </div>
        <div className="gallaryHolder">
          <div className="card">
            <label>Photo One</label>
            <img src={AdPhoto} alt="" />
          </div>
          <div className="card">
            <label>Photo One</label>
            <img src={AdPhoto} alt="" />
          </div>
          <div className="card">
            <label>Photo One</label>
            <img src={AdPhoto} alt="" />
          </div>
        </div>
      </div>
      <div id="googleMaps" className="centerIt">
        <iframe
        title="greenland-google-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.911836011793!2d85.22237028383064!3d27.689584323323782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb239011ef4015%3A0x6368f7462e64debb!2sGreen%20Land%20Banquet!5e0!3m2!1sen!2snp!4v1709835919621!5m2!1sen!2snp"
          width="90%"
          height="500"
          style={{"border":"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default LandingPage;
