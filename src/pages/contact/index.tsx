import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

/* Components */
import Layout from "../../layouts/layout";
import Head from "../../components/Head";
import ContactForm from "./__ContactForm";

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact us" />

      <section id="duowork-contact-form" className="h-auto mt-5 bg-white">
        <div className="breadcrumb-nav mb-10 pt-5 text-center text-sm">
          <Link to="/" className="custom-text-dark">
            Home
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <small className="text-gray-400">Contact us</small>
        </div>

        <div className="text-center mb-10">
          <h1 className="hidden">Contact Duowork</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5 | custom-text-dark">
            How can we be of service?
          </h2>

          <p className="text-sm text-gray-400 font-light text-center px-[3.5rem] sm:px-5 ">
            Let us know by filling form and we'll get back to you ASAP!
          </p>
        </div>

        <div className="py-10 px-5 md:px-10 flex flex-col sm:flex-row justify-center max-w-[60rem] h-auto mx-5 lg:mx-auto rounded-xl mb-10 md:mx-10 sm:mb-20 md:rounded-[2.75rem] | custom-bg-dark">
          <div
            id="contact-form-left"
            className="contact-form hidden md:block sm:mr-5 w-1/2"
          >
            <div
              id="contact-method"
              className="h-auto bg-black h-full pl-5 lg:pl-10 pt-10 flex flex-col justify-between"
            >
                <div className="">
                    <h2 className="font-regular p-1 mb-1 text-2xl text-white">
                        Contact us
                    </h2>
                    <p className="text-sm text-gray-300">Discover the difference!</p>
                </div>

                <div className="text-white flex flex-col items-start justify-between h-[200px]">
                    <div>
                        <i className="fa fa-phone fa-1x" aria-hidden="true"></i> {" "}
                        <a href="tel:+2347030259781">+2347030259781</a>
                    </div>

                    <div>
                        <i className="fa fa-email fa-1x" aria-hidden="true"></i> {" "}
                        <span>reach@duowork.tech</span>
                    </div>

                    <div>
                        <i className="fa fa-location fa-1x" aria-hidden="true"></i> {" "}
                        <span>Abuja, Nigeria</span>
                    </div>
                </div>

                <div
                  id="contact-icons"
                  className="flex items-center justify-between"
                >
                  <div className="flex flex-row justify-start align-items flex-wrap text-white">
                    <div className="icons items h-10 w-10 rounded-xl flex justify-center items-center">
                        <a
                            href="https://twitter.com/DuoworkHQ"
                            target={"_blank"}
                            className="text-lg block underline"
                        >
                            <i className="fa fa-twitter fa-1x" aria-hidden="true">Twitter</i>
                        </a>
                    </div>

                    <div className="icons items h-10 w-10 rounded-xl flex justify-center items-center mx-10">
                        <a
                            href="https://instagram.com/duoworkhq"
                            target={"_blank"}
                            className="text-lg block underline"
                        >
                            <i className="fa fa-instagram fa-1x" aria-hidden="true">IG</i>
                        </a>
                    </div>

                    <div className="icons items h-10 w-10 rounded-xl flex justify-center items-center">
                        <a
                            href="https://www.linkedin.com/company/duowork"
                            target={"_blank"}
                            className="text-lg block underline"
                        >
                            <i className="fa fa-linkedin fa-1x" aria-hidden="true">LinkedIn</i>
                        </a>
                    </div>
                  </div>
                  <StaticImage src="../../assets/svgs/contact-bubble.svg" alt="" width={130} height={130}/>
                </div>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>

        <div id="duowork-contact-form__why-chose-us" className="flex flex-col justify-center sm:flex-row sm:item-center mb-[15rem] mx-5 lg:mx-0">
          <div className="max-w-[30rem] h-auto">
            <h3 className="hidden">Why choose Duowork</h3>
            <h2 className="text-3xl font-semibold mb-10 px-5 sm:px-">
              Why <span className="custom-bg-green-accent">choose us</span>
            </h2>
            <p className="font-light px-2 mb-5 sm:px-5 md:px-0">
              At Duowork, we passionate about helping businesses and startups
              succeed by providing tailor-made software solutions that drives
              growth and innovation.{" "}
              <span className="hidden">
                With years of experience in the industry
              </span>
              Our team of skilled developers, designers, and tech enthusiasts
              is dedicated to delivery high-quality, custom software solutions
              that align with your unique business objectives.
            </p>
          </div>

          <StaticImage
            src="../../assets/images/bgDuowork.jpg"
            alt=""
            width={450}
            height={250}
            className="rounded-md shadow-md md:ml-5"
          />
        </div>
      </section>
    </Layout>
  );
}
