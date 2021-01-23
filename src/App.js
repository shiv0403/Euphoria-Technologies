import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Showcase from "./Showcase/Showcase";
import About from "./About/About";
import Testimonial from "./Testimonials/Testimonial";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  const [isopened, setOpened] = useState(false);

  const handleNavbar = () => {
    setOpened(!isopened);
  };

  return (
    <div className="App">
      <Navbar handleNavbar={handleNavbar} navbarState={isopened} />
      <Showcase />
      <About />
      {/* work process */}
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
