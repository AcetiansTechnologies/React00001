import React from 'react'
import { Link } from 'react-router-dom';
import Registration from './Registration';
import Registration_status from './Registration_status';
import Dashboard from '../auth/Dashboard';



const Admission = () => {
  return (
    <div className="info-container">
      <div  className='info-rule'>
        <p className='rules'>
          परास्नातक में प्रवेश हेतु विषय चयन से सम्बंधित नियमों तथा न्यूनतम प्रतिशत से सम्बंधित नियमों को देखने हेतु <a href="#"className='click-rules'>यहाँ क्लिक करें
            </a>
        </p>
      </div>
      
      <div className='info-issue'>
        <p className='issue'>
          पंजीकरण के समय आने वाली फीस सम्बन्धी अथवा किसी अन्य प्रकार की तकनीकी समस्या के समाधान या शिकायत दर्ज करने के लिए यहाँ क्लिक करें अथवा email पर ईमेल करें | शिकायत दर्ज न करने अथवा समस्या न बताने की स्थिति में निवारण कर पाना संभव नहीं होगा तथा ऐसी स्थिति में महाविद्यालय की कोई जिम्मेदारी नहीं होगी |
        </p>
      </div>
      
      <div className='Apply-box'>

          <div className='online-application'>
              <Link to="/registration" className='registration_button'>
              <span className='click-bar'>Click </span>for Registration
              </Link>
          </div>

          <div className='online-application'>
              <Link to="/registration_status" className='registration_button'>
              DashBoard status
              </Link>
          </div>
          
          <div className='online-application'>
              <Link to="/registration" className='registration_button'>
              <span className='click-bar'>Click </span>for Registration
              </Link>
          </div>

      </div>

      
      
      <Link to ='/Dashboard' type='button'>
        DashBoard
      </Link>


    </div>
  )
}

export default Admission

