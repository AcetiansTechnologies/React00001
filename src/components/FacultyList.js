import React from 'react';


const FacultyList = () => {
  const eastCampus = [
    "Prof. Dhirendra Singh - Chief Proctor",
    "Prof. Archana Singh",
    "Smt. Nidhi Rai",
    "Dr. Shubranshu Shekhar Singh",
    "Shri Jitendra Kumar Pandey",
    "Dr. Sanjeev Kumar Singh",
    "Dr. Sanjay Kumar Tripathi",
    "Dr. Sanjeet Kumar Singh",
    "Dr. Rakesh Kumar",
    "Dr. Shailesh Kumar Singh",
    "Dr. Sarita Singh",
  ];

  const westCampus = [
    "Prof. Dhirendra Singh - Chief Proctor",
    "Prof. Archana Singh",
    "Smt. Nidhi Rai",
    "Dr. Shubranshu Shekhar Singh",
    "Shri Jitendra Kumar Pandey",
    "Dr. Sanjeev Kumar Singh",
    "Dr. Sanjay Kumar Tripathi",
    "Dr. Sanjeet Kumar Singh",
    "Dr. Rakesh Kumar",
    "Dr. Shailesh Kumar Singh",
    "Dr. Sarita Singh",
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary">All Faculty List</h2>
      <div className='row d-flex'>
      <div className="col-md-6 my-4">
        <h3>East Campus</h3>
        <ol>
          {eastCampus.map((faculty, index) => (
            <li key={index}>{faculty}</li>
          ))}
        </ol>
      </div>
      
      <div className="col-md-6 my-4">
        <h3>West Campus</h3>
        <ol>
          {westCampus.map((faculty, index) => (
            <li key={index}>{faculty}</li>
          ))}
        </ol>
      </div>
      </div>
    </div>
  );
};

export default FacultyList;
