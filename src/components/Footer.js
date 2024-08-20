import React from 'react'
import { useSelector } from 'react-redux';

function Footer() {
  
  const store = useSelector((state) => state.auth.store);
  return (
    <footer>
  <div className="container">
    <div className="col-sm-3">
	<h2 className="widgettitle">संपर्क करे</h2>			<div className="textwidget"><ul className="address">
<li><i className="fa fa-home"></i>{store.store_address}</li> 
<li><i className="fa fa-phone"></i> {store.store_phone}</li>
<li><i className="fa fa-envelope"></i> {store.store_email}</li>
</ul>
</div>
			
	</div>
    <div className="col-sm-2">
      <div className="contactus">
        <h2 className="widgettitle">क्विक लिंक</h2><div className="menu-footer-menu-container"><ul id="menu-footer-menu" className="menu"><li id="menu-item-1754" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1754"><a href="/">Home</a></li>
<li id="menu-item-1755" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1755"><a href="/">Careers</a></li>
<li id="menu-item-1757" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1757"><a href="/">Events</a></li>
<li id="menu-item-1756" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1756"><a href="/">Contact Us</a></li>
</ul></div>		
      </div>
    </div>
	<div className="col-sm-4">
      <div className="contactus">
        <h2 className="widgettitle">हमारे बारे में</h2>			<div className="textwidget"><p>{store.store_description}</p>
</div>
				
      </div>
    </div>
	<div className="col-sm-3">
      <div className="contactus">
        		
      </div>
    </div>
  </div>
  <div>
    <p style={{color:'white',paddingBlockStart:'10px',borderTop:'1px solid white',textAlign:'center'}}>Developed By  <a style={{color:'inherit'}} href="https://acetians.com" target="_blank">Acetians Technologies</a></p>
  </div>
</footer>
  )
}

export default Footer
