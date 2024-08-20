import React from 'react';
import { useSelector } from 'react-redux';

const EventsSection = ({ events, nextEvents }) => {
  
  const notices= useSelector((state) => state.auth.notices);
  return (
    <div className="table-scholl-sectionps">
      <div className="container">
        <h2>Latest News &amp; <span>Events</span></h2>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-xs-12">
            <div className="row prestige-post-op-p">
              <div className="row col-sm-12 col-xs-12">
                
              {notices
    .filter(n => n.typeof === 2)
    .map((event, index) => (
                   <div className='col-sm-6' key={index}>
                    <div className="event-with-images" key={index}>
                    <a href={event.popup_link}>
                      <div className="img-src" style={{ backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/12114/12114303.png)`,backgroundColor:'white' }}></div>
                      <div className="menu-jtu0w">
                        <p>Event <span>{event.created_at}</span></p>
                        <h4>{event.popup_message}</h4>
                      </div>
                    </a>
                  </div>
                   </div> 
                  
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xs-12">
            <div className="prestige-post new-uiuhgt">
              <h4>Notice Board <span>------------</span></h4>
              <marquee behavior="scroll" direction="up" height="312" scrolldelay="100" scrollamount="2">
              
                <ul className="posts">
                {notices
    .filter(n => n.typeof === 1)
    .map((nextEvent, index) => (
                    <li className="post" key={index}> 
                      <h3 className="entry-title">
                        <a href={nextEvent.popup_link}>{nextEvent.popup_message}</a>
                      </h3>
                      <span className="date">
                        <i className="fa fa-calendar" aria-hidden="true"></i> {nextEvent.created_at}
                      </span>
                      <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    </li>
                  ))}
                </ul>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
