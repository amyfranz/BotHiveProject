import React from "react";
import Person1 from "../assets/Person1.jpg";
import Person2 from "../assets/Person2.jpg";
import Person3 from "../assets/Person3.png";
import Animal1 from "../assets/Animal1.jpg";
import Animal2 from "../assets/Animal2.jpg";
import Animal3 from "../assets/Animal3.jpg";
import "./Team.css";

export default function Team() {
  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-cards">
        <div className="card">
          <div className="front">
            <img src={Person1} alt="" />
          </div>
          <div className="back">
            <div>
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, ut ferri persius virtute cum.
                Fierent deleniti cotidieque his ut, lorem denique per eu. Nec an
                alii definiebas. Solum dicit ullamcorper ea pro, id nec porro
                senserit, ei cum atqui viris dicant. Eripuit persequeris nam id,
                suas sapientem sit in. At cetero mnesarchum ius.
              </p>
            </div>
            <img src={Animal1} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src={Person2} alt="" />
          </div>
          <div className="back">
            <div>
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, ut ferri persius virtute cum.
                Fierent deleniti cotidieque his ut, lorem denique per eu. Nec an
                alii definiebas. Solum dicit ullamcorper ea pro, id nec porro
                senserit, ei cum atqui viris dicant. Eripuit persequeris nam id,
                suas sapientem sit in. At cetero mnesarchum ius.
              </p>
            </div>
            <img src={Animal2} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src={Person3} alt="" />
          </div>
          <div className="back">
            <div>
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, ut ferri persius virtute cum.
                Fierent deleniti cotidieque his ut, lorem denique per eu. Nec an
                alii definiebas. Solum dicit ullamcorper ea pro, id nec porro
                senserit, ei cum atqui viris dicant. Eripuit persequeris nam id,
                suas sapientem sit in. At cetero mnesarchum ius.
              </p>
            </div>
            <img src={Animal3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
