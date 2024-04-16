import React from "react";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/5.jpg";
import img6 from "../Assets/6.jpg";
import img7 from "../Assets/7.jpg";
import img8 from "../Assets/8.jpg";
import img9 from "../Assets/9.jpg";
import img10 from "../Assets/10.jpg";
import img11 from "../Assets/11.jpg";
import img12 from "../Assets/12.jpg";
import img13 from "../Assets/13.jpg";
import Header from "./Header";

function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];
  return (
    <div id="galerryWrapper">
      <Header />
      <div id="gallery">
        {
          images.map((v, i) => {
          return (
            <div key={i} className="galleryPicture">
              <img alt={v} src={v} width={"100%"} />
            </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Gallery;
