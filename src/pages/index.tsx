import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// Media assets
import bgImage from "../assets/images/cloudPlayImg.png";
import AdeolaAzeez from "../assets/images/portfolio/AdeolaAzeez2.jpeg";
import EbonyBeauty from "../assets/images/portfolio/Ebonybeauty2.jpeg";
import LarksBanner from "../assets/images/portfolio/larks-banner.png";
import cloudPlaymp4 from "../assets/video/cloudplay.mp4";
import cloudPlaywebm from "../assets/video/cloudplay.webm";
import Head from "../components/Head";
import Nav from "../components/navMenu/Nav";
import Layout from "../layouts/layout";

// import englishFlag from "../assets/english.svg"

export default function LandingPage({ location }: any) {
  const landingPageBGImg = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepat: "no-repeat",
    backgroundPosition: `top`,
    backgroundSize: `cover`,
  };

  const servicePageImageStyle = (image: string) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: `cover`,
    };
  };

  /*Background video should only play on stable network strength.
  Connection object is available to Safari browser.*/
  const BackgroundVideoPlayback = () => {
    if (
      typeof window !== "undefined" &&
      window.navigator.connection !== undefined
    ) {
      const networkSpeed = window.navigator.connection.downlink;

      // Check internet download speed
      if (networkSpeed !== undefined && networkSpeed >= 1.5) {
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
        );
      }
    }
    return null;
  };

  return (
    <Layout>
      <Head title="Home" />

      <section
        id="landing-page-home"
        className="h-[45rem]"
        style={landingPageBGImg}
      >
        {/* Auto play */}
        <BackgroundVideoPlayback />

        <div id="overlay" className="!h-full">
          <Nav isHomePage={true} />

          <div
            id="hero-container"
            className="mt-40 flex flex-col item-center justify-center"
          >
            <h1
              id="hero-title"
              className="text-white text-4xl md:text-6xl text-center font-bold w-3/4 self-center"
            >
              Tailor-made Software Solution for{" "}
              <span className="custom-bg-green-accent text-black px-2">
                Business Success
              </span>
            </h1>
            <p
              id="hero-description"
              className="text-white text-center mt-10 self-center text-lg px-4 sm:px-0 font-light w-1/2"
            >
              We help businesses and startups build and manage their digital
              ideas througn custom design and software solutions.
            </p>

            <Link
              to="/contact"
              id="hero-button"
              className="flex items-center mt-10 w-auto self-center text-white rounded-xl cta-btn"
              title="Get started"
              type="button"
            >
              <span id="button-text" className="text-center">
                Get started
              </span>{" "}
              <span
                id="right-arrow"
                className="text-center rounded-tr-xl rounded-br-xl"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="services-section" className="my-20">
        <span className="text-gray-800 text-md font-bold text-center block mb-5">
          Our services
        </span>
        <h2
          id="service-header"
          className="mb-5 mt-2 text-center text-3xl font-bold"
        >
          What <span className="custom-bg-green-accent">we offer</span>
        </h2>

        <p className="text-center max-w-3/5 w-3/5 mx-auto mb-10 mt-5 text-sm font-light leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic
          asperiores, libero repellat totam perferendis corporis doloribus
          accusantium ipsum deserunt ratione in.
        </p>

        <div
          id="services-section__services"
          className="px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8"
        >
          <div
            id="product-design-service"
            className="services basis-1/3 rounded-xl p-7"
          >
            <div className="service-icon w-full">
              <StaticImage
                src="../assets/icons/ui-ux.png"
                alt="Product design icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-description">
              <h3 className="text-white text-xl font-semibold py-4">
                <span className="underline-green-accent">UI/UX</span> Design
              </h3>

              <p className="text-white font-light">
                We develop designs that encapsulate business idea and
                requirement through precedural designs for optimized interfacing
                and overal user experience.
              </p>
            </div>
          </div>

          <div
            id="mobile-development-service"
            className="services basis-1/3 p-7 rounded-xl"
          >
            <div className="service-icon w-full">
              <StaticImage
                src="../assets/icons/mobile-dev.png"
                alt="Product design icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-description">
              <h3 className="text-white text-xl font-semibold py-4">
                <span className="underline-green-accent">Mobile</span>{" "}
                Development
              </h3>

              <p className="text-white font-light">
                We offer mobile app development solutions for business looking
                to boost their operation and reach more customers. using top
                tech solutions, we create tailored solutions that help you reach
                you goals.
              </p>
            </div>
          </div>

          <div
            id="frontend-development-service"
            className="services basis-1/3 rounded-xl p-7"
          >
            <div className="service-icon w-full">
              <StaticImage
                src="../assets/icons/fe-dev.png"
                alt="Product design icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-description">
              <h3 className="text-white text-xl font-semibold py-4">
                <span className="underline-green-accent">Front</span>-end
                development
              </h3>

              <p className="text-white">
                Secure, scalable and visually compelling front-end, back-end and
                full-stack development solution that is expressive of business
                requirements and reaching possible results of business
                operations.
              </p>
            </div>
          </div>

          <div
            id="backend-development-service"
            className="services basis-1/3 rounded-xl p-7"
          >
            <div className="service-icon w-full">
              <StaticImage
                src="../assets/icons/be-dev.png"
                alt="Product design icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-description">
              <h3 className="text-white text-xl font-semibold py-4">
                <span className="underline-green-accent">Back</span>-end API
                development
              </h3>

              <p className="text-white">
                We help business streamline their operations with task
                automation for increased productivity and efficiecy.
              </p>
            </div>
          </div>

          <div
            id="fullstack-development-service"
            className="services basis-1/3 rounded-xl p-7"
          >
            <div className="service-icon w-full">
              <StaticImage
                src="../assets/icons/fs-dev.png"
                alt="Full-stack development icon"
                width={40}
                height={40}
              />
            </div>

            <div className="service-description">
              <h3 className="text-white text-xl font-semibold py-4">
                <span className="underline-green-accent">Full</span>-stack
                development
              </h3>

              <p className="text-white">
                We help business streamline their operations with task
                automation for increased productivity and efficiecy.
              </p>
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

      {/* 'Our work' section*/}
      <section id="our-work" className="h-auto px-10 mb-20">
        <p
          id="heading"
          className="text-xl sm:text-2xl font-semibold text-gray-700 sm:ml-20"
        >
          Some of <span className="underline-color-green-light">the work</span>{" "}
          we've done <br /> for{" "}
          <span className="underline-color-green-light">our clients.</span>
        </p>

        <div id="duowork-portfolio" className="w-full">
          <div className="work-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <img
              src={EbonyBeauty}
              alt="A screenshort of a website landing page"
              className="work-item-image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-md"
            />
            <div className="work-other-container">
              <h3 className="work-name font-semibold text-2xl sm:text-3xl">
                Ebony Beauty
              </h3>
              <p className="work-description w-80 py-5 text-xl">
                Ebony beauty is a lagos-based retail store with aim to be the
                ultimate destination for beauty products.
              </p>
              <p
                id="work-type"
                className="work-tag mb-10 p-2 text-center rounded-full text-sm"
              >
                #UI/UX & #website
              </p>
              <a
                href="https://ebonybeautyhaven.com/"
                target="_blank"
                className="work-tag text-center text-xl p-2 rounded-full project-link"
                rel="noopener"
              >
                View work
              </a>
            </div>
          </div>

          <div className="work-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <img
              src={LarksBanner}
              alt="A screenshort of a website landing page"
              className="work-item-image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-md"
            />
            <div className="work-other-container">
              <h3 className="work-name font-semibold text-2xl sm:text-3xl">
                Larks podcast
              </h3>
              <p className="work-description w-80 py-5 text-xl">
                Larks Podcast is a contemporary podcast that's more about the
                "laffs" than the "feels."
              </p>
              <p
                id="work-type"
                className="work-tag mb-10 p-2 text-center rounded-full text-sm"
              >
                #UI/UX #WebApp
              </p>
              <a
                href="https://larkspodcast.com"
                target="_blank"
                className="work-tag text-center text-xl p-2 rounded-full project-link"
                rel="noopener"
              >
                View work
              </a>
            </div>
          </div>

          <div className="work-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <img
              src={AdeolaAzeez}
              alt="A screenshort of a website landing page"
              className="work-item-image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-md"
            />
            <div className="work-other-container">
              <h3 className="work-name font-semibold text-2xl sm:text-3xl">
                Adeola Azeez
              </h3>
              <p className="work-description w-80 py-5 text-xl">
                A political campaign web presence for Adeola Azeez.
              </p>
              <p
                id="work-type"
                className="work-tag mb-10 p-2 text-center rounded-full text-sm"
              >
                #website
              </p>
              <a
                href="https://adeolaazeez.com/"
                target="_blank"
                className="work-tag text-center text-xl p-2 rounded-full project-link"
                rel="noopener"
              >
                View work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-section" className="h-[50rem] px-10 sm:px-10">
        <div
          id="contact-section__details"
          className="max-w-[950px] h-[70%] mx-auto rounded-xl flex flex-col sm:flex-row items-center justify-center mb-10"
        >
          <div
            id="how-to-contact"
            className="flex flex-col justify-between items-center px-5 text-white text-md"
          >
            <h1 id="header" className="text-4xl sm:text-5xl font-semibold mb-2">
              Get In Touch
            </h1>
            <p id="description" className="my-5">
              We're available to attend to you. Reach out to us today:
            </p>

            <p className="contact-us-ways mb-5">
              Fill{" "}
              <Link to="/contact">
                <span className="border-b-2 hover:border-b-4 border-solid border-[#9eff51]">
                  contact form
                </span>{" "}
                and tell us about the project.
              </Link>
            </p>

            <div className="contact-us-ways h-auto mb-5">
              <p className="font-regular p-1 mb-2">Reach us on social media:</p>

              <div
                id="contact-icons"
                className="flex flex-row justify-around align-items flex-wrap"
              >
                <div className="icons items">
                  <a
                    href="https://twitter.com/duoworkhq"
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
              </div>
            </div>

            <p className="font-regular leading-snug mb-2">
              Want to send us an email instead?
            </p>
            <a
              href="mailto:reach.duowork@gmail.com"
              className="custom-bg-green-accent rounded-full !px-4 !py-2 text-black"
            >
              reach.duoworkhq@gmail.com
            </a>
          </div>
          <StaticImage
            src="../assets/images/landingPageImage.jpeg"
            alt=""
            width={350}
            height={350}
            className="rounded-md hidden sm:block"
          />
        </div>
      </section>
    </Layout>
  );
}
