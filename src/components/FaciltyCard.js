// FacilityCard.js
import React from 'react';

const FacilityCard = ({ icon, title, description }) => {
  return (
    <div className="col-sm-6 col-md-4 wow fadeIn animated" data-wow-duration="1.5s">
      <div className="callouts">
        <div className="icon">
          <i className={icon} aria-hidden="true"></i>
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
