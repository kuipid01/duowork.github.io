import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { Formik } from "formik"
import { toast } from "react-toastify";

// API
import insertInGoogleSheet from "../api/googleSheetService";
import sendMail from "../api/sendMail";

// components
import Layout from "../components/layout"
import Button from "../components/Button"
import SEO from "../components/SEO"

// Assets
import homeArrow from "../assets/icons/arrow-left-long-solid.svg"

export const Head = () => (
  /* Valid properties: location.pathname,params, data, pageContext */
  <SEO title="Contact" />
)

export default function Contact() {

  const dateObj = new Date();
  const date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`

  const contactFormInitialValues = {
    fullName: "",
    clientEmail: "",
    duoworkSurvey: "",
    duoworkService: "",
    projectDescription: "",
  } as {
    fullName: string;
    clientEmail: string;
    duoworkSurvey: string;
    duoworkService: string;
    projectDescription: string;
  }

  const validateContactForm = (values: any) => {
    const errors = {} as {
      fullName: string
      clientEmail: string
      duoworkSurvey: string
      duoworkService: string
      projectDescription: string
    }

    if (!values.fullName) {
      errors.fullName = "Full name is required"
    } else if (values.fullName.length > 15) {
      errors.fullName = "Full name can only be 15 characters or less"
    }

    if (!values.clientEmail) {
      errors.clientEmail = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.clientEmail)
    ) {
      errors.clientEmail = 'Invalid email address';
    }

    if (!values.duoworkService) {
      errors.duoworkService = "Service selection is required"
    }

    if (!values.projectDescription) {
      errors.projectDescription = "Service description is required"
    } else if (values.projectDescription > 200) {
      errors.projectDescription = "Service description can only be 200 characters or less"
    }

    return errors
  }

  const notify = () => {
    toast.success("Email sent 👍🏿", {
      hideProgressBar: true,
      theme: "light"
    });
  };

  const submitContactForm = async (values: any, {resetForm}: any) => {
    // Insert contact data into google spreasheets
    const requestBody = {
      date: date,
      fullName: values.fullName,
      email: values.clientEmail,
      contactSurvey: values.duoworkSurvey,
      serviceType: values.duoworkService,
      serviceDescription: values.projectDescription
    };
    
    const mail = await sendMail(requestBody);

    if (mail.pass.statusText === 'ok') {
      // Notify user
      notify();

      // const sheet = await insertInGoogleSheet(undefined, requestBody); 
    }

    // Clear form field
    resetForm();
  }

  // useEffect(() => {
  //   console.log(process.env.GATSBY_HEROTU_FORM_KEY);
  // })



  const surveyLabelElemRef = useRef<HTMLLabelElement>(null);
  const surveyElemRef = useRef<HTMLSelectElement>(null);
  const serviceLabelElemRef = useRef<HTMLLabelElement>(null);
  const serviceElemRef = useRef<HTMLSelectElement>(null);

  return (
    <Layout>
      {/*
        Form fileds
        ..........
        FullName Company name(optional)
        Email address 
        Survey -- How they found us
        Pre-filled selection -- Type of project
         - Product design
         - Build a product
         - Automate task
        Text-area -- Project description
        Budget -- 
       */}

      <section
        id="duowork-contact-form"
        className="h-auto"
      >
        <div className="home-arrow px-10 pt-5">
          <Link to="/">
            <img src={homeArrow} alt="Left arrow" />
          </Link>
        </div>
        <div className="py-10 px-10 md:px-14 flex flex-col justify-center sm:flex-row">
        <div
          id="contact-form-left"
          className="contact-form hidden md:block sm:mr-5"
        >
          <h1 className="text-5xl font-semibold text-white mb-5">
            How can we be of service?
          </h1>

          <p className="text-2xl text-white">
            Let us know... fill in the form and we'll get back <br />
            to you ASAP!{" "}
            {/* <i className="fa-solid fa-arrow-right"></i> */}
          </p>

          <div id="contact-us-ways" className="h-auto">
            <p className="font-regular p-1 mb-2 text-lg">
              <span id="or" className="underline">
                or
              </span>{" "}
              <br />{" "}
              <span className="text-white">contact us via our socials:</span>
            </p>

            <div
              id="contact-icons"
              className="flex flex-row justify-start align-items flex-wrap"
            >
              <div className="icons items bg-green-700 h-10 w-10 rounded-xl flex justify-center items-center">
                <a
                  href="https://twitter.com/DuoworkHQ"
                  target={"_blank"}
                  className="text-lg block"
                >
                  <i className="fa fa-twitter fa-1x" aria-hidden="true"></i>
                </a>
              </div>

              <div className="icons items bg-green-700 h-10 w-10 rounded-xl flex justify-center items-center mx-10">
                <a
                  href="https://instagram.com/duoworkhq"
                  target={"_blank"}
                  className="text-lg block"
                >
                  <i className="fa fa-instagram fa-1x" aria-hidden="true"></i>
                </a>
              </div>

              <div className="icons items bg-green-700 h-10 w-10 rounded-xl flex justify-center items-center">
                <a
                  href="https://www.linkedin.com/company/duowork"
                  target={"_blank"}
                  className="text-lg block"
                >
                  <i className="fa fa-linkedin fa-1x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form-right" className="contact-form">
          <div className="h-auto bg-white rounded-lg shadow-md p-5">
            <div id="form-header" className="md:hidden mb-5">
              <h1 className="text-2xl font-semibold text-gray-700">
                How can we help you?
              </h1>
              <p className="font-medium text-gray-700">
                Fill out and send a form!
              </p>
            </div>
            <Formik
              initialValues={contactFormInitialValues}
              validate={validateContactForm}
              onSubmit={submitContactForm}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 md:col-span-3">
                      <input
                        type="text"
                        name="fullName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                        placeholder="Full name"
                        className="mt-1 block w-full text-sm font-medium border-b-2 focus:ring-none focus:outline-none py-2"
                      />
                      <small className="text-red-400">
                        {errors.fullName && touched.fullName && errors.fullName}
                      </small>
                    </div>

                    <div className="col-span-6 md:col-span-3">
                      <input
                        type="email"
                        name="clientEmail"
                        id="client-email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.clientEmail}
                        placeholder="Email"
                        className="select-label mt-1 block w-full text-sm font-medium border-b-2 focus:outline-none py-2"
                      />
                      <small className="text-red-400">
                        {errors.clientEmail &&
                          touched.clientEmail &&
                          errors.clientEmail}
                      </small>
                    </div>

                    <div className="col-span-6 md:col-span-3">
                      <label
                        htmlFor="duowork-survey"
                        className="text-gray-400 w-full block text-sm"
                        ref={surveyLabelElemRef}
                      >
                        How'd you find us?
                      </label>
                      <select
                        name="duoworkSurvey"
                        id="duowork-survey"
                        className="mt-1 block w-full text-sm font-medium bg-white border-b-2 focus:outline-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        ref={surveyElemRef}
                      >
                        <option defaultValue="---">--</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Linkedin">LinkedIn</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Word of mouth">Word of mouth</option>
                        <option value="Other">Other</option>
                      </select>
                      <small className="text-gray-300">
                       Optional but we'd appreciate if you will ✨
                      </small>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <label
                        htmlFor="duowork-service"
                        className="select-label text-gray-400 w-full block text-sm"
                        ref={serviceLabelElemRef}
                      >
                        I need help with...
                      </label>
                      <select
                        name="duoworkService"
                        id="duowork-service"
                        className="mt-1 block w-full text-sm border-b-2 focus:outline-none"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        ref={serviceElemRef}
                      >
                        <option defaultValue="---">--</option>
                        <option value="Product design">Product design</option>
                        <option value="Mobile development">Mobile development</option>
                        <option value="Web app development">
                          Web app development
                        </option>
                        <option value="Task automation">Task automation</option>
                        <option value="Software code management">
                          Software code management
                        </option>
                        <option value="Consultation">Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                      <small className="text-red-400">
                        {errors.duoworkService &&
                          touched.duoworkService &&
                          errors.duoworkService}
                      </small>
                    </div>

                    <div className="col-span-6">
                      <textarea
                        name="projectDescription"
                        id="duwork-project-description"
                        cols={30}
                        rows={10}
                        value={values.projectDescription}
                        className="mt-1 block w-full border-b-2 focus:outline-none"
                        placeholder="Tell about your project..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      <small className="text-red-400">
                        {errors.projectDescription &&
                          touched.projectDescription &&
                          errors.projectDescription}
                      </small>
                    </div>
                  </div>

                  <div id="contact-submission" className="flex flex-col mt-5">
                    <p className="text-gray-400 text-sm mb-5">
                      Your data is safe with us. We don't share data with 3rd
                      parties!
                    </p>

                    <div className="text-right">
                      <Button
                        name="Send form"
                        btnType="submit"
                        btnClass="cta-btn send-contact-form text-white w-full"
                        isLink={false}
                        linkTo={undefined}
                        btnDisabled={isSubmitting}
                      />
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        </div>
      </section>
    </Layout>
  )
}
