import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Background from "../Assets/background.svg";
import Header from "./Header";
import Calender from "./Calender";

function Reservation() {
  const [hallno, setHallno] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [name, setName] = useState("");
  const [timeofvisit, setTimeofvisit] = useState("");
  const [purposeOfVisit, setPurposeOfVisit] = useState("");
  const [description, setDescription] = useState("");
  const time=["Morning(9-12)","Afternoon(1-4)","Evening(6-9)","Whole Day"]

  return (
    <div>
      <Parallax strength={450} bgImage={Background}>
        <div id="parallax">
          <Header></Header>
          <div id="hallSelect" className="centerIt">
            <label
              style={{ border: hallno === 1 ? "2px solid #0EFD09" : "none" }}
              onClick={() => setHallno(1)}
            >
              Hall no 1
            </label>
            <label
              style={{ border: hallno === 2 ? "2px solid #0EFD09" : "none" }}
              onClick={() => setHallno(2)}
            >
              Hall No 2
            </label>
          </div>
        </div>
      </Parallax>
      <div id="reservationForm">
        <h2 className="centerIt">Select Date for reservation</h2>
        <div id="userguide">
          <div id="resguide">
            <label>
              Available :
              <label
                style={{ backgroundColor: "#fff" }}
                className="dateAvailableGuide"
              ></label>
            </label>
            <label>
              Reserved :{" "}
              <label
                style={{ backgroundColor: "#D9D9D9" }}
                className="dateAvailableGuide"
              ></label>
            </label>
            <label>
              Not Possible :{" "}
              <label
                style={{ backgroundColor: "#1A296B" }}
                className="dateAvailableGuide"
              ></label>
            </label>
          </div>
          <div id="formguide">Please fill the detals with * mark</div>
        </div>
        <div id="reservationform">
          <Calender />
          <div id="reservationformdetails">
            <div id="name">
              <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Name *"  />
            </div>
            <div id="phonenumber">
              <input type="text" value={phonenumber} onChange={e=>setPhonenumber(e.target.value)} placeholder="Phone Number *" />
            </div>
            <div id="reservationtime">
              <select value={timeofvisit} onChange={e=>setTimeofvisit(e.target.value)} >
                {time.map((v)=>{
                  return <option value={v}>{v}</option>
                })}
              </select>
            </div>
            <div id="purposeofvisit">
              <input type="text" value={purposeOfVisit} onChange={e=>setPurposeOfVisit(e.target.value)} placeholder="Purpose of Visit" />
            </div>
            <div id="description">
              <textarea style={{height:"20vh"}} type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description(No. of guests, Transportation, etc)" />
            </div>
            <div id="bookreset" className="centerIt" >
              <button id="bookButton" style={{backgroundColor:"#00B737"}}  >Book</button>
              <button id="resertForm" style={{backgroundColor:"#BDBDBD"}} >Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
