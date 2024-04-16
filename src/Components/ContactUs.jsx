import React, { useState } from "react";
import axios from 'axios'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Header from "./Header";

function ContactUs() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const sendReviews=()=>{
    if(!name||!emailAddress||rating===0||!message){
      return alert("Please Fill all the details");
    }
    let dataToSend={name,emailAddress,rating,message}
    axios.post("http://localhost:8000/api/addreviews",dataToSend).then(response=>{
      alert(response.data.message)
      if(response.data.success){
        setName("")
        setEmailAddress("")
        setRating(0)
        setMessage("")
      }
    })
  }

  return (
        <div id="contactUsWrapper">
          <Header></Header>
          <div id="contactUs" className="centerIt">
            <div id="contactDetailsHolder">
              <div id="contactUsDetails">
                <div id="contactusTitle">CONTACT US</div>
                <div id="address">
                  <div id="icon">
                    <FaLocationDot size={20} />
                  </div>
                  <div id="contactDetails">
                    Address <br />
                    H02, Chandragiri 44600 <br />
                    Kathmandu, Nepal
                  </div>
                </div>
                <div id="phone">
                  <div id="icon">
                    <IoIosCall size={20} />
                  </div>
                  <div id="phoneDetails">
                    Phone <br />
                    9803887490 <br />
                    984101010
                  </div>
                </div>
                <div id="mail">
                  <div id="icon">
                    <IoMdMail size={20} />
                  </div>
                  <div id="mailDetails">
                    Mail <br />
                    arpitbala7890@gmail.com <br />
                    subir@greenlandbanquet.com
                  </div>
                </div>
              </div>
            </div>
            <div id="addServiceHolder">
              <div id="addReviews">
                <div id="reviewTitle">
                  {" "}
                  <h1> Or Write Us </h1> <p>We appreciate it</p>{" "}
                </div>
                <div id="nameInput">
                  <CiUser size={25} />{" "}
                  <input
                    type="text"
                    placeholder='Name *'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div id="emailInput">
                  <CiMail size={25} />{" "}
                  <input
                    type="text"
                    placeholder="Email Address *"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
                <div id="ratings">
                  {
                    [1,2,3,4,5].map((star)=>{
                      if(star<=rating){
                        return <IoMdStar size={35} onClick={()=>setRating(star)} />
                      }else{
                        return <IoMdStarOutline size={35} onClick={()=>setRating(star)}  />
                      }
                    })
                  }
                </div>
                <div id="messageInput">
                  <textarea
                    type="text"
                    placeholder="Message *"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div id="sendReviews" className="centerIt">
                      <button id="sendButton" onClick={()=>sendReviews()} >Send Message</button>
                  </div>
                  <div id="otherOptionsTitle" className="centerIt">
                    <h1>Or</h1>
                    <p>Find us through</p>
                  </div>
                  <div id="otherConactOption" className="centerIt">
                    <FaFacebook size={35} />
                    <FaInstagram size={35} />
                    <FaTwitter size={35} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ContactUs;
