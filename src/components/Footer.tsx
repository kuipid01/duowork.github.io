import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logos/logo.png"

export default function Footer() {
  return (
    <footer className="h-full">
      <div className="center p-14 grid grid-cols-1 md:grid-cols-4 justify-center md:justify-items-center gap-8">

        <div id="logo-container" className="text-white">
          <div
            id="logo"
            className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center"
          >
            <a href="/">
              <img src={logo} alt="duowork logo" />
            </a>
          </div>
          <p className="text-xl items">Duowork</p>
        </div>

        <div id="service" className="text-white">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div id="services">
            <p className="items">
              <Link to="/#our-services">Product Design</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Mobile development</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Web development</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Business automation</Link>
            </p>
            <p className="items">
              <Link to="/#our-services">Software consulting</Link>
            </p>
          </div>
        </div>

        <div id="contact" className="text-white">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div
            id="contact-icons"
            className="flex flex-row justify-between align-items flex-wrap"
          >
            <div className="icons items">
              <a
                href="mailto:reach.duoworkhq@gmail.com"
                target={"_blank"}
                title="Email"
              >
                <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="icons items">
              <a
                href="https://twitter.com/DuoworkHQ"
                target={"_blank"}
                title="Twitter"
              >
                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
              </a>
            </div>
            <div className="icons items">
              <a
                href="https://www.instagram.com/duoworkhq/"
                target={"_blank"}
                title="Instagram"
              >
                <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <p className="items">
            <a href="mailto:reach.duowork@gmail.com">reach.duowork@gmail.com</a>
          </p>
          <p className="items">
            <Link to="/contact">Fill a form</Link>
          </p>
        </div>

        <div id="more" className="text-white w-full">
          <h3 className="text-2xl font-semibold">More</h3>
          <div id="services" className="text-left w-full">
            <p className="items">
              <Link to="/blog">Blog</Link>
            </p>
          </div>
        </div>
      </div>

      <hr className="mx-5 border-1 border-green-100" />
      <div id="sm-copywrite" className="text-white pb-5">
        <p className="font-light text-center text-green-200 p-2">
          © 2023 Duowork | All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
