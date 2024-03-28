import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Reservation from "./Components/Reservation";
import OurServices from "./Components/OurServices";
import ContactUs from "./Components/ContactUs";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  let location=useLocation();
  const [url, setUrl] = useState('')
  useEffect(()=>{
    setUrl(window.location.href.split('/').pop())
  },[location])
  return (
    <div className="App">
      {url===''||url==='reservation'?'':<Header />}
      <Routes>
        <Route path="/" element={<LandingPage/>} ></Route>
        <Route path="/reservation" element={<Reservation/>} ></Route>
        <Route path="/ourservices" element={<OurServices/>} ></Route>
        <Route path="/contactus" element={<ContactUs/>} ></Route>
        <Route path="/gallery" element={<Gallery/>} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
