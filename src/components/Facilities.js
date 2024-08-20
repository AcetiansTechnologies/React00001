// Facilities.js
import React from 'react';
import FacilityCard from './FaciltyCard';



const facilitiesData = [
  {
    icon: 'fa fa-desktop',
    title: 'खेल',
    description: 'लोरेम इप्सम, यानी बेमतलब मसौदा,',
  },
  {
    icon: 'fa fa-paint-brush',
    title: 'सुरक्षा',
    description: 'लोरेम इप्सम, यानी बेमतलब मसौदा,',
  },
  {
    icon: 'fa fa-magic',
    title: 'लाइब्रेरी  रूल्स',
    description: 'लोरेम इप्सम, यानी बेमतलब मसौदा,',
  },
  {
    icon: 'fa fa-cogs',
    title: 'स्टूडेंट  सपोर्ट',
    description: 'लोरेम इप्सम, यानी बेमतलब मसौदा,',
  },
  {
    icon: 'fa fa-users',
    title: 'लेबोरेटरी  रूल्स',
    description: 'लोरेम इप्सम, यानी बेमतलब मसौदा,',
  },
  {
    icon: 'fa fa-envelope-o',
    title: 'अचीवमेंट',
    description: 'लोरेम इप्सम, यानी बेमतलब मसौदा,',
  },
];

const Facilities = () => {
  return (
    <div className="callouts-wrapper">
      <div className="container">
        <h2>Facilities</h2>
        <div className="row">
          {facilitiesData.map((facility, index) => (
            <FacilityCard 
              key={index}
              icon={facility.icon} 
              title={facility.title} 
              description={facility.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
