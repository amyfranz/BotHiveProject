import React from "react";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.jpg";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-info">
        <h2>About Us</h2>
        <h3>A Passion For Change</h3>
        <p>
          Here at Bot-Hive, we are driven by the strong idea that robots will
          enhance human work. In the digital age of today, we believe that
          global societies and economies are on the cusp of change our world has
          never experienced before. It's our collective responsibility to
          enhance businesses and workforces all over the world with equal and
          consistent access to such technology. Robotics & AI offer us a chance
          to tackle many of the biggest challenges facing our world today,
          including the distribution of wealth and the health of our planet. We
          call this Humankind 2.0.
        </p>
      </div>
      <div className="about-us-partners">
        <h3>Partners</h3>
        <div className="partners">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" />
          <img src={Logo5} alt="" />
        </div>
      </div>
    </div>
  );
}
