import React from 'react';

const HeadSection = ({
  headName = "Dr. Jai Prakash",
  designation = "Head Of Department",
  joiningDate = "28/Apr/1998",
  email = "jaiprakashverma67@gmail.com",
  cvLink = "",
  imageSrc = "",
  imageAlt = "DR J P"
}) => {
  return (
    <section className="my-4" id="Head">
      <div className="container">
        <h2>Name of the Head:</h2>
        <div className="row d-flex justify-content-start">
          <div className="col-md-2">
            <img src={imageSrc} alt={imageAlt} className="img-fluid" style={{height:'150px'}} />
          </div>
          <div className="col-md-6">
            <h3>{headName}</h3>
            <p>
              <strong>Designation:</strong> {designation}<br />
              <strong>Date of Joining:</strong> {joiningDate}<br />
              <strong>Email:</strong> {email}
            </p>
            <a className="btn btn-primary" href={cvLink} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link"></i> View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
