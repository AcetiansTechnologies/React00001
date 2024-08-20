import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import Blog from '../components/Blog';
import { useSelector } from 'react-redux';


function PrincipalMessage() {

  const store = useSelector((state) => state.auth.store);
  return (
    <div>
      <PageHeader title="Pricipal Message" />
      <PageContent elem={<Blog image={`https://campus.acetians.in/custom/images/${store.principal_image}`} content={store.principal_message} />}/>
    </div>
  )
}

export default PrincipalMessage
