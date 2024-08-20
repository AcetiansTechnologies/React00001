import React from 'react';

const YouTubePlayer = ({ title, videoUrl }) => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
           
            <iframe
                className='iframe-video'
                src={videoUrl}
                title={title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubePlayer;
