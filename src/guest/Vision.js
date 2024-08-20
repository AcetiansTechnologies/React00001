import React from 'react'
import PageHeader from '../components/PageHeader'
import PageNotFound from './PageNotFound'
import PageContent from '../components/PageContent'
import Blog from '../components/Blog'

function Vision() {
  return (
    <div>
      <PageHeader title="Vision and Mission" />
      <PageContent elem={
    <>
        <h4>Vision</h4>
        <ul>
        <li style={{ textAlign: 'justify' }}>
            To bring excellence in imparting higher education to the rural youth and equip them to participate in the nation building activity with a view to promote their individual, social and national growth
        </li>
        </ul>
        <h4>Mission</h4>
        <ul>
            <li>To serve the rural youth by providing them with easy access to higher education and job opportunities</li>
            <li>To stimulate intellectual, moral, cultural values of rural students for holistic development</li>
            <li>To inculcate the spirit of inquisitiveness towards research and innovation</li>
            <li>To instill in them the spirit of patriotism, dedication & humanistic values</li>
        </ul>
    </>
} />
    </div>
  )
}

export default Vision