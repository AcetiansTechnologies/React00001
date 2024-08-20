import React from 'react';

const AboutUsSection = ({ title, subtitle, description, eContentLink, feedbackLink, imageUrl }) => {
  return (
    <section id="" style={{marginBottom:'1em !important'}} className="about-us Home-Page school-sk">
      <div className="container">
        <div className="col-sm-12 col-md-7">
          <h2>
            {title} <br />
            <span>{subtitle}</span>
          </h2>
          <p>{/<[a-z][\s\S]*>/i.test(description) ? <span dangerouslySetInnerHTML={{ __html: description }} /> : description}</p>

          {eContentLink==''&(
          <div className="dise-e-conten">
            <a href={eContentLink} className="epathsala">E-CONTENT</a>
            <a href={feedbackLink} className="epathsala">FEEDBACK FORM</a>
          </div>
          )}
        </div>
        <div className="col-sm-12 col-md-5 pull-right hidden-sm">
          <img src={imageUrl} alt="Campus Related Image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
