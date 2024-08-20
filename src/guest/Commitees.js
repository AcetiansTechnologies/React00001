import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import Committee from '../components/Committee'

function Commitees() {
  return (
    <div>
      <PageHeader title="Commitees" />
      <PageContent elem={<Committee/>}/>
    </div>
  )
}

export default Commitees
