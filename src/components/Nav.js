import React from 'react';
import navLinks from './navlinks.json';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const handleClick = () => {
    if (props.onTab) {
      props.onTab();
    }
  };

  return (
    <ul
      id="mega-menu-primary"
      className="mega-menu max-mega-menu mega-menu-horizontal"
      data-event="hover_intent"
      data-effect="fade_up"
      data-effect-speed="200"
      data-effect-mobile="slide"
      data-effect-speed-mobile="200"
      data-mobile-force-width="false"
      data-second-click="go"
      data-document-click="collapse"
      data-vertical-behaviour="standard"
      data-breakpoint="768"
      data-unbind="true"
      data-mobile-state="collapse_all"
      data-hover-intent-timeout="300"
      data-hover-intent-interval="100"
    >
      {navLinks.map((link, index) => (
        <li
          key={index}
          className={`mega-menu-item mega-menu-item-type-custom  
          mega-menu-item-object-custom mega-menu-item-has-children mega-align-bottom-left mega-menu-flyout  mega-menu-item-${106 + index}`}
          id={`mega-menu-item-${106 + index}`}
        >
          <Link
            onClick={link.link=='#'?'':handleClick}
            className="mega-menu-link"
            aria-haspopup="true"
            aria-expanded="false"
            tabIndex="0"
            to={link.link}
          >
            {link.title}
          </Link>
          {link.subMenu && (
            <ul className="mega-sub-menu">
              {link.subMenu.map((child, childIndex) => (
                <li key={childIndex} className="mega-menu-item mega-menu-item-type-custom">
                  <Link
                    onClick={handleClick} // Correctly use handleClick
                    className="mega-menu-link"
                    to={child.link}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
