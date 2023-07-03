/* This component renders blog post using using slug identifier. The file name follows
  a format for capturing slug identifier from the URL. */

import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../layouts/layout";
import Authors from "../../components/getBlogAuthor";
import { getImgPlatform } from "../../utils/getImgPlatform";
import Head from "../../components/Head";

export default function Blog({ location, data, children }: any) {
  const post = data.allMdx.nodes[0];
  const title = post.frontmatter.title;
  const description = post.frontmatter.description;
  const date_updated = post.frontmatter.date_updated;
  const image: any = getImage(post.frontmatter.hero_image);
  const author = post.frontmatter.author;
  console.log(post);
  return (
    <Layout>
      <Head title={title} description={description} image={image} />
      <article className="lg:pl-[201px] sm:px-[60px] px-[40px] mb-[165px]  lg:pr-[201px] mt-[40px]">
        <div className="breadcrumb-nav mb-10   pt-5 text-center text-sm">
          <Link to="/" className="custom-text-dark">
            Home
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <Link to={`/blog`} className="">
            {" "}
            <small className="text-[#939498]">Blog</small>
          </Link>
          <small className="mx-1 text-gray-300">{">"}</small>
          <Link to={`/blog/category`} className="">
            <small className="text-[#939498]">Technology</small>
          </Link>
        </div>

        <span className="py-[6px] px-[12px] bg-[#9eff51] rounded-[6px] text-[14px] font-[500] leading-[20px]">
          Technology
        </span>
        <h1 className="mt-[16px] leading-[44px] font-[600] text-[36px] mb-[20px] text-left">
          {post.frontmatter.title}
        </h1>
        <div className="mb-[32px] h-[40px]  flex items-center ">
          <GatsbyImage
            image={image}
            alt={post.frontmatter.hero_image_alt}
            className="w-[36px] h-[36px] object-cover mr-[12px] rounded-full"
          />
          <span className=" leading-[24px] mr-[48px] font-[500] text-[12px]  md:text-[16px]  ">
            <Authors author={author} />
          </span>

          <span className=" leading-[24px]  md:font-[400] text-[12px]  md:text-[16px]  ">
            {post.frontmatter.date} {post.frontmatter.time}{" "}
            {date_updated ? <span>( Updated {date_updated} )</span> : ""}
          </span>
        </div>
        <div className="w-full overflow-hidden rounded-[12px]  h-[462px] flex justify-center items-center">
          <GatsbyImage
            image={image}
            className="w-full h-full object-cover mb-[32px] rounded-[12px]"
            alt=""
          />
        </div>
        {/* <p className="font-[400] blog-item-body  leading-[24px] text-[16px]">
                {children}
      </p> */}
        <div className="font-[400] text-[16px] leading-[24px] text-[#3b3c4a]">
          <p className="my-[32px]">
            Software development companies and agencies promise to deliver on
            the digital vision of entrepreneurs, businesses, startups or just
            about anybody that wants to put out a software product or platform.
            You happen t have an exciting idea that solves a particular problem
            and you want to get started with it right away but you don't know
            how or maybe you've experienced rocky start before and you'd want to
            prevent past bitter events from repeating itself, Not to mention the
            near annoying (it can be annoying) onboarding process and the
            discrepancies in between everything for both you and the development
            company. At Duowork, we've thought about this carefully and came up
            with these 9 steps you, as a potential client, can follow the next
            you'd want to work with a development company.
          </p>
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">1.</span> PEN DOWN CORE FEATURES AND
            REQUIREMENTS FOR MVP{" "}
          </p>
          <p className="my-[32px]">
            This is super important because it determines the right approach to
            development. Your product or platform should, at its initial stage,
            only have the functions needed to get it off the ground. These are
            called core features and they determine the Minimum Viable Product
            (MVP) which is the first product (app) that is available to the
            market (users) for use. Determining core features for your app is
            crucial to what you want to achieve.
          </p>
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">1.</span> Here is how to determine features
            for your app.
          </p>
          <ul className=" list-disc mt-[16px] flex flex-col gap-[10px] pl-[64px]">
            <li>
              {" "}
              Define the users of your app (The people you're solving the
              problem for.)
            </li>
            <li>Define and priotise their goals/needs.</li>
            <li>Brainstorm on how to solve the problem</li>
            <li>
              Write down the must-haves (core features) features for the app.
            </li>
            <li>
              Should-have features (Future features. Not needed to get the app
              off the ground.)
            </li>
            <li>
              Nice to have features (Not necessarily because of low value.)
            </li>
          </ul>
          <div className="w-full overflow-hidden rounded-[12px] my-[32px]  h-[462px] flex justify-center items-center">
            <GatsbyImage
              image={image}
              className="w-full h-full object-cover mb-[32px] rounded-[12px]"
              alt=""
            />
          </div>
          <div className="w-full md:w-[750px] h-[100px] mx-auto bg-[#e8e8ea] rounded-[12px] mb-[32px] flex justify-center items-center flex-col">
            <span className="font-[400] text-[14px] leading-[20px] text-[#696a75]">
              Advertisement
            </span>
            <p className="font-[600] text-[20px] leading-[24px] text-[#696a75]">
              You can place ads
            </p>
            <span className="font-[400] text-[18px] leading-[26px] text-[#696a75]">
              750x100{" "}
            </span>
          </div>
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">2.</span> CUSTOM OR PACKAGE SOFTWARE?
          </p>
          <p className="my-[32px]">
            There are two to achieve what you want to build: custom solution or
            Packaged software. Custom software is built from scratch using code
            to not only match requirements but allow for the creation of future
            software features tailored to user needs. Package software use
            of-the-shell tools (CMSs like WordPress) and no/low-code platforms
            (like Webflow) to meet user needs. There is no better bet between
            the two approaches at the surface. However, careful consideration of
            your requirement will determine which will be a better bet. For
            instance, you want an e-commerce store that needs to be up and
            running ASAP and you are on a budget. The better approach would be
            to use a Packaged Sofware or use a plugin like Woocommerce or
            Magento on a CMS like WordPress. This software is built to already
            handle the normal feature of an e-commerce store so besides setup,
            there isn't going to be much development work for the developer.
            this approach is fast and cheap, but not scalable, secure and
            performant enough to handle the traffic. For scalability, security
            and performance, a custom approach is the right choice. This however
            isn't cheap and fast, at least not in the initial stage, but will
            get the job done. At Duowork, we are primarily a custom software
            development company but provide cheaper development approaches for
            clients to get their MVP products off the ground.
          </p>

          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">3.</span> WHAT DO YOU NEED HELP WITH?
          </p>
          <p className="my-[32px]">
            This is one part that is often done shabbily! Your vision, mission
            and goals are great but only know and understand them. You need to
            communicate to the development company or agency what you want to
            achieve. Take the time to do this via a phone call, email or contact
            form on the company's website. Don't be in a rush about it. Ask
            questions to make sure you're understood. The upside to this is that
            the company might have built a similar app for a client and may have
            an idea or two on how to help you beyond just development. The
            downside is that your ineffective communication could bring about
            wrong implementations and friction to the development process.
          </p>
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">4.</span> IT'S NOT MAGIC, EVEN IT SEEMS LIKE
            IT ✨
          </p>
          <p className="my-[32px]">
            While off-the-shelf software may be faster and custom approach
            slower. There comes a time when things could be slow despite the
            development approach. However, depending on the requirements and
            features, the development company or agency should give you an
            estimated time that takes into account all the steps, nuances and
            possible slow-downs. usually, you'd get 1-3 months for small-sized
            apps, 3 - 6 months for medium-sized apps and 6 - 12 months for
            large-scale apps. Having determined the problem you're to solve in
            step 1, development may or may not be swift.
          </p>

          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">5.</span> IT’S NOT GOING TO BE CHEAP
          </p>
          <p className="my-[32px]">
            Building software is generally not cheap because of the time and
            energy that goes into it. Research the costs and have a budget
            prepared for your project. Development can be challenging even for
            software built with off-the-shelf technologies. Don't go looking for
            a favour or cheap work. Your budget would have to remedy known and
            unforeseen challenges. So before engaging with a development company
            or agency, remember this: Budget! Budget!! Budget!!!
          </p>
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">6.</span> PROVIDE NECESSARY FILES FOR DESIGNS
            AND OTHER ASSETS
          </p>
          <p className="my-[32px]">
            Development companies and agencies will always want to maximize
            their earnings margin by offering to do all the work (supposing they
            have it as part of their services) and they do so convincingly, it's
            okay to push back if you've done part of the work. Say you got a
            freelance product designer to create both the wireframe and the
            UI/UX of your app already. If so then you should provide the
            specifications and other assets (images, logos, etc) to the
            development company or agency.
          </p>
        
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">7.</span> KEEP AGREEMENT COPY
          </p>
          <p className="my-[32px]">
            Papers will be signed to make sure both sides do their work and
            hopefully avoid getting sued. Yeah... it does happen! Always keep a
            copy of any agreement no matter how insignificant you may consider
            it to be. your work and the process involved in bringing it to life
            should be documented (development companies and agencies already
            know this). once done so, anything done that is contrary to what's
            on the document will attract a penalty for both parties as stated in
            the agreement.
          </p>
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">8.</span> STAY IN TOUCH AND GET UPDATES
          </p>
          <p className="my-[32px]">
            Make sure to get a timeline for updates. Being told every other week
            about the progress of development is usually the norm, but certain
            cases differ. So make sure you get a timeline for updates. Usually,
            the project manager or CEO would email or call to give an update.
          </p>
          <p className="font-[600] text-[22px] leading-[28px] text-[#181a2a]">
            {" "}
            <span className="mr-2">9.</span>  CONCLUSION
          </p>
          <p className="my-[32px]">Working with development companies does't have to be difficult. In most cases the companies already have things in place but the potential client does not. use the steps above as a guide for a smooth relationship between you and the company.
At Duowork, we transform digital ideas into reality through custom software solutions. Do you or someone you know have an idea that needs to be brought to life? Reach out to us today 👋🏿
          </p>
        </div>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query blog($id: String) {
    allMdx(
      filter: { id: { eq: $id } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, Y")
          date_updated(formatString: "MMMM DD, Y")
          time
          author
          tags
          slug
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
        tableOfContents
      }
    }
  }
`;
