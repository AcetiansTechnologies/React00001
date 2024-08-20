import React from 'react';

const Blog = ({ image, content }) => {
  // Default image URL
  const defaultImage = "https://campus.acetians.in/custom/images/about_img2.jpg";

  // Default content
  const defaultContent = (
    <>
       
      <p>
      The Raghuveer SinghGovernment Degree College, Lalitpur was established in 1981 by the State Government of Uttar Pradesh as one of the pioneer institute of higher education with a vision to provide low cost quality education of Science and Commerce at their doorsteps to the students of this backward District, primarily residing in rural areas covering all category especially weaker sections of the society. This rural area of Uttar Pradesh was devoid of such higher education and at present is theonly government college of Science & Commerce in this District which is fulfilling the need of higher education at minimal economic cost through optimal utilization of available resources. The college is well known decipline and transparent examination system. The college has co-education system and the motto of this institution has been, besides education, to inculcate values among the students and live up the expectations of good citizenship.
      </p>
    </>
  );

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        
        <img
            style={{width:'100%'}}
                decoding="async"
                
                src={image || defaultImage} // Use prop.image if available, otherwise use defaultImage
                 alt=""
                 />
        
      </div>

      <div className="col-md-6" style={{margin:'auto'}}>
        
              {content!=''?(<div dangerouslySetInnerHTML={{ __html: content }} />):( defaultContent)} {/* Use prop.content if available, otherwise use defaultContent */}
            </div>
         
    </div>
  );
}

export default Blog;
