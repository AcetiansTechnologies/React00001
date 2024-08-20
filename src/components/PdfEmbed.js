import React from 'react';

const PdfEmbed = (props) => {
   
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
      <iframe 
        src={props.pdfUrl} 
        width="100%" 
        height="100%" 
        title="PDF Document"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default PdfEmbed;
