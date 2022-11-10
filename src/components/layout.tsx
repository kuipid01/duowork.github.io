import React from "react"

import { Link } from "gatsby"

import SEO from "./SEO"

import logo from "../assets/logos/logo.png"

export default function Layout({ children }: any) {
  return (
    <main id="duowork">
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
    </main>
  )
}