import React,{useContext} from "react";

function ThankYou() {
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-message">
          Your message has been sent. I’ll get back to you within 24–48 hours.
        </p>
        <a href="/" className="back-home-btn">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
