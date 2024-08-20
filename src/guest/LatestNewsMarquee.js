import React from 'react';

const LatestNewsMarquee = ({ newsItems }) => {
  return (
    <section id="latestnews">
      <div className="breaking-news-ticker bn-effect-scroll bn-direction-ltr" style={{ height: '40px', lineHeight: '38px', borderRadius: '2px', borderWidth: '1px' }}>
        <div className="bn-label" id="main-content">
          <span>What's New</span> <i className="fa fa-bullhorn"></i>
        </div>
        <div className="bn-news">
          <ul>
            {newsItems.map((item, index) => (
              <li className="news-item" key={index}>
                <span className="arw">
                  <em className="fa fa-long-arrow-right"></em>
                </span>
                <a className={item.isLocal ? "adtext local" : "adtext external"} target="_blank" href={item.link} title={item.title}>
                  {item.title} <span className="dtype">[ News ]</span>
                </a>
                <em className="fa fa-file-pdf-o"></em>
                <span className="dsize" tabIndex="0">
                  {item.size} | Language: {item.language}
                </span>
                <p className="ndate" tabIndex="0">Date: {item.date}</p>
                <span className="newicon">
                  <img src="site/Images/new_red.gif" alt="New" title="New" tabIndex="0" />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bn-controls">
          <button><span className="bn-action bn-pause"></span></button>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsMarquee;
