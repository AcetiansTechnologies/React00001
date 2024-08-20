// src/guest/NotFound.js
import React from 'react';
import NotFound from '../assets/NotFound.png';

const PageNotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img src={NotFound}/>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default PageNotFound;
