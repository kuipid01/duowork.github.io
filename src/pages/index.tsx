import React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO"
import Button from "../components/Button"

import bgImage from "../assets/images/landingPageImage.jpeg"
import projectionsSVG from "../assets/illustrations/projections.svg"

import ReactTypingEffect from "react-typing-effect"

export default function LandingPage() {
  const landingPageHomeStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepat: "no-repeat",
    backgroundPosition: `top`,
    backgroundSize: `cover`,
  }

  const serviceStyle = {
    height: 100,
  }

  const contactStyle = {}

  return (
    <main id="duowork">
      <section
        id="landing-page-home"
        className="h-screen"
        style={landingPageHomeStyle}
      >
        <div id="overlay">
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
              className="text-white text-center mt-10 self-center px-2"
              style={{ maxWidth: 500 }}
            >
              Crisp customs software solutions for your existing projects,
              products, and your next big idea 🛠✨
            </p>

            <div className="services my-10 text-white flex justify-center items-center" style={serviceStyle}>
              <ReactTypingEffect
                text={[
                  "Product Design.",
                  "Full-stack development.",
                  "Business automation.",
                ]}

                displayTextRenderer={(text, index) => {
                  return (<h1 className="text-2xl font-light">{text}</h1>)
                }}

                speed={50}
                eraseSpeed={100}
                eraseDelay={500}
                typingDelay={200}
              />
            </div>

            <div id="contact" className="text-white">
              <div
                id="contact-icons"
                className="flex flex-row justify-evenly align-items flex-wrap"
              >
                <div className="icons items">
                  <a href="mailto:reach.duowork@gmail.com">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export const Head = () => (
  /* Valid properties: location.pathname,params, data, pageContext */

  <SEO />
)
