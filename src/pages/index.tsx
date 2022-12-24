import React, { useRef, useEffect } from "react"

import { Link } from "gatsby"

// Hooks
import useIntersectionObserver from "../hooks/useIntersectionObserver"

// Components
import Layout from "../components/layout"
import SEO from "../components/SEO"
import Button from "../components/Button"

// Images
import bgImage from "../assets/images/cloudPlayImg.png"
import projectionsSVG from "../assets/illustrations/projections.svg"
import productDesignImg from "../assets/images/product-design.jpeg"
import fullstackDevelopmentImg from "../assets/images/fullstack-development.jpeg"
import mobileDevelopmentImg from "../assets/images/mobile-development.png"
import businessAutomation from "../assets/images/business-automation.jpeg"
import softwareConsulting from "../assets/images/consulting.jpeg"
import longDownArrow from "../assets/icons/long-down-arrow-96.png"
import cloudPlaymp4 from "../assets/video/cloudplay.mp4"
import cloudPlaywebm from "../assets/video/cloudplay.webm"

// Test image
import wasfa from "../assets/images/portfolio_test/Wasfa.webp"
import bizaa from "../assets/images/portfolio_test/bizaa.webp"
import bottled from "../assets/images/portfolio_test/glowbottle.webp"

import logo from "../assets/logos/logo.png"

export const Head = () => (
  /* Valid properties: location.pathname,params, data, pageContext */
  <SEO title="Home" />
)

