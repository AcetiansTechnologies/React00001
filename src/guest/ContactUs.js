import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from '../components/PageHeader';

const ContactUs = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your backend endpoint
            const response = await axios.post('https://campus.acetians.in/api/v1/add-enquiry', formData);
            // setResponseMessage(response.data.message);
            toast(response.data.message)
            if(response.data.message=='Sent Message Successfully'){
                setFormData({
                    ...formData,
                    [e.target.name]: '',
                });     
            }
        } catch (error) {
            console.error('There was an error sending the message:', error);
            setResponseMessage('Failed to send message.');
        }
    };

    return (
      <>
      <PageHeader title={props.title}/>
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            <ToastContainer />
            {responseMessage && <p>{responseMessage}</p>}
        </div>
        </>

    );
};

export default ContactUs;
