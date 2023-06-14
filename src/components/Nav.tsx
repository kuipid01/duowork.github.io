import React from 'react'
import { Link } from 'gatsby';

import Button from './Button';
import logo from "../assets/logos/logo.png"

export default function Nav(): React.ReactElement | null {
    if (typeof window !== "undefined") {
        const isHomePage = window.location.pathname === "/";
    
        return (
          <>
            <nav
              className={`landing-page-nav text-white ml-10 mr-10 mt-5 ${isHomePage? 'hidden':'flex flex-row justify-between'}`}
            >
              <div
                id="logo-container"
                className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center"
              >
                {/* <GatsbyImage alt="Website logo, duowork" image={logo} id="logo" /> */}
                <Link to="/">
                  <img src={logo} alt="Website logo, duowork" id="logo" />
                </Link>
              </div>
      
              <ul id="nav-items" className={`hidden md:flex flex-row justify-between ${isHomePage? 'text-white':'text-black'}`}>
                <li className="nav-item-link">
                  <Link to="/#landing-page-home">Home</Link>
                </li>
                <li className="nav-item-link">
                  <Link to="/#our-work">Our work</Link>
                </li>
                <li className="nav-item-link">
                  <Link to="/#our-services">Service</Link>
                </li>
                <li className="nav-item-link">
                  <Link to="/blog">Blog</Link>
                </li>
                <li id="cta-nav-item-contact" className="nav-item-link">
                  <Button
                    value="Contact Us"
                    btnClass="cta-btn nav-contact-cta text-white"
                    isLink={true}
                    linkTo="/#contact-duowork"
                  />
                </li>
              </ul>
            </nav>
          </>
        )
      }
    
      return null
}
