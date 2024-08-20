import React from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import VIP from '../components/VIP'
import Chancellors from '../components/vips.json'
import AboutUsSection from '../components/AboutSection'
import LatestNewsMarquee from './LatestNewsMarquee'
import EventsSection from './EventsSection'
import QuickButton from '../components/QuickButton'
import Facilities from '../components/Facilities'
import CTA from '../components/CTA'
import GallerySlide from '../components/GallerySlide'
import { useSelector } from 'react-redux'

function Home() {
  const store = useSelector((state) => state.auth.store);
  const quicklinks=[
    {
      'name':'Exams',
      'image':'https://university.acetians.in/uploads/icon1.png',
      
    },
    {
      'name':'Admissions',
      'image':'https://university.acetians.in/uploads/icon2.png',
      
    },
    {
      'name':'Results',
      'image':'https://university.acetians.in/uploads/icon3.png',
      
    },
    {
      'name':'Students',
      'image':'https://university.acetians.in/uploads/icon4.png',
      
    },
    {
      'name':'University',
      'image':'https://university.acetians.in/uploads/icon5.png',
      
    },
    {
      'name':'Academics',
      'image':'https://university.acetians.in/uploads/icon6.png',
      
    }
  ] 
  const events = [
    {
      title: "पाँच दिवसीय रोवर्स-रेंजर्स प्रशिक्षण एवं जांच शिविर काआयोजन",
      link: "#",
      image: "#",
      date: "March 11, 2024",
    },
    {
      title: "राष्ट्रीय सेवा योजना के अंतर्गत सप्तदिवसीय विशेष शिविर संबंधित सूचना",
      link: "#",
      image: "#",
      date: "February 19, 2024",
    },
  ];

  const nextEvents = [
    {
      title: "पाँच दिवसीय रोवर्स-रेंजर्स प्रशिक्षण एवं जांच शिविर काआयोजन",
      link: "#",
      date: "March 11, 2024",
    },
    {
      title: "राष्ट्रीय सेवा योजना के अंतर्गत सप्तदिवसीय विशेष शिविर संबंधित सूचना",
      link: "#",
      date: "February 19, 2024",
    },
    {
      title: "Job Fair from Regional Employment Office Gorakhpur",
      link: "#",
      date: "April 22, 2023",
    },
  ];
  return (
    <div>
      <div className='d-flex w-100' style={{maxWidth:'100vw'}}>
         <div className='col-md-9 p-0' style={{padding:0}}>
         <HeroCarousel/>
         </div>
         <div className='col-md-3'>
          <ul style={{padding:'0px',margin:'0px'}}>
            {Chancellors.map((chancellor,index)=>(<VIP key={index} chancellor={chancellor}/>))}
          </ul>
         </div>
      </div>
    <LatestNewsMarquee newsItems={[]}/>

    <ul id="quicklinks-ul">
      {quicklinks.map((link,index)=>(<QuickButton key={index} link={link}/>))}
    </ul>
    
    <AboutUsSection
      title="Welcome to"
      subtitle="Raghuveer SinghGovernment Degree College"
      description="The Raghuveer SinghGovernment Degree College, Lalitpur was established in 1981 by the State Government of Uttar Pradesh as one of the pioneer institute of higher education with a vision to provide low cost quality education of Science and Commerce at their doorsteps to the students of this backward District, primarily residing in rural areas covering all category especially weaker sections of the society. This rural area of Uttar Pradesh was devoid of such higher education and at present is theonly government college of Science & Commerce in this District which is fulfilling the need of higher education at minimal economic cost through optimal utilization of available resources. The college is well known decipline and transparent examination system. The college has co-education system and the motto of this institution has been, besides education, to inculcate values among the students and live up the expectations of good citizenship."
      eContentLink="/e-pathshalas/"
      feedbackLink="#"
      imageUrl="https://campus.acetians.in/custom/images/about_img2.jpg"
    /> 
    
    <EventsSection events={events} nextEvents={nextEvents}/>
    <AboutUsSection
      title="PRINCIPAL'S"
      subtitle="MESSAGE"
      description={`Principal’s Message :${store.principal_message}`}
      eContentLink=""
      feedbackLink=""
      imageUrl={`https://campus.acetians.in/custom/images/${store.principal_image}`}
    />
    <Facilities/>
    <CTA/>
    <GallerySlide/>
    </div>
  )
}

export default Home
