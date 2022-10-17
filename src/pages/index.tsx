import React, { useRef, useEffect, useLayoutEffect } from "react"
import { Link } from "gatsby"

// Hooks
import useIntersectionObserver from "../hooks/useIntersectionObserver"

// Components
import SEO from "../components/SEO"
import Button from "../components/Button"

// Images
import bgImage from "../assets/images/landingPageImage.jpeg"
import projectionsSVG from "../assets/illustrations/projections.svg"
import productDesignImg from "../assets/images/product-design.jpeg"
import fullstackDevelopmentImg from "../assets/images/fullstack-development.jpeg"
import businessAutomation from "../assets/images/business-automation.jpeg"

export default function LandingPage() {
  let sectionRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => console.log(sectionRef), [])

  const landingPageImageStyle = (image: string) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundRepat: "no-repeat",
      backgroundPosition: `top`,
      backgroundSize: `cover`,
    }
  }

  const servicePageImageStyle = (image: string) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: `cover`,
    }
  }

  return (
    <main id="duowork" ref={sectionRef}>
      <section
        id="landing-page-home"
        className="h-screen"
        style={landingPageImageStyle(bgImage)}
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
                <Link to="#landing-page-home">Home</Link>
              </li>
              <li className="nav-item-link">
                <Link to="#our-services">Service</Link>
              </li>
              <li id="cta-nav-item-contact" className="nav-item-link">
                <Button
                  name="Contact Us"
                  btnClass="cta-btn nav-contact-cta text-white"
                  isLink={true}
                  linkTo="#contact-duowork"
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
              We help you build projects, products, and your next big idea with
              crisp custom software solutions 🛠✨
            </p>

            <Button
              name="What do you want to build?"
              btnClass="text-white mt-20 self-center cta-btn intro-cta-btn"
              isLink={true}
              linkTo={"contact"}
            />
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="flex flex-row pt-10 px-5 pb-5 h-screen"
        // ref={sectionRef}
      >
        <div
          id="what-we-do-intro"
          className="what-we-do-divide flex flex-col items-center !w-full md:w-50"
        >
          <h2
            id="what-we-do-header"
            className="text-5xl font-medium mt-40 mb-5 text-gray-700"
          >
            You operate the business. <br /> We build the project.
          </h2>
          <p
            id="what-we-do-description"
            className="mb-10 text-gray-600 sm:text-lg"
          >
            It’s one thing to have have a project, product or an idea but
            another to think about{" "}
            <span className="border-b-2">
              building, shipping, scaling and maintaining that digital vision.
            </span>{" "}
            That’s where we come in; to flesh out and maintain your digital
            vision while you focus on doing what you do best — managing your
            business. <br />
            <span className="border-b-2">We work hand-in-hand with you.</span>
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

      {/* Testimonials section */}

      <section id="our-services" className="mb-20">
        <h2 id="service-header" className="my-5 text-center">
          <span className="text-gray-700 text-3xl md:text-4xl font-bold">
            Our services
          </span>
          <br />
          <span id="underline-header"></span>
        </h2>

        <div
          id="services-container"
          className="px-10 py-5 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8"
          ref={servicesRef}
        >
          <div
            id="product-design-service"
            className="services basis-1/3 rounded-sm"
            style={servicePageImageStyle(productDesignImg)}
          >
            <div className="service-overlay p-7 rounded-sm">
              <h3 className="text-white text-2xl font-medium py-4">
                Product
                <br />
                Design
              </h3>
              <p className="text-white">
                We develop designs that encapsulate business idea and
                requirement through precedural designs for optimized interfacing
                and overal user experience.
              </p>

              <div className="request-service w-full mt-5 flex justify-center">
                <Button
                  name="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=product-design"}
                />
              </div>
            </div>
          </div>

          <div
            id="web-development-service"
            className="services basis-1/3 rounded-sm"
            style={servicePageImageStyle(fullstackDevelopmentImg)}
          >
            <div className="service-overlay p-7 rounded-sm">
              <h3 className="text-white text-2xl font-medium py-4">
                Web
                <br />
                Development
              </h3>
              <p className="text-white">
                Secure, scalable and visually compelling front-end, back-end and
                full-stack development solutions expressive of business
                requirement and operations.
              </p>

              <div className="request-service w-full mt-5 flex justify-center">
                <Button
                  name="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=Web-development"}
                />
              </div>
            </div>
          </div>

          <div
            id="Business-automation-service"
            className="services basis-1/3 rounded-sm"
            style={servicePageImageStyle(businessAutomation)}
          >
            <div className="service-overlay p-7 rounded-sm">
              <h3 className="text-white text-2xl font-medium py-4">
                Business
                <br />
                Automation
              </h3>

              <p className="text-white">
                Redundant business task automation for a smart workflow.
                Increase productivity and efficiecy in every business activties.
              </p>

              <div className="request-service w-full mt-5 flex justify-center">
                <Button
                  name="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=Business-automation"}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="our-process" className="px-10">
          <h2 id="process-header" className="my-10 ml-10 md:ml-20">
            <span className="text-gray-500 text-2xl font-medium text-left">
              The process we follow
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
                We believe in near-perfection but only when we understand what
                you the mission is. We get the features and requirements that
                align with the vision. This allow us to build within the right
                confinemnt.
              </p>
            </div>

            <div id="prototyping-design" className="process shadow-lg">
              <div className="process-title">
                <h3 className="title">Design & Prototype</h3>
                <span className="process-number">2</span>
              </div>
              <p className="process-description text-gray-700">
                We bring over the knowledge gained from the scope and discovery
                phase and create early UI/UX designs and then the Minimum Viable
                Product (MVP) to test the vision idea.
              </p>
            </div>

            <div id="project-development-process" className="process shadow-lg">
              <div className="process-title mb-10">
                <h3 className="title">Project Development</h3>
                <span className="process-number">3</span>
              </div>
              <p className="process-description text-gray-700">
                This is the product design and development phase. A full cycle
                development intended to connect the features with the desing
                interface. This is where we bring you vision to life.
              </p>
            </div>

            <div id="launch-maintenance-process" className="process shadow-lg">
              <div className="process-title">
                <h3 className="title">Launch, training & maintenance</h3>
                <span className="process-number">4</span>
              </div>
              <p className="process-description text-gray-700">
                After completion of developement, we launch the project and
                conduction onboarding training. We provide provide support and
                are always availble for modifying and adding extra features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 'Technology we use' section*/}

      <section id="contact-duowork" className="h-screen">
        <h1
          id="header"
          className="text-4xl sm:text-6xl font-semibold text-gray-700 text-center pb-5 pt-20"
        >
          Contact us
        </h1>
        <p id="description" className="my-5 text-center px-5">
          We're available to attend to you. Reach out to us today:
        </p>
        <div
          id="how-to-contact"
          className="flex flex-col justify-evenly items-center h-80 px-5"
        >
          <p className="contact-us-ways text-gray-700">
            Fill in the{" "}
            <Link
              to="/contact"
              className="border-b-2 hover:border-b-4 border-solid border-green-700"
            >
              contact form and tell us about what you want to build.
            </Link>
          </p>

          <div className="contact-us-ways h-auto">
            <p className="text-gray-700 font-regular p-1 mb-2">
              Reach us via our socials:
            </p>

            <div
              id="contact-icons"
              className="flex flex-row justify-around align-items flex-wrap"
            >
              <div className="icons items">
                <a
                  href="https://twitter.com/DuoworkHQ"
                  target={"_blank"}
                  className="text-green-700"
                >
                  <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </div>

              <div className="icons items">
                <a
                  href="https://instagram.com/duoworkhq"
                  target={"_blank"}
                  className="text-green-700"
                >
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </div>

              <div className="icons items">
                <a href="#" target={"_blank"} className="text-green-700">
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </div>

              {/* <div className="icons items">
                <a href="#" target={"_blank"} className="text-green-700">
                  <i className="fa fa-medium fa-2x" aria-hidden="true"></i>
                </a>
              </div> */}

              {/* <div className="icons items">
                <a href="#" target={"_blank"} className="text-green-700">
                  <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                </a>
              </div> */}

              {/* <div className="icons items">
                <a href="#" target={"_blank"} className="text-green-700">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </div> */}
            </div>
          </div>

          <p className="text-gray-700 text-2xl sm:text-3xl font-regular leading-snug">
            Want to send us an email instead? <br />
            <a
              href="mailto:reach.duowork@gmail.com"
              className="border-b-2 hover:border-b-4 border-solid border-green-700"
            >
              reach.duoworkhq@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer className="h-auto">
        <div className="center p-14 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8">
          <div id="logo-container" className="text-white">
            <div
              id="logo"
              className="w-11 h-11 bg-white rounded-full flex flex-row justify-center items-center"
            >
              <span className="text-black font-semibold inline-block">DW</span>
              {/* <img src="" alt="duowork logo" id="logo" /> */}
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
              </div> */}
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

export const Head = () => (
  /* Valid properties: location.pathname,params, data, pageContext */

  <SEO />
)
