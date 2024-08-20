import React from 'react'
import { Link } from 'react-router-dom'

const ProfileNavbar = () => {
  return (
    <nav className="profileNave">
        <div className="nav-icons">
            <div className="last-icons">
              <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" className="icon"></img>
            </div>
            <div className="s-name" >
              <h2 className="C-name">
                OFSS
              </h2>
            </div>
        </div>

        <div className="nav-icons">
            <div >
              <img src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" className="icon"></img>
            </div>
            <div className="person-name">
            <p>Welcome</p>
            </div>
            <div>
              <img src="https://cdn-icons-png.freepik.com/512/8684/8684258.png" className="logout-icon"></img>
            </div>
        </div>
        
      </nav>
  )
}

export default ProfileNavbar
