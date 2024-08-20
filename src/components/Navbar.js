import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  var title='a=a';
  const store = useSelector((state) => state.auth.store);
  title=store.store_title;
  const [navref, setNavref]=useState(false);
  const dispatch = useDispatch();
  const [expanded,setExpanded]=useState(false); 
  const toggleRef = useRef(null);

  // Function to programmatically click the element
  const clickElement = () => {
    if (toggleRef.current) {
      toggleRef.current.click();
    }
  };

  const togMenu=()=>{
   clickElement()
  }
  return (
    <header>
      <div className="top-wrapper">  
        <div className="container">
          <div className="col-md-4 col-sm-6 hidden-xs top-wrapper-left no-padding">
            <ul className="header-social-icons">
              <li className="facebook"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
              <li className="twitter"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
              <li className="linkedin"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
              <li className="pinterest"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a></li>
              <li className="google-plus"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a></li>
              <li className="youtube"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
            </ul>
          </div>
          <div className="col-md-8 col-sm-6">
            <ul className="top-right pull-right">
              <li className="inquiry-form" id="myBtn"><i className="{{}}"></i> <a href={`mailto:${store.store_email}`}>{store.store_email}</a></li>
              <li className="inquiry-form" id="show"><a href="javascript:void(0);"><i className="fa fa-phone"></i> {store.store_phone}</a></li>
              <li className="login blinking"><Link to="/online_admission"><h5><i className="fa fa-info-circle"></i><b> Online Application </b></h5></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logo-bar">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-2 hidden-xs" style={{ paddingRight: 0, width: '13%' }}>
              <a href="/"><img src={`https://campus.acetians.in/custom/images/${store.store_logo}`} alt="Campus Logo" /></a>
            </div>
            <div className="col-sm-8 hidden-xs" style={{ paddingLeft: 0 }}>
              {title==undefined?(<span className="right-barheadingh">University Name</span>):(<span className="right-barheadingh">{title.split("=")[0]??''}</span>)}
              {title==undefined?(<span className="right-barheadingh-eng tops-sa">University Name</span>):(<span className="right-barheadingh-eng tops-sa">{title.split("=")[1]??''}</span>)} 
              
              <span className="right-barheadingh-eng">(Affiliated by Bundelkhand Jhansi University)</span>
            </div>
            <div className="col-sm-2 hidden-xs" style={{ paddingRight: 0 }}>
              <img src="https://vbsgdc.org.in/uploads/2023/05/Uttar_Pradesh.png" alt="Uttar Pradesh" />
              
            </div>
            <div className="wow fadeInDown navigation animated" style={{ visibility: 'visible' }}>
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">
                  
                    <img src="https://vbsgdc.org.in/uploads/2020/04/logo.png" alt="UPGOV Logo" />
                    <div className="navbar-header-rightos">
                      <span className="right-barheadingh">{title.split("=")[0]??''}</span>
                      <span className="right-barheadingh-eng">{title.split("=")[1]??''}</span>
                      <span className="right-barheadingh-eng">(Affiliated to DDU Gorakhpur University Accredited&nbsp;A++&nbsp;By&nbsp;NAAC)</span>
                    </div>
                  </a>
                </div>  
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 
                </div>
              </nav>
            </div>
          </div>      
        </div>
      </div>
      <div className="menu-main">
        <div id="mega-menu-wrap-primary" className="mega-menu-wrap">
          <div className={`mega-menu-toggle `}>
            <div className="mega-toggle-blocks-left"></div>
            <div className="mega-toggle-blocks-center"></div>
            <div className="mega-toggle-blocks-right">
              <div className="mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-0" id="mega-toggle-block-0">
                <button ref={toggleRef} aria-label="Toggle Menu" className="mega-toggle-animated mega-toggle-animated-slider" type="button" aria-expanded="false">
                  <span className="mega-toggle-animated-box">
                    <span className="mega-toggle-animated-inner"></span>
                  </span>
                </button>   
              </div>
            </div>
          </div>
          <Nav onTab={togMenu}/>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