export default function LandingPage() {
  /* Intersection observer start */
  const intersectionCallback = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showTransition")
      } else {
        entry.target.classList.remove("showTransition")
      }
    })
  }

  const { observer } = useIntersectionObserver(intersectionCallback, undefined)

  const observerFunc = (refElemArr: React.RefObject<any>[]) => {
    refElemArr.forEach(elem => {
      if (elem.current !== null && observer !== null) {
        observer.observe(elem.current)
      }
    })
  }

  let descriptionRef = useRef<HTMLDivElement>(null)
  let workSectionRef = useRef<HTMLDivElement>(null)
  let servicesRef = useRef<HTMLDivElement>(null)
  let serviceProcessHeaderRef = useRef<HTMLHeadingElement>(null)
  let serviceProcessRef = useRef<HTMLDivElement>(null)
  let contactSectionRef = useRef<HTMLDivElement>(null)

  useEffect((): any => {
    let componentIsMounted = true

    const refElemArr = [
      descriptionRef,
      workSectionRef,
      servicesRef,
      serviceProcessRef,
      contactSectionRef,
    ]

    observerFunc(refElemArr)

    return () => (componentIsMounted = false)
  }, [])
  /* Intersection observer End */

  const landingPageBGImg = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepat: "no-repeat",
    backgroundPosition: `top`,
    backgroundSize: `cover`,
  }

  const servicePageImageStyle = (image: string) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: `cover`,
    }
  }

  // Check connetion speedn to initiate video
  const InternetSpeedForVideo = () => {
    if (typeof window !== "undefined" && window.navigator) {
      const networkSpeed = window.navigator.connection.downlink

      if (networkSpeed !== undefined && networkSpeed >= 2.0) {
        return (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={bgImage}
              className="hidden sm:block"
            >
              <source src={cloudPlaymp4} type="video/mp4" />
              <source src={cloudPlaywebm} type="video/webm" />
            </video>
          </>
        )
      }
    }
    return null
  }

  return (
    <Layout>
      <section
        id="landing-page-home"
        className="h-screen"
        style={landingPageBGImg}
      >
        {/* Auto play */}
        <InternetSpeedForVideo />

        <div id="overlay">
          <nav
            id="landing-page-nav"
            className="text-white flex flex-row justify-between ml-10 mr-10 mt-5"
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

            <ul
              id="nav-items"
              className="hidden md:flex flex-row justify-between"
            >
              <li className="nav-item-link">
                <Link to="#landing-page-home">Home</Link>
              </li>
              <li className="nav-item-link">
                <Link to="#our-work">Our work</Link>
              </li>
              <li className="nav-item-link">
                <Link to="#our-services">Service</Link>
              </li>
              <li id="cta-nav-item-contact" className="nav-item-link">
                <Button
                  value="Contact Us"
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
              className="text-white text-5xl md:text-7xl lg:text-9xl text-bold text-center font-bold"
            >
              DUOWORK
            </h1>
            <p
              className="text-white text-center mt-10 self-center text-lg px-4 sm:px-0"
              style={{ maxWidth: 500 }}
            >
              Transforming digital ideas into reality. We can help build and
              manage your next big idea through crisp custom software solutions
              🛠✨
            </p>

            {/* <Button
              name="What do you want to build?"
              btnClass="text-white mt-20 font-semibold self-center cta-btn intro-cta-btn"
              isLink={true}
              linkTo={"contact"}
            /> */}
            <img
              src={longDownArrow}
              alt="Long down arrow icon"
              style={{ width: 70 }}
              className="self-center block mt-20"
            />
          </div>
        </div>
      </section>

      <section id="what-we-do" className="pt-10 px-5 pb-5 h-screen">
        <div className="flex flex-row hideTransition" ref={descriptionRef}>
          <div
            id="what-we-do-intro"
            className="what-we-do-divide flex flex-col items-center !w-full md:w-50"
          >
            <h2
              id="what-we-do-header"
              className="text-3xl sm:text-5xl font-medium mt-40 mb-5 text-gray-700"
            >
              You operate the business. <br /> We build the project.
            </h2>
            <p
              id="what-we-do-description"
              className="mb-10 text-gray-600 sm:text-lg"
            >
              It’s one thing to have a project, product or an idea but another
              to{" "}
              <span className="bg-gray-600 text-white px-1">
                build, ship, scale and maintain your digital vision.
              </span>{" "}
              That’s where we come in; to flesh out and maintain your vision
              while you focus on doing what you do best — steering your idea.{" "}
              <br />
              <span className="bg-gray-600 text-white px-1">
                We work hand-in-hand with you.
              </span>
            </p>
            <Button
              btnType="button"
              value="How can we help you?"
              btnClass="cta-btn what-we-do-cta-btn !self-center lg:!self-start lg:ml-40 text-1xl text-white !w-60"
              isLink={true}
              linkTo="/contact"
            />
          </div>

          <div
            id="what-we-do-img"
            className="what-we-do-divide hidden lg:block"
          >
            {/* <GatsbyImage
              image={projectionsSVG}
              alt="An illustration of a lady"
              className="h-full max-w-full"
            /> */}
            <img
              src={projectionsSVG}
              alt="An illustration of a lady"
              className="h-full max-w-full"
            />
          </div>
        </div>
      </section>

      {/* 'Our work' section*/}
      {/* ----------It goes here------------ */}
      <section id="our-work" className="h-auto px-10 mb-20">
        <p
          id="heading"
          className="text-xl sm:text-2xl font-semibold text-gray-700 sm:ml-20"
        >
          Some of <span className="underline-color-green-light">the work</span>{" "}
          we've done <br /> for{" "}
          <span className="underline-color-green-light">our clients.</span>
        </p>

        <div id="duowork-portfolio" className="hideTransition" ref={workSectionRef}>
          <div className="work-item flex flex-col sm:flex-row item-center sm:ml-20 pt-10">
            <img src={bottled} alt="" className="work-item-image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-md" />
            <div className="work-other-container">
              <h3 className="work-name font-semibold text-2xl sm:text-3xl">Bottled</h3>
              <p className="work-description w-80 py-5 text-xl">
                Bottled is creating simple, effective solutions that help its
                customers strike the perfect balance between sit mor ipsum
              </p>
              <p id="work-type" className="work-tag mb-10 p-2 text-center rounded-full text-xl">#Website</p>
              <Button
                btnType="button"
                value="View work"
                isLink={true}
                linkTo="#"
                btnClass="work-tag text-center text-xl p-2 rounded-full"
              />
            </div>
          </div>

          <div className="work-item flex flex-col sm:flex-row item-center sm:ml-20 pt-10">
            <img src={wasfa} alt="" className="work-item-image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-md" />
            <div className="work-other-container">
              <h3 className="work-name font-semibold text-2xl sm:text-3xl">Wasfa</h3>
              <p className="work-description w-80 py-5 text-xl">
                Wasfa is a digital platform that captures all kind of recipes in
                its purest form.
              </p>
             <p id="work-type" className="work-tag mb-10 p-2 text-center rounded-full text-xl">#Mobile app</p>
              <Button
                btnType="button"
                value="View work"
                isLink={true}
                linkTo="#"
                btnClass="work-tag text-center text-xl p-2 rounded-full"
              />
            </div>
          </div>

          <div className="work-item flex flex-col sm:flex-row item-center sm:ml-20 pt-10">
            <img src={bizaa} alt="" className="work-item-image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-md" />
            <div className="work-other-container">
              <h3 className="work-name font-semibold text-2xl sm:text-3xl">Bizaa</h3>
              <p className="work-description w-80 py-5 text-xl">
                A company changing lorem ipisum sit lume ack jordi fir neur
                platform of all kind of B2B tools.
              </p>
              <p id="work-type" className="work-tag mb-10 p-2 text-center rounded-full text-xl">#UI/UX & SaaS</p>
              <Button
                btnType="button"
                value="View work"
                isLink={true}
                linkTo="#"
                btnClass="work-tag text-center text-xl p-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section*/}
      {/* ----------It goes here------------ */}

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
          className="px-10 py-5 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8 hideTransition"
          ref={servicesRef}
        >
          <div
            id="product-design-service"
            className="services basis-1/3 rounded-xl"
            style={servicePageImageStyle(productDesignImg)}
          >
            <div className="service-overlay p-7 rounded-xl">
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
                  value="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=Product-design"}
                />
              </div>
            </div>
          </div>

          <div
            id="mobile-development-service"
            className="services basis-1/3 rounded-xl"
            style={servicePageImageStyle(mobileDevelopmentImg)}
          >
            <div className="service-overlay p-7 rounded-xl">
              <h3 className="text-white text-2xl font-medium py-4">
                Mobile App
                <br />
                Development
              </h3>
              <p className="text-white">
                We offer mobile app development solutions for business looking
                to boost their operation and reach more customers. using top
                tech solutions, we create tailored solutions that help you reach
                you goals.
              </p>

              <div className="request-service w-full mt-5 flex justify-center">
                <Button
                  value="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=Mobile-development"}
                />
              </div>
            </div>
          </div>

          <div
            id="web-development-service"
            className="services basis-1/3 rounded-xl"
            style={servicePageImageStyle(fullstackDevelopmentImg)}
          >
            <div className="service-overlay p-7 rounded-xl">
              <h3 className="text-white text-2xl font-medium py-4">
                Web App
                <br />
                Development
              </h3>
              <p className="text-white">
                Secure, scalable and visually compelling front-end, back-end and
                full-stack development solution that is expressive of business
                requirements and reaching possible results of business
                operations.
              </p>

              <div className="request-service w-full mt-5 flex justify-center">
                <Button
                  value="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=Web-development"}
                />
              </div>
            </div>
          </div>

          <div
            id="Business-automation-service"
            className="services basis-1/3 rounded-xl"
            style={servicePageImageStyle(businessAutomation)}
          >
            <div className="service-overlay p-7 rounded-xl">
              <h3 className="text-white text-2xl font-medium py-4">
                Business
                <br />
                Automation
              </h3>

              <p className="text-white">
                We help business streamline their operations with task
                automation for increased productivity and efficiecy.
              </p>

              <div className="request-service w-full mt-5 flex justify-center">
                <Button
                  value="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=Business-automation"}
                />
              </div>
            </div>
          </div>

          <div
            id="Business-automation-service"
            className="services basis-1/3 rounded-xl"
            style={servicePageImageStyle(softwareConsulting)}
          >
            <div className="service-overlay p-7 rounded-xl">
              <h3 className="text-white text-2xl font-medium py-4">
                Software
                <br />
                Consultation
              </h3>

              <p className="text-white">
                Expert consulting services to help businesses achieve their goals and optimize operations through expert guidiance and customize solution.
              </p>

              <div className="request-service w-full mt-5 flex justify-center">
                <Button
                  value="Request service"
                  btnClass="cta-btn services-request-cta"
                  isLink={true}
                  linkTo={"/contact?service=Software-consulting"}
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
            className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-8 hideTransition"
            ref={serviceProcessRef}
          >
            <div id="discovery-scope-process" className="process shadow-md">
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

            <div id="prototyping-design" className="process shadow-md">
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

            <div id="project-development-process" className="process shadow-md">
              <div className="process-title mb-10">
                <h3 className="title">Project Development</h3>
                <span className="process-number">3</span>
              </div>
              <p className="process-description text-gray-700">
                This is the product design and development phase. A full cycle
                development intended to connect the features with the design
                interface. We build test and test so that the product is solid
                enogh to run in production.
              </p>
            </div>

            <div id="launch-maintenance-process" className="process shadow-md">
              <div className="process-title">
                <h3 className="title">Launch, training & maintenance</h3>
                <span className="process-number">4</span>
              </div>
              <p className="process-description text-gray-700">
                This is where we bring your product to life after completion. We
                launch the project and conduct an onboarding training for staff
                and organization. We provide support and are always availble for
                modifying and adding extra features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 'Technology we use' section*/}
      {/* ----------It goes here------------ */}

      <section id="contact-duowork" className="h-screen">
        <div ref={contactSectionRef} className="hideTransition">
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

                {/* <div className="icons items">
                <a href="#" target={"_blank"} className="text-green-700">
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </div> */}

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
        </div>
      </section>
    </Layout>
  )
}
