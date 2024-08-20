import React from 'react';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import HeadSection from '../components/HeadSection';

function Faculty(props) {
  const faculties = [
    {
      stream: 'commerce',
      department: 'Commerce',
      name: 'Mr. Vijendra Singh',
      email_id: '<ul><li>Life member in Indian Commerce Association</li><li>Life member in Youth Empowerment & Research Association</li></ul>',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/vijendra_singh.png'
    },
    {
      stream: 'Office Staffs',
      department: 'Office',
      name: 'Mr. CK Lohiya',
      email_id: '',
      designation: 'Office Superintendent',
      image: 'https://gdclalitpur.ac.in/teachers/ck.png'
    },
    {
      stream: 'Office Staffs',
      department: 'Office',
      name: 'Mr. Purshottam Narayan',
      email_id: '',
      designation: 'Mali',
      image: 'https://gdclalitpur.ac.in/teachers/purshottam.png'
    },
    {
      stream: 'Office Staffs',
      department: 'Office',
      name: 'Chotelal',
      email_id: '',
      designation: 'Library Attendant',
      image: 'https://gdclalitpur.ac.in/teachers/chotelal.png'
    },
    {
      stream: 'science',
      department: 'Botany',
      name: 'Ms. Ichha Omar',
      email_id: 'ichhaomar401@gmail.com',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/itcha_omar.png'
    },
    {
      stream: 'science',
      department: 'Botany',
      name: 'Dr Manish Kumar Verma',
      detail: '<ul class="list"><li>Life-member of “The Academy of Environmental Biology”. ITRC, Lucknow. INDIA. 226001.</li> <li>Life-member of “Society for Promotion of Tropical Biodiversity”. TFRI, Jabalpur. INDIA.482021.</li><li>Life-member of “International society of Environmental Botanist”. CSIR-NBRI campus, Lucknow.INDIA. 226001.</li></ul>',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/manish-kumar-vohra.png'
    },
    {
      stream: 'science',
      department: 'Chemistry',
      name: 'Dr Sunil Kumar',
      detail: 'sunilkr.rs.chy15@itbhu.ac.in',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/sunilkumar.png'
    },
    {
      stream: 'science',
      department: 'Physics',
      name: 'Mr Keshav Singh',
      detail: 'kds20007@gmail.com',
      designation: 'Head(Physics)',
      image: 'https://gdclalitpur.ac.in/teachers/keshav.jpeg'
    },
    {
      stream: 'science',
      department: 'Physics',
      name: 'Dr. Devendra Kumar Sahu',
      detail: 'devendrakumar@gmail.com',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/devendra.png'
    },
    {
      stream: 'science',
      department: 'Physics',
      name: 'Mr Barish Kumar Dwivedi',
      detail: 'barishdwivedi@gmail.com',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/barish.png'
    },
    {
      stream: 'science',
      department: 'Zoology',
      name: 'Mrs Anuradha',
      detail: 'drannu10@gmail.com',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/anuradha.png'
    },
    {
      stream: 'science',
      department: 'Zoology',
      name: 'Dr Ravindra Kumar Saronia',
      detail: 'Founder and Life Membership of Aquatic Biodiversitt Conservation Society, Lucknow',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/ravindra-kumar.png'
    },
    {
      stream: 'science',
      department: 'Zoology',
      name: 'Dr Reetesh Kumar Khare',
      detail: '<ul><li>Name Listed in directory of Indian Zooogists. Discovered eight new genera, three new subgenera and 18 new species of tapeworm. Published 04 books</li></ul>',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/reetesh-kumar.png'
    },
    {
      stream: 'science',
      department: 'Laboratory',
      name: 'Smt. Acharya Suroothiya',
      email_id: '<ul><li>Life Member of Indian Library Association</li><li>Uttar Pradesh Library Association</li></ul>',
      designation: 'Assistant Professor',
      image: 'https://gdclalitpur.ac.in/teachers/laboratory.png'
    }
  ];

  const filteredFaculties = faculties.filter(faculty => faculty.stream === props.stream);

  return (
    <div>
      <PageHeader title={`Faculty of ${props.stream}`} />
      <PageContent elem={<div className="faculty-list">
        {filteredFaculties.map((faculty, index) => (
          <div key={index} className="faculty-member">
            <div>
            <img src={faculty.image} alt={faculty.name} />
            </div>
            <div>
            <h3>{faculty.name}</h3>
            <p>{faculty.designation}</p>
            <p>{faculty.department}</p>
            <div dangerouslySetInnerHTML={{ __html: faculty.email_id || faculty.detail }} />
            </div>
            
            
          </div>
        ))}
      </div>} />
      
    </div>
  );
}

export default Faculty;
