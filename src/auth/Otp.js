import React from 'react'
import { Link } from 'react-router-dom';

const Otp = () => {
  return (
    <div>
         <div className="Get-OTP">

                <form className='Get-OTP-1'>
                        <label htmlFor="name">Check your email for the OTP</label>
                        <input
                            className='Get-OTP-Input'
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter OTP"
                            required
                        />
                        <Link type="submit" className='get-otp-submit-button'>Submit</Link>
                </form>
        </div>
    </div>
  )
}

export default Otp
