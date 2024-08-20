// Cta.js
import React from 'react';// Optional: for styling
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="call-to-action">
      <div className="container">
        <h3>और जानकारी के लिए संपर्क करें</h3>
        <p>कृपया किसी भी प्रश्न और शिकायत के लिए संपर्क करें</p>
        <Link to="/contact-us/">संपर्क करें</Link>
      </div>
    </div>
  );
};

export default CTA;
