import React from 'react'
import { Link } from 'react-router-dom';

const Registration_status = () => {
  return (
    <div>
            <div className="form-container-status">
                <form className='form-container-status-1'>
                        <label htmlFor="name">Enter Your Registration Number</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Registration Number"
                            required
                        />
                        <button type="submit">Submit</button>
                </form>
            
                
        </div>
    </div>
  )
}

export default Registration_status
