import React from 'react'
import PageHeader from '../components/PageHeader'
import Blog from '../components/Blog'
import PageContent from '../components/PageContent'
import { useSelector } from 'react-redux';

function Courses(props) {
  
  const courses = useSelector((state) => state.auth.courses);
  const filteredCourses = courses.filter(course => course.categ === props.categ);
  return (
   
    <div>
      <PageHeader title={props.name} /> 
      <PageContent  elem={<div className="faculty-list">
        {filteredCourses.map((faculty, index) => (
          <div key={index} className="faculty-member">
            <div>
            <img src={`https://campus.acetians.in/custom/images/${faculty.image}`} alt={faculty.name} />
            </div>
            <div>
            <h3>{faculty.short_name}</h3>
            <p>{faculty.subjects}</p>
            <div dangerouslySetInnerHTML={{ __html: faculty.description}} />
             
            <div dangerouslySetInnerHTML={{ __html: faculty.email_id || faculty.detail }} />
            </div>
            
            
          </div>
        ))}
      </div>}/>
    </div>
  )
}

export default Courses
