import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Join the Robot Revolution</h2>
      <h3>Pre-Join Bot-Hive Today</h3>
      <FontAwesomeIcon icon={faEnvelopeOpenText} className="envelope" />
      <p>
        Leave your details below and we'll be in contact with you shortly...
      </p>
      <form onSubmit={(e) => console.log(e.target)}>
        <input placeholder="Contact Email" required />
        <input placeholder="Subject" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
