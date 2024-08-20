import React, { useState } from "react";
import { Link } from "react-router-dom";
import Otp from "./Otp";

const Registration = () => {
    const courses = ['BCA', 'MCA', 'BCOM'];
    const [course, setCourse] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [alt_mobile, setAlt_Mobile] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [email, setEmail] = useState("");

    const courseChange = (e) => {
        setCourse(e.target.value);
    };

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const mobileChange = (e) => {
        setMobile(e.target.value);
    };

    const alt_mobileChange = (e) => {
        setAlt_Mobile(e.target.value);
    };

    const aadharChange = (e) => {
        setAadhar(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const formSubmit = (e) => {


        const emailRe =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // Validate
        if (course === '') {
            alert("Please select a course.");
        } else if (name === '') {
            alert("Please enter your name.");
        } else if (mobile === '') {
            alert("Please enter your mobile number.");
        } else if (mobile.length !== 10) {
            alert("Mobile number must be 10 digits.");
        } else if (alt_mobile && alt_mobile.length !== 10) {
            alert("Alternate mobile number must be 10 digits.");
        } else if (aadhar === '') {
            alert("Please enter your Aadhar number.");
        } else if (aadhar.length !== 12) {
            alert("Aadhar number must be 12 digits.");
        } else if (email === '') {
            alert("Please enter your email.");
        } else if (!emailRe.test(email)) {
            alert("Email is not valid.");
        } else if (!courses.includes(course.toUpperCase())) {
            alert("Course is not defined.");
        } else {
        
            const formData = {
                course,
                name,
                mobile,
                alt_mobile,
                aadhar,
                email,
            };
            localStorage.setItem('registrationData', JSON.stringify(formData));

    
            console.log('Form Data:', formData);

          
        }
    };

    return (
        <div>
            <div className="form-container">
                <h1>प्रवेशार्थी आवेदन फार्म</h1>
                <form className="form">
                    <label htmlFor="course">
                        Select Course / (पाठ्यक्रम जिसे करना चाहते हैं) : *
                    </label>
                    <select
                        id="course"
                        name="course"
                        required
                        value={course}
                        onChange={courseChange}
                    >
                        <option value="">--- Select Course ---</option>
                        {courses.map((course) => (
                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="name">Candidate's Name / (अभ्यर्थी का नाम) : *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Candidate's Name"
                        required
                        value={name}
                        onChange={nameChange}
                    />

                    <label htmlFor="mobile">Mobile No. / (मोबाइल नं.) : *</label>
                    <input
                        type="number"
                        id="mobile"
                        name="mobile"
                        placeholder="Mobile No"
                        required
                        value={mobile}
                        onChange={mobileChange}
                    />

                    <label htmlFor="alt_mobile">
                        Alternative Mobile No. / (वैकल्पिक मोबाइल नं.) :
                    </label>
                    <input
                        type="number"
                        id="alt_mobile"
                        name="alt_mobile"
                        placeholder="Alternative Mobile No"
                        value={alt_mobile}
                        onChange={alt_mobileChange}
                    />

                    <label htmlFor="aadhar">AADHAR No. / (आधार नं.) *</label>
                    <input
                        type="number"
                        id="aadhar"
                        name="aadhar"
                        placeholder="Enter Aadhar No."
                        required
                        value={aadhar}
                        onChange={aadharChange}
                    />

                    <label htmlFor="email">E-mail / (ईमेल) : *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        required
                        value={email}
                        onChange={emailChange}
                    />

                    <div className="Button-box">
                        <button type="button" onClick={formSubmit}>
                            Submit
                        </button>
                        <Link to="/otp" className="Otp-button">
                            Get Otp on Email
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
