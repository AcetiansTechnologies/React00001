import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import TableComponent from '../components/TableComponent';

function RankingNirf() {
    const thead = ['S.No','Topic', 'File'];
const tbody = [
    [
        1,
        "College Level Data Submitted for NIRF Rankings 2024",
        "#"
      ],
      [
        2,
        "Overall Data Submitted for NIRF Rankings 2024",
        "#"
      ]
];


  return (
    <div> 
      <PageHeader title="NIRF" />
      <PageContent elem={<TableComponent thead={thead} tbody={tbody} />}/>

    </div>
  )
}

export default RankingNirf
