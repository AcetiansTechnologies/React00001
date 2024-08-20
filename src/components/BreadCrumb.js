// Breadcrumb.js
import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breed-crum-div-wrap">
      <div className="breed-crum-div">
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <a href={item.link} className="external none">{item.title.replaceAll('/','')}</a>
              ) : (
                <span className="active">{item.title.replaceAll('/','')}</span>
              )}
              {index < items.length - 1 && <span> | </span>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
