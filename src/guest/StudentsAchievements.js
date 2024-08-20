import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import TableComponent from '../components/TableComponent';

function StudentsAchievements() {
    const thead = ['S.No','Student Name', 'Honoured By', 'Year','Award'];
const tbody = [
  [1,'Anushri Singh','Sri Gyanendra Singh', '2022', 'Event Level'],
  [2,'Anushri Singh','Sri Gyanendra Singh', '2023', 'Event Level'],
  
];


  return (
    <div> 
      <PageHeader title="Students Achievements" />
      <PageContent elem={<TableComponent thead={thead} tbody={tbody} />}/>

    </div>
  )
}

export default StudentsAchievements
