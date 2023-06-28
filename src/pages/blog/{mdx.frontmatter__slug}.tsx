/* This component renders blog post using using slug identifier. The file name follows
  a format for capturing slug identifier from the URL. */

import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../layouts/layout";
import Authors from "../../components/getBlogAuthor";
import { getImgPlatform } from "../../utils/getImgPlatform";
import Head from "../../components/Head";
import img7 from "../../assets/images/img7.jpg";

const Blog = () => {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 7];
  const arr2 = [1, 2];
  let bgStyle = {
    borderRadius: "8px",
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
  };
  let bgStyle2 = {
    backgroundImage:
      "linear-gradient(0deg, rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6))",
  };
  return (
    <div className="pl-[361px]  pr-[351px] mt-[40px]">
      <ul className="flex mb-[64px] justify-center items-center gap-[14px] text-[16px] text-[#313133]">
        <li>Home</li>
        <p className="w-[10px] mx-[14px] text-[7px] text-[#939498]  h-full flex items-center">
          &#10148;
        </p>
        <li className="text-[#939498]">Blog</li>
        <p className="w-[10px] mx-[14px] text-[7px] text-[#939498]  h-full flex items-center">
          &#10148;
        </p>
        <li className="text-[#939498]">Technology</li>
      </ul>

      <span className="py-[6px] px-[12px] bg-[#9eff51] rounded-[6px] text-[14px] font-[500] leading-[20px]">
        Technology
      </span>
      <h1 className="mt-[16px] leading-[44px] font-[600] text-[36px] mb-[20px] text-left">
        How to work with software development companies and agencies.
      </h1>
      <div className="mb-[32px] flex ">
        <img
          src={img7}
          className="w-[36px] h-[36px] object-cover mr-[12px] rounded-full"
          alt=""
        />
        <span className=" leading-[24px] mr-[48px] font-[500] text-[16px] mb-[20px] ">
          Dennis Sadoh
        </span>

        <span className=" leading-[24px]  font-[400] text-[16px] mb-[20px] ">
          June 15, 2023 (Updated on July 01, 2023)
        </span>
      </div>
      <div className="w-full overflow-hidden  h-[462px] flex justify-center items-center">
        <img
          src={img7}
          className="w-full h-full object-cover mb-[32px] rounded-[12px]"
          alt=""
        />
      </div>
      <p className="font-[400] leading-[24px] text-[16px]">
        Software development companies and agencies promise to deliver on the
        digital vision of entrepreneurs, businesses, startups or just about
        anybody that wants to put out a software product or platform. You happen
        t have an exciting idea that solves a particular problem and you want to
        get started with it right away but you don't know how or maybe you've
        experienced rocky start before and you'd want to prevent past bitter
        events from repeating itself, Not to mention the near annoying (it can
        be annoying) onboarding process and the discrepancies in between
        everything for both you and the development company. At Duowork, we've
        thought about this carefully and came up with these 9 steps you, as a
        potential client, can follow the next you'd want to work with a
        development company.
      </p>
    </div>
  );
};

export default Blog;

// export default function Blog({ location, data, children }: any) {
//   const post = data.allMdx.nodes[0];
//   const title = post.frontmatter.title;
//   const description = post.frontmatter.description;
//   const date_updated = post.frontmatter.date_updated;
//   const image: any = getImage(post.frontmatter.hero_image);
//   const author = post.frontmatter.author;

//   return (
//     <Layout>
//       <Head title={title} description={description} image={image} />
//       <article className="sm:mx-10 mt-20 mb-10 flex flex-col justify-center items-center blog-content-container">
//         <div className="blog-item w-3/4">
//           <div className="blog-item-intro">
//             <h1 className="text-1xl sm:text-3xl font-bold text-center blog-item-intro-title pb-5 pt-5">
//               <span className="underline-color-green-light">
//                 {post.frontmatter.title}
//               </span>
//             </h1>

//             <div className="breadcrumb-nav text-md text-center pb-5">
//               <Link to="/" className="text-gray-800">
//                 <small>Home</small>
//               </Link>
//               <small className="breadcrumb-divide mx-1">/</small>
//               <Link to="/blog" className="text-gray-800">
//                 <small>Blog</small>
//               </Link>
//               <small className="breadcrumb-divide mx-1">/</small>
//               <small className="text-gray-400">
//                 {location.pathname.split("/")[2]}
//               </small>
//             </div>

//             <div className="blog-item-intro-image">
//               <GatsbyImage
//                 image={image}
//                 alt={post.frontmatter.hero_image_alt}
//                 className="w-full rounded-t-xl blog-item-image"
//               />
//               <div className="blog-item-intro-image-creator text-center py-2 text-gray-400 text-xs">
//                 Image by{" "}
//                 <span className="text-gray-500">
//                   {post.frontmatter.hero_image_credit_text}
//                 </span>{" "}
//                 on{" "}
//                 <a
//                   href={post.frontmatter.hero_image_credit_link}
//                   rel="noopener"
//                   target="_blank"
//                   className="text-gray-500"
//                 >
//                   {getImgPlatform(post.frontmatter.hero_image_credit_link)}
//                 </a>
//               </div>
//             </div>
//             <div className="w-full my-5 blog-item-tag-container pl-5 overflow-x-scroll">
//               {post.frontmatter.tags.map((tag: string, i: number) => (
//                 <small
//                   key={i}
//                   className="h-10 text-gray-400 mr-3 p-1 rounded-sm blog-item-tag"
//                 >
//                   #{tag}
//                 </small>
//               ))}
//             </div>
//             <div className="blog-item-intro-footer text-sm flex flex-col md:flex-row items-start md:items-center w-full w-full-max pl-5 mt-10 mb-5">
//               <Authors className="text-gray-500" author={author} />{" "}
//               <hr className="text-gray-400 bg-gray-400 w-10 my-2 sm:mx-5" />{" "}
//               <span className="custom-text-green-dark">
//                 {post.frontmatter.date}
//               </span>{" "}
//               <hr className="text-gray-400 bg-gray-400 w-10 my-2 sm:mx-5" />{" "}
//               <span className="custom-text-green-dark">
//                 {post.frontmatter.time}
//               </span>
//             </div>
//             {date_updated ? (
//               <div className="pl-5 mt-2 mb-10 text-sm flex items-between text-gray-500">
//                 Updated{" "}
//                 <hr className="text-gray-400 bg-gray-400 w-5 my-2 sm:w-10 mx-2 sm:mx-5" />
//                 <span className="custom-text-green-dark">{date_updated}</span>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>

//           <div className="blog-item-body mt-10 min-min w-11/12 md:w-10/12">
//             {children}
//           </div>
//         </div>
//       </article>
//     </Layout>
//   );
// }

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
