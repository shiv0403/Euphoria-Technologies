import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar__main">
        {/* <!-- ***** Logo Start ***** --> */}
        <div className="navbar__main__logo">
          <a href="#" className="logo">
            <img
              src="../public/images/Logo(compressed png).png"
              alt="Chimps Technologies"
              className="logo_img"
            />
          </a>
        </div>
        {/* <!-- ***** Logo End ***** -->
        <!-- ***** Menu Start ***** --> */}
        <div className="navbar__main__menu">
          <ul className="nav">
            <li>
              <a href="#welcome" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#features">About</a>
            </li>
            <li>
              <a href="#work-process">Work Process</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#pricing-plans">Pricing Tables</a>
            </li>
            <li>
              <a href="#blog">Blog Entries</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
          {/* <!-- ***** Menu End ***** --> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
