import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import HeadSection from '../components/HeadSection'
import FacultyList from '../components/FacultyList'

function PRO() {
  return (
    <div>
      <PageHeader title="Public Relation Officer" />
      <PageContent elem={<><HeadSection/></>}/>
    </div>
  )
}

export default PRO
