import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import HeadSection from '../components/HeadSection'
import FacultyList from '../components/FacultyList'

function ProctorialBoard() {
  return (
    <div>
      <PageHeader title="Proctorial Board" />
      <PageContent elem={
        <><HeadSection/><FacultyList/></>}/>
    </div>
  )
}

export default ProctorialBoard
