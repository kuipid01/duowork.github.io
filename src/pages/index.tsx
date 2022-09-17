import React from "react"
import { Link } from "gatsby"
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
    <div id="duowork">
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
              className="text-white text-3xl md:text-5xl lg:text-7xl text-bold text-center font-bold"
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
              name="...have something in mind?"
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
            another to think about building, shipping, scaling and maintaining
            your digital vision. That’s where we come in — to help you flesh out
            your digital vision while you focus on doing what you do best —
            managing your business. At Duowork, we work hand-in-hand with you.
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

      <section id="our-services">
        <h2 className="text-center my-5">
          <span className="text-gray-700 text-3xl md:text-4xl font-bold">
            Our services
          </span>
          <br />
          <span id="underline-header"></span>
        </h2>

        <div id="services-container" className="flex flex-row px-10 py-5">
          <div
            id="web-development-service"
            className="services basis-1/3 p-7 rounded-sm bg-red-200"
          >
            <h3 className="text-gray-700 text-2xl font-medium py-4">
              Product Design
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
            id="product-design-service"
            className="services basis-1/3 p-7 rounded-sm mx-10 bg-green-200"
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
      </section>
    </div>
  )
}
