import React from 'react'
import PageHeader from '../components/PageHeader'
import PageNotFound from './PageNotFound'
import PageContent from '../components/PageContent'
import Blog from '../components/Blog'

function OurHistory() {
  return (
    <div>
      <PageHeader title="Our History" />
      <PageContent elem={<Blog image='' content='' />}/>
    </div>
  )
}

export default OurHistory
