import React, { useRef } from "react"
import { Link } from "gatsby"

import SEO from "./SEO"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import logo from "../assets/logos/logo.png"
import navBurgerBar from "../assets/icons/navbar-burger-solid.svg"
import navXmark from "../assets/icons/navbar-xmark-solid.svg"

export default function Layout({ children }: any) {
  const navInitOpen = useRef<HTMLImageElement>(null)
  const navInitClose = useRef<HTMLImageElement>(null)
  const mobileNav = useRef<HTMLElement>(null)

  const handleToggle = (e: any) => {
    e.preventDefault();
    const mobileNavElem = mobileNav.current;

    if (e.target.attributes[0].nodeValue === "navInitOpen") {
      if (mobileNavElem !== null) {
        mobileNavElem.classList.add("mobile-nav-container");

        if (navInitOpen.current !== null && navInitClose.current !== null) {
          // Hide menu bar
          navInitOpen.current.style.display = "none";

          // show X mark
          navInitClose.current.style.display = "block";
        }
      }
    } else if (e.target.attributes[0].nodeValue === "navInitClose") {
      // Else it'll be 'navInitClose'

      if (mobileNavElem !== null) {
        if (mobileNavElem.classList.contains("mobile-nav-container")) {
          // Remove class that shows nav
          mobileNavElem.classList.remove("mobile-nav-container")

          if (navInitOpen.current !== null && navInitClose.current !== null) {
            // Hide X mark
            navInitClose.current.style.display = "none";

             // Show menu bar
             navInitOpen.current.style.display = "block";
          }
        }
      }
    }
  }

  return (
    <main id="duowork">
      {/* Mobile navigation */}
      <nav id="mobile-nav" className="flex md:!hidden" ref={mobileNav}>
        {/* <div id="movile-nav-container"> */}
        <div id="open-close-icons" className="p-2 rounded">
          <a id="openMobileNav" href="#" className="block" onClick={(e) => handleToggle(e)}>
            <img
              id="navInitOpen"
              src={navBurgerBar}
              alt="Navbar open icon"
              className="mobile-nav-init block"
              ref={navInitOpen}
            />
          </a>

          <a id="closeMobileNav" href="#" className="block" onClick={(e) => handleToggle(e)}>
            <img
              id="navInitClose"
              src={navXmark}
              alt="Navbar close icon"
              className="mobile-nav-init hidden"
              ref={navInitClose}
            />
          </a>
        </div>

        <ul id="mobile-nav-items" className="">
          <li className="nav-item-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item-link">
            <Link to="#our-services">Service</Link>
          </li>
          <li className="nav-item-link">
            <Link to="#our-work">Our work</Link>
          </li>
          <li className="nav-item-link">
            <Link to="#contact-duowork" className="h-full flex items-center justify-center">Contact</Link>
          </li>
        </ul>
        {/* </div> */}
      </nav>

      {/* Sections */}
      {children}

      <footer className="h-auto">
        <div className="center p-14 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8">
          <div id="logo-container" className="text-white">
            <div
              id="logo"
              className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center"
            >
              <a href="/">
                <img src={logo} alt="duowork logo" id="logo" />
              </a>
            </div>
            <p className="text-xl items">Duowork</p>
            <p className="font-light items hidden sm:block">
              © 2022 Duowork | All Right Reserved.
            </p>
          </div>

          <div id="service" className="text-white">
            <h3 className="text-2xl font-semibold">Services</h3>
            <div id="services">
              <p className="items">
                <Link to="#our-services">Product Design</Link>
              </p>
              <p className="items">
                <Link to="#our-services">Full-stack development</Link>
              </p>
              <p className="items">
                <Link to="#our-services">Business automation</Link>
              </p>
            </div>
          </div>

          <div id="contact" className="text-white">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="items">reach.duowork@gmail.com</p>
            {/* <p className="items">+234 801 234 5478</p> */}
            <div
              id="contact-icons"
              className="flex flex-row justify-between align-items flex-wrap"
            >
              <div className="icons items">
                <a href="mailto:reach.duoworkhq@gmail.com" target={"_blank"}>
                  <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="icons items">
                <a href="https://twitter.com/DuoworkHQ" target={"_blank"}>
                  <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="icons items">
                <a
                  href="https://www.instagram.com/duoworkhq/"
                  target={"_blank"}
                >
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              {/* <div className="icons items">
                <Link to="#" target={"_blank"}>
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </Link>
              </div>    */}
            </div>
          </div>
        </div>
        <div id="sm-copywrite" className="block md:hidden text-white pb-5">
          <p className="font-light text-center sm:text-left p-2">
            © 2022 Duowork | All Right Reserved.
          </p>
        </div>
      </footer>

      {/* Toast notification container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  )
}
