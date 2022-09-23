import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Button from "../components/Button"

import bgImage from "../assets/images/landingPageImage.jpeg"
import projectionsSVG from "../assets/illustrations/projections.svg"

export default function LandingPage() {
  const landingPageHomeStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepat: "no-repeat",
    backgroundPosition: `top`,
    backgroundSize: `cover`,
  }

  return (
    <main id="duowork">
      <section
        id="landing-page-home"
        className="h-screen"
        style={landingPageHomeStyle}
      >
        <div id="overlay">
          <nav
            id="landing-page-nav"
            className="text-white flex flex-row justify-between ml-10 mr-10 mt-5"
          >
            <div
              id="logo-container"
              className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center"
            >
              {/* <img src="" alt="duowork logo" id="logo" /> */}
              <span id="logo" className="text-black font-semibold">
                DW
              </span>
            </div>

            <ul
              id="nav-items"
              className="flex flex-row justify-between"
              style={{ minWidth: 250 }}
            >
              <li className="nav-item-link">
                <Link to="#">Home</Link>
              </li>
              <li className="nav-item-link">
                <Link to="#">Service</Link>
              </li>
              <li id="cta-nav-item-contact" className="nav-item-link">
                <Button
                  name="Contact Us"
                  btnClass="cta-btn nav-contact-cta text-black"
                  isLink={false}
                  linkTo={undefined}
                />
              </li>
            </ul>
          </nav>

          <div
            id="landing-page-intro"
            className="mt-40 flex flex-col item-center justify-center"
          >
            <h1
              id="duowork-title"
              className="text-white text-4xl md:text-5xl lg:text-7xl text-bold text-center font-bold"
            >
              DUOWORK
            </h1>
            <p
              className="text-white text-center mt-10 self-center"
              style={{ maxWidth: 500 }}
            >
              Crisp customs software solutions for your existing projects,
              products, and your next big idea ✨
            </p>

            <Button
              name="...have an idea in mind?"
              btnClass="text-white mt-20 self-center cta-btn intro-cta-btn"
              isLink={false}
              linkTo={undefined}
            />
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="flex flex-row pt-10 px-5 pb-5 h-screen"
      >
        <div
          id="what-we-do-intro"
          className="what-we-do-divide flex flex-col items-center !w-full md:w-50"
        >
          <h2
            id="what-we-do-header"
            className="text-5xl font-medium mt-40 mb-5 text-gray-700"
          >
            You build your business. <br />
            We build the project.
          </h2>
          <p id="what-we-do-description" className="mb-10 text-gray-600">
            It’s one thing to have have a project, product or an idea but
            another to think about building, shipping, scaling and maintainence.
            That’s where we come in — to help you flesh out your digital vision
            while you focus on doing what you do best — managing your business.
            At Duowork, we work hand-in-hand with you.
          </p>
          <Button
            name="Let us help you"
            btnClass="cta-btn what-we-do-cta-btn !self-center lg:!self-start lg:ml-20 text-white"
            isLink={false}
            linkTo={undefined}
          />
        </div>
        <div id="what-we-do-img" className="what-we-do-divide hidden lg:block">
          <img
            src={projectionsSVG}
            alt="Duowork engineering team illustration"
            className="h-full max-w-full"
          />
        </div>
      </section>

      <section id="our-services" className="mb-20">
        <h2 id="service-header" className="my-5 text-center">
          <span className="text-gray-700 text-3xl md:text-4xl font-bold">
            Our services
          </span>
          <br />
          <span id="underline-header"></span>
        </h2>

        <div id="services-container" className="px-10 py-5 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8">
          <div
            id="web-development-service"
            className="services basis-1/3 p-7 rounded-sm bg-red-200"
          >
            <h3 className="text-gray-700 text-2xl font-medium py-4">
              Product Design
            </h3>
            <p className="text-gray-600">
              Design and develop experience for user's of your product
              consectetur adipisicing elit. Nisi, facilis, dolores maiores vero
              ab eos placeat architecto iusto quidem minima dolore error illo
              quaerat nulla provident corporis.
            </p>

            <div className="request-service w-full mt-5 flex justify-center">
              <Button
                name="Request service"
                btnClass="cta-btn services-request-cta"
                isLink={true}
                linkTo={"/contact"}
              />
            </div>
          </div>

          <div
            id="product-design-service"
            className="services basis-1/3 p-7 rounded-sm bg-green-200"
          >
            <h3 className="text-gray-700 text-2xl font-medium py-4">
              Full-stack Development
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              facilis, dolores maiores vero ab eos placeat architecto iusto
              quidem minima dolore error illo quaerat nulla provident corporis
              asperiores. Obcaecati, quos.
            </p>

            <div className="request-service w-full mt-5 flex justify-center">
              <Button
                name="Request service"
                btnClass="cta-btn services-request-cta"
                isLink={true}
                linkTo={"/contact"}
              />
            </div>
          </div>

          <div
            id="Business-automation-service"
            className="services basis-1/3 p-7 rounded-sm bg-blue-200"
          >
            <h3 className="text-gray-700 text-2xl font-medium py-4">
              Business Automation
            </h3>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              facilis, dolores maiores vero ab eos placeat architecto iusto
              quidem minima dolore error illo quaerat nulla provident corporis
              asperiores. Obcaecati, quos.
            </p>

            <div className="request-service w-full mt-5 flex justify-center">
              <Button
                name="Request service"
                btnClass="cta-btn services-request-cta"
                isLink={true}
                linkTo={"/contact"}
              />
            </div>
          </div>
        </div>

        <div id="our-process" className="px-10">
          <h2 id="process-header" className="my-10 ml-10 md:ml-20">
            <span className="text-gray-500 text-3xl font-semibold">
              Our process
            </span>
            <br />
            <span id="underline-header"></span>
          </h2>

          <div
            id="process-container"
            className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-8"
          >
            <div id="discovery-scope-process" className="process shadow-lg">
              <div className="process-title">
                <h3 className="title">Discovery & Scope</h3>
                <span className="process-number">1</span>
              </div>
              <p className="process-description text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium blanditiis consequatur nulla maiores soluta
                excepturi non earum ipsam quam fuga magnam officia repellendus
                pariatur modi, libero dolores tempora, odio sequi.
              </p>
            </div>

            <div id="prototyping-design" className="process shadow-lg">
              <div className="process-title">
                <h3 className="title">Prototype & Design</h3>
                <span className="process-number">2</span>
              </div>
              <p className="process-description text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium blanditiis consequatur nulla maiores soluta
                excepturi non earum ipsam quam fuga magnam officia repellendus
                pariatur modi, libero dolores tempora, odio sequi.
              </p>
            </div>

            <div id="project-development-process" className="process shadow-lg">
              <div className="process-title mb-10">
                <h3 className="title">Project Development</h3>
                <span className="process-number">3</span>
              </div>
              <p className="process-description text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium blanditiis consequatur nulla maiores soluta
                excepturi non earum ipsam quam fuga magnam officia repellendus
                pariatur modi, libero dolores tempora, odio sequi.
              </p>
            </div>

            <div id="launch-maintenance-process" className="process shadow-lg">
              <div className="process-title">
                <h3 className="title">Launch & maintenance</h3>
                <span className="process-number">4</span>
              </div>
              <p className="process-description text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium blanditiis consequatur nulla maiores soluta
                excepturi non earum ipsam quam fuga magnam officia repellendus
                pariatur modi, libero dolores tempora, odio sequi.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-action flex justify-center items-center py-20">
          <Button name="Reach us" btnClass="cta-btn service-contact-cta text-white" isLink={true} linkTo="contact" />
        </div>
      </section>

      <footer>
        <div className="center p-14 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8">
          <div id="logo-container" className="text-white">
            <div id="logo" className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center">
              <span className="text-black font-semibold inline-block">
                DW
              </span>
              {/* <img src="" alt="duowork logo" id="logo" /> */}
            </div>
            <p className="text-xl items">Duowork</p>
            <p className="font-light items">© 2022 Duowork | All Right Reserved.</p>
          </div>

          <div id="service" className="text-white">
            <h3 className="text-2xl font-semibold">Services</h3>
            <div id="services">
              <p className="items">
                <Link to="#">Product Design</Link>
              </p>
              <p className="items">
                <Link to="#">Full-stack development</Link>
              </p>
              <p className="items">
                <Link to="#">Business automation</Link>
              </p>
            </div>
          </div>

          <div id="contact" className="text-white">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="items">reach.duowork@gmail.com</p>
            <p className="items">+234 801 234 5478</p>
            <div
              id="contact-icons"
              className="flex flex-row justify-between align-items flex-wrap"
            >
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
              <div className="icons items">
                <Link to="#" target={"_blank"}>
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="icons items">
                <Link to="#" target={"_blank"}>
                  <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="sm-copywrite" className="block md:hidden text-white pb-5">
          <p className="font-light">© 2022 Duowork | All Right Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export const Head = () => (
  /* Valid properties: location.pathname,params, data, pageContext */

  <SEO />
)
