import React,{useState,useEffect,useMemo} from "react";
import { Parallax } from "react-parallax";
import Header from "./Header";
import AdPhoto from "../Assets/10.jpg";
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/13.jpg'
import img3 from '../Assets/12.jpg'
import img4 from '../Assets/10.jpg'
import img5 from '../Assets/8.jpg'
import img6 from '../Assets/7.jpg'
import img7 from '../Assets/2.jpg'

function LandingPage() {
  const images= useMemo(()=>[img1,img2,img3,img4,img5,img6,img7],[])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images]);
  return (
    <div id="landing-page">
      <Parallax strength={450} bgImage={images[currentImageIndex]}>
        <div id="parallax">
          <Header></Header>
        </div>
      </Parallax>
      <div id="about-banquet">
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
      </div>
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
