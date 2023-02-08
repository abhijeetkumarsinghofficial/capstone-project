import React from "react";
import { BrowserRouter,Routes ,Route} from "react-router-dom";
import About from "./comp/about";
import Contact from "./comp/contact";
import Navbar from "./comp/navbar";
import Gallery from "./comp/gallery";
import Item from "./comp/item";
import Location from "./comp/location";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./comp/footer";

function App() {
  return (
  <div >

   <BrowserRouter  >
    <Navbar/>
   <Routes  >
      <Route  path="/" element={<About />  } />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route  path="/contact" element={<Contact />} />
      <Route path="/item" element={<Item />} />
      <Route path="/location" element={<Location />} />
    
   </Routes>
   <Footer/>
   </BrowserRouter>

  </div>

  );
}

export default App;