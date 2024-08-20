import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import PdfEmbed from '../components/PdfEmbed'

function ListOfHoliday() {
  return (
    <div>
      <PageHeader title="List Of Holidays" />
      <PageContent elem={<PdfEmbed pdfUrl="https://university.acetians.in/uploads/veer.pdf"/>} />
    </div>
  )
}

export default ListOfHoliday
