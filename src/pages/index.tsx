import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// Media assets
import bgImage from "../assets/images/cloudPlayImg.png";
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
              Tailor-made design and Software Solution for{" "}
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
          Our Services
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
          className="px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-start md:justify-items-center gap-8"
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

         <div className="md:col-span-3 flex flex-col md:flex-row justify-center h-auto">
            <div
              id="backend-development-service"
              className="services basis-1/3 rounded-xl p-7 mb-7 md:mb-0 md:mr-7"
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
        </div>
      </section>

      <section id="portfolio-section" className="w-auto h-auto px-2 sm:px-10 mb-20">
        <span className="text-gray-800 text-md font-bold text-center block mb-5">
            Our Portfolio
        </span>
        <h2
          id="service-header"
          className="mb-5 mt-2 text-center text-3xl font-bold"
        >
          Project we've <span className="custom-bg-green-accent">worked on</span>
        </h2>
        
        <p className="text-center max-w-3/5 w-3/5 mx-auto mb-10 mt-5 text-sm font-light leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic
          asperiores, libero repellat totam perferendis corporis doloribus
          accusantium ipsum deserunt ratione in.
        </p>

        <div id="portfolio" className="flex flex-col items-center justify-center">
          <div className="portfolio-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <StaticImage
              src="../assets/images/portfolio/Ebonybeauty2.jpeg"
              alt="A screenshort of a website landing page"
              className="portfolio-item__image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-xl"
            />
            <div className="portfolio-item__description-container">
              <h3 className="portfolio-name font-semibold text-2xl sm:text-3xl">
                Ebony Beauty
              </h3>
              <p className="portfolio-description w-80 py-5 text-md text-gray-500">
                Ebony beauty is a lagos-based retail store with aim to be the
                ultimate destination for beauty products.
              </p>
              <p
                className="portfolio-tag mb-10"
              >
                E-commerce web app
              </p>
              <a
                href="https://ebonybeautyhaven.com/"
                target="_blank"
                className="text-center text-sm font-light py-2 rounded-full portfolio-link"
                rel="noopener"
              >
                View work {" "} <span className="text-md pt-1">&gt;</span>
              </a>
            </div>
          </div>

          <div className="portfolio-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <StaticImage
              src="../assets/images/portfolio/larks-banner2.png"
              alt="A screenshort of a website landing page"
              className="portfolio-item__image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-xl"
            />

            <div className="portfolio-item__description-container">
              <h3 className="portfolio-name font-semibold text-2xl sm:text-3xl">
                Larks podcast
              </h3>
              <p className="portfolio-description w-80 py-5">
                Larks Podcast is a contemporary podcast that's more about the
                "laffs" than the "feels."
              </p>
              <p
                className="portfolio-tag mb-10"
              >
               Podcasting web app
              </p>
              <a
                href="https://larkspodcast.com"
                target="_blank"
                className="text-center text-sm rounded-full portfolio-link"
                rel="noopener"
              >
                View work {" "} <span className="text-md">&gt;</span>
              </a>
            </div>
          </div>

          <div className="portfolio-item flex flex-col md:flex-row items-center sm:ml-20 pt-10">
            <StaticImage
              src="../assets/images/portfolio/AdeolaAzeez2.jpeg"
              alt="A screenshort of a website landing page"
              className="portfolio-item__image w-6/12 h-80 rounded-lg max-w-full h-auto mb-10 sm:mr-20 shadow-xl"
            />
            <div className="portfolio-item__description-container">
              <h3 className="portfolio-name font-semibold text-2xl sm:text-3xl">
                Adeola Azeez
              </h3>
              <p className="portfolio-description w-80 py-5">
                A political campaign web presence for Adeola Azeez.
              </p>
              <p
                className="portfolio-tag mb-10"
              >
                website
              </p>
              <a
                href="https://adeolaazeez.com/"
                target="_blank"
                className="text-center text-sm rounded-full portfolio-link"
                rel="noopener"
              >
                View work {" "} <span className="text-md">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process-section" className="px-10 custom-bg-dark h-auto pb-10 pt-10 sm:pt-20 mb-40">
        <div className="text-white text-center mb-10">
          <h3 className="text-3xl font-bold mb-5">Our <span className="custom-bg-green-accent custom-text-dark">work process</span></h3>
          <p className="max-w-[35rem] mx-auto text-sm font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum a quam 
            dolores illo numquam aut libero odio, necessitatibus iure ab praesentium, 
            voluptate sunt ut ex deleniti! Autem, velit eos?</p>
        </div>

        <div
          id="process-container"
          className="grid grid-cols-1 md:grid-cols-2 justify-evenly justify-items-center gap-8"
        >
          <div id="discovery-scope-process" className="process">
            <div className="process-title">
              <StaticImage
                src="../assets/icons/discovery-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title"><span className="custom-underline-green-accent">Disc</span>overy & Scope</strong>
            </div>
            <p className="process-description text-gray-700">
              We believe in near-perfection but only when we understand what
              you the goal is. Here we gather information on the solution you want to solve,
              business requirement you want to meet and the processes you want automated. 
              This allow us to build within the right confinement.
            </p>
          </div>

          <div id="prototyping-design" className="process">
            <div className="process-title">
            <StaticImage
                src="../assets/icons/design-prototype-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title"><span className="custom-underline-green-accent">Des</span>ign & Prototype</strong>
            </div>
            <p className="process-description text-gray-700">
              We bring over the knowledge gained from the scope and discovery
              phase and create early designs and/or then the Minimum Viable
              Product (MVP) to test the vision idea.
            </p>
          </div>

          <div id="project-development-process" className="process">
            <div className="process-title">
            <StaticImage
                src="../assets/icons/project-development-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title"><span className="custom-underline-green-accent">Pro</span>ject Development</strong>
            </div>
            <p className="process-description text-gray-700">
              In the development phase, we run a full cycle
              development intended to implement the full solution and requirements. 
              We build and test so the project is as solid as possible to go live.
            </p>
          </div>

          <div id="launch-maintenance-process" className="process">
            <div className="process-title">
            <StaticImage
                src="../assets/icons/launch-training-maintenance-icon.png"
                alt="Product design icon"
                width={40}
                height={40}
                className="process-number"
              />
              <strong className="title"><span className="custom-underline-green-accent">lau</span>nch, Training & Maintenance</strong>
            </div>
            <p className="process-description text-gray-700">
              This is where the solution is ready to go live. We
              launch the project and conduct an onboarding training for staff. 
              We provide support and are always availble for future project modifications
            </p>
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
              reach.@duowork.tech
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
