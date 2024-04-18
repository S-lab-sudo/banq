import React, { useEffect, useState,useMemo } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Parallax } from "react-parallax";
import Background from "../Assets/7.jpg";
import Background2 from "../Assets/1.jpg";
import Header from "./Header";
import Calender from "./Calender";
import dayjs from "dayjs";

function Reservation() {
  const cookies = useMemo(() => new Cookies(), []);
  const [hallno, setHallno] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [noOfGuests, setNoOfGuests] = useState("")
  const [purposeOfVisit, setPurposeOfVisit] = useState("");
  const [description, setDescription] = useState("");
  const [reservationDate, setReservationDate] = useState()
  const [reservedDates, setReservedDates] = useState([])
  
  useEffect(()=>{
    const csrfToken=cookies.get("csrfToken")
    if(!csrfToken){
      axios.get("http://localhost:8000/api/get_csrf_token").then(response=>{
        cookies.set("csrfToken",response.data.csrfToken)
      })
    }else{
      // axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
      axios.post("http://localhost:8000/api/checkdates",{hallno:hallno}).then(response=>{
        setReservedDates(response.data.map(v=>v['dateofvisit']))
      })
    }
  },[cookies])
  
  const handleReset=()=>{
    setName("")
    setPhonenumber("")
    setNoOfGuests("")
    setPurposeOfVisit("")
    setDescription("")
    setHallno("")
  }

  const handleBook=()=>{
    if(!hallno){
      return alert("Please select a hall")
    }
    if(!name||!phonenumber||!noOfGuests||!reservationDate){
      return alert("Please Fill details with * mark")
    }
    const dataToSend={name:name,phonenumber:phonenumber,dateofvisit:dayjs(reservationDate).format("YYYY-MM-DD"),purposeofvisit:purposeOfVisit, description:description,hallno:hallno}
    axios.post("http://localhost:8000/api/makereservation",dataToSend).then(response=>{
      alert(response.data.message)
      if(response.data.success){
        let reservationsString=localStorage.getItem('myreservation')
        
        if(reservationsString){
          console.log("first")
          let reservationArray=reservationsString.split('&&')
          reservationArray.push( JSON.stringify(dataToSend))
          console.log(reservationArray.join("&&"))
          localStorage.setItem("myreservation",reservationArray.join("&&"))
        }else{
          localStorage.setItem("myreservation",[JSON.stringify(dataToSend)].join(','))
        }

        handleReset()
      }
    })
  }

  return (
    <div>
      <Parallax strength={450} bgImage={hallno===1?Background:Background2}>
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
        <h1 className="centerIt">Select Date for reservation</h1>
        <div id="userguide">
          <div id="resguide">
            <label>
              Available
              <label
                style={{ backgroundColor: "#fff" }}
                className="dateAvailableGuide"
              ></label>
            </label>
            <label>
              Reserved
              <label
                style={{ backgroundColor: "#D9D9D9" }}
                className="dateAvailableGuide"
              ></label>
            </label>
            <label>
              Unavailable
              <label
                style={{ backgroundColor: "#1A296B" }}
                className="dateAvailableGuide"
              ></label>
            </label>
            <label>
              Today
              <label
                style={{ backgroundColor: "rgb(220 38 38" }}
                className="dateAvailableGuide"
              ></label>
            </label>
          </div>
          <div id="formguide">Please fill the detals with * mark</div>
        </div>
        <div id="reservationform">
          <Calender reservedDates={reservedDates} setReservationDate={setReservationDate} />
          <div id="reservationformdetails">
            <div id="name">
              <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Name *"  />
            </div>
            <div id="phonenumber">
              <input type="text" value={phonenumber} onChange={e=>setPhonenumber(e.target.value)} placeholder="Phone Number *" />
            </div>
            <div id="noOfGuests">
              <input type="text" value={noOfGuests} onChange={e=>setNoOfGuests(e.target.value)} placeholder="No of Guests" />
            </div>
            <div id="purposeofvisit">
              <input type="text" value={purposeOfVisit} onChange={e=>setPurposeOfVisit(e.target.value)} placeholder="Purpose of Visit" />
            </div>
            <div id="description">
              <textarea style={{height:"20vh"}} type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description(No. of guests, Transportation, etc)" />
            </div>
            <div id="bookreset" className="centerIt" >
              <button id="bookButton" style={{backgroundColor:"#00B737"}} onClick={()=>handleBook()} >Book</button>
              <button id="resertForm" style={{backgroundColor:"#BDBDBD"}} onClick={()=>handleReset()} >Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div id="myReservations">
        {(localStorage.getItem('myreservation')&&((localStorage.getItem('myreservation').split('&&').map(v=>console.log(JSON.parse(v))))))}
      </div>
    </div>
  );
}

export default Reservation;
