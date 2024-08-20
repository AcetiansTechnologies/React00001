import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import PNav from '../components/PNav';


const Personal = () => {
  return (
    <div>

      <div >
        
        <PNav />


        <div>

        <div>
          <Sidebar/>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Personal;
