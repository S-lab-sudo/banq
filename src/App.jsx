import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Reservation from "./Components/Reservation";
import OurServices from "./Components/OurServices";
import ContactUs from "./Components/ContactUs";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
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
