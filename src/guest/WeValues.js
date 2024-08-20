import React from 'react'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent';
import TableComponent from '../components/TableComponent';

function WeValues() {
  const thead = ['S.No', 'Name', 'Topic', 'Photo'];
  const tbody = [
    [1, 'Dr. Ramadhaar Mishra, Mathematics', '07-07-1999 To 30-06-2004', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [2, 'Dr. J. N. Tiwari, Education', '01-07-2004 to 19-07-2004', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [3, 'Dr. Raghvendra Mall, Mathematics', '19-07-2004 to 04-09-2007', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [4, 'Dr. Uday Bhan (Incharge), Commerce', '05-01-2007 to 06-02-2008', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [5, 'Dr. Ram Lakhan Singh Kushwaha', '07-02-2008 to 31-12-2008', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [6, 'Dr. Uday Bhan (Incharge), Commerce', '01-01-2009 to 27-02-2009', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [7, 'Dr. Raghvendra Mall, Mathematics', '27-02-2009 to 31-12-2010', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [8, 'Dr. Uday Bhan (Incharge), Commerce', '01-01-2011 to 03-08-2013', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [9, 'Dr. Rajendra Mall, Physical Education', '04-08-2013 to 30-06-2014', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [10, 'Dr. Uday Bhan (Incharge), Commerce', '01-07-2014 to 19-06-2015', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [11, 'Dr. Jai Prakash (Incharge), History', '20-06-2015 to 14-07-2015', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [12, 'Dr. Soumitra Chandra (Incharge), Commerce', '15-07-2015 to 13-05-2016', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [13, 'Dr. Satish Chandra Kumar, Political Science', '14-05-2016 to 25-08-2017', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [14, 'Dr. Ram Naresh Sharma, Chemistry', '26-08-2017 to 26-07-2018', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [15, 'Dr. Jai Prakash (Incharge), Hindi', '27-07-2018 to 30-09-2020', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
    [16, 'Dr. Soumitra Chandra (Incharge), Commerce', '01-10-2020 to Present', 'https://vbsgdc.org.in/plugins/elementor/assets/images/placeholder.png'],
  ];

  return (
    <div>
      <PageHeader title="We Value Their Services" />
      <PageContent elem={<><div className='text-center'><h1>Our Past Principals</h1></div><TableComponent thead={thead} tbody={tbody}/></>}/>
    </div>
  )
}

export default WeValues
