import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../layouts/layout"
import SEO from "../../components/SEO"
import bg from "../../assets/images/bgDuoWork.jpg";
import img7 from "../../assets/images/img7.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination, Navigation } from "swiper";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();




export default function Blog({ data }: any) {
  const arr = [1, 2, 3, 5, 7, 6, 9, 10, 7];
  const arr2 = [1, 2,];

  const posts = data.allMdx.nodes
  const image1: any = getImage(posts[0].frontmatter.hero_image)

  const postsCol = posts.slice(1, 3)

  const [slidesPerView, setSlidesPerView] = useState(6)
  const screenWidth = window.innerWidth;


  // import function to register Swiper custom elements
let swiperButtonStyles:React.CSSProperties = {
  position:'absolute',
  top:'50%',
  transform:'translateY(-50%)',
  width:"40px",
  height:'40px',
color:'black',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  cursor:'pointer'

}


  return (
    <Layout>

      {/* Test Blog design  Starts*/}
      <section className=" blogSectionBegins px-[10px] ">
        <div className=" px-[20px] md:px-[70px] lg:[90px] flex justify-center items-center flex-col">

          <div className="breadcrumb-nav mb-10   pt-5 text-center text-sm">
            <Link to="/" className="custom-text-dark">
              Home
            </Link>
            <small className="mx-1 text-gray-300">{">"}</small>
            <Link
              to={`/blog`}
              className=""
            >  <small className="text-[#939498]">Blog</small>
            </Link>


          </div>
          <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-[8px]">
            Blog
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
            tempora eligendi obcaecati maxime dignissimos sequi aspernatur
            quibusdam laborum vel exercitationem.
          </p>
          <div className="w-full flex mb-[76px] text-white items-center pl-[40px] h-[350px] md:h-[450px] relative">
            <img
              src={bg}
              className="absolute top-0 rounded-[8px] overflow-hidden  left-0 w-full h-full object-cover"
              alt=""
            />
            <div
              // style={bgStyle}
              className="absolute bgStyle  h-full  top-0 left-0 w-full"
            ></div>
            <div className="absolute bottom-[49px]">
              <div className="rounded-[100px] mb-[16px] text-black bg-[#9EFF51] py-6 w-fit h-[32px] px-[12px] flex justify-center items-center">
                {" "}
                <span className="w-[6px] h-[6px] rounded-full mr-[6px] bg-[#222222]"></span>{" "}
                <span> Technology </span>
              </div>
              <h1 className="font-[600] text-[20px] md:text-[36px] leading-6 md:leading-[44px] text-left max-w-[816px] mb-[24px]">
                Lorem ipsum dolor sit amet consectetur. Neque non iaculis integer
                malesuada.
              </h1>
              <div className="flex items-center justify-start gap-[15px]">
                <img
                  src={img7}
                  className="md:w-[57px] w-[30px] h-[30px] md:h-[57px] rounded-full object-cover"
                  alt=""
                />
                <div>
                  <p>Dennis Sadah</p>
                  <div className="flex justify-center items-center">
                    {" "}
                    <small className="font-[600] text-[10px] md:text-[16px] leading-[19px]">
                      June 15, 2023
                    </small>{" "}
                    <div className="w-[4px] h-[4px] rounded-full text-white bg-white mx-3 md:mx-10"></div>{" "}
                    <small className="font-[400] text-[9px] md:text-[14px] leading-[10px] md:leading-[17px]">
                      5 Min Read
                    </small>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[59px] flex justify-center items-center  h-[47px]  text-black bg-[#26311d] absolute bottom-0 right-0"></div>
            <div className="w-[64px] flex justify-center items-center  h-[58px]  text-black bg-[#78985e] absolute bottom-0 right-[11px]"></div>
            <div className="w-[69px] flex justify-center items-center  h-[69px]  text-black bg-[#9EFF51] absolute bottom-0 right-[21px]">
              <div className="flex w-fit h-fititems-start justify-center">
                <h1 className="text-[25px] font-[700]">01</h1>
                <div className="h-[20px] my-auto w-[1px] rotate-[5deg]  bg-gray-700"></div>
                <h1 className="text-[12.8571px] pt-1 text-[#222222] font-[500]">
                  6
                </h1>
              </div>
            </div>
          </div>
          <h1 className='text-3xl mb-[71px]'> &#8595; </h1>

          {/* <img className=" mx-auto mb-[71px]" src={arrowDown} alt="" /> */}

          <div className="w-full h-fit mb-[66px] font-[600] text-[24px]  items-center  justify-between flex ">
            <div className="flex w-fit  h-fit gap-[10px] justify-center items-center">
              {" "}
              <h1 className='text-[13px] md:font-[600] md:text-[24px] md:leading-[32px] '>Browse The Category </h1>{" "}
              <div className="mt-[3px] md:mt-[10px] w-[35px] h-[1px] bg-black"></div>
            </div>
            <Link to={'/blog/category'}>
              <div className="flex gap-[8px] h-fit  w-fit  justify-center items-center">


                <h1 className='text-[13px] md:font-[600] md:text-[24px] md:leading-[32px]'>see all category </h1>
                <p className=" text-xl ">&#8594;</p>
              </div>
            </Link>
          </div>
        </div>


        <div className="flex mb-[50px] justify-evenly items-center h-fit w-full gap-[41px]">


          <div className="w-screen  relative flex justify-center items-center h-[350px]">
           <div   className="flex  justify-center w-[80%]  pt-[40px] pl-[20px]    h-full mx-auto   items-center flex-row">
             <Swiper

               slidesPerView={slidesPerView}

               spaceBetween={5}

               pagination={{

                 clickable: true,

               }}

               navigation={{
                 prevEl: '.swiper-button-prev',
                 nextEl: '.swiper-button-next'
               }}

               modules={[Pagination, Navigation]}
               className="flex  justify-center   h-full mx-auto swiper-wrapper  items-center  flex-row"
             >
               {arr.map((item) => (
                 <SwiperSlide>
                   <div
                     key={item}
                     className="  relative rounded-[10px] overflow-hidden h-[221px] flex justify-center items-center"
                   >
                     <img
                       src={img7}
                       className="w-full absolute top-0 right-0 h-full object-cover"
                       alt="img"
                     />
                     <div

                       className=" absolute bgStyle2 w-full h-full top-0 left-0 "
                     ></div>
                     <h1 className="relative text-white">Design</h1>
                   </div>

                 </SwiperSlide>
               ))}

             </Swiper> 
            </div> 
           
            <div style={swiperButtonStyles} className="swiper-button-prev">
            
          </div>
          <div style={swiperButtonStyles} className="swiper-button-next">

            </div>
          
          </div>



        </div>
        {/* //featuresd section begins */}
        <div className="  px-[20px] md:px-[70px] lg:[90px] w-full">
          <h1 className="font-[600] text-[24px] mb-[64px]">Featured</h1>
          <div className="md:flex-row flex flex-col w-full mb-[223px] gap-[56px]">
            <div className="w-full  md:w-1/2">
              <Link
                to={`/blog/${posts[0].frontmatter.slug}`}
                className="h-full w-full"
              >

                <GatsbyImage
                  image={image1}
                  alt={posts[0].frontmatter.hero_image_alt}
                  className="w-full rounded-[8px] h-[244px] mb-[32px] object-cover"
                // style={{width: 300, height: 200}}
                />
                {/* <img src={img7} className="w-full rounded-[8px] h-[244px] mb-[32px] object-cover" alt="" /> */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center ">
                    <GatsbyImage
                      image={image1}
                      alt={posts[0].frontmatter.hero_image_alt}
                      className="w-[40px]  h-[40px] rounded-full object-cover mr-[14px]"
                    // style={{width: 300, height: 200}}
                    />
                    {/* <img src={img7} className="w-[40px]  h-[40px] rounded-full object-cover mr-[14px]" alt="" /> */}

                    <div className="flex justify-center items-center gap-3 text-[14px] font-[500]">
                      <span>John Doe</span>
                      <span className="mx-[4px] my-auto">.</span>
                      <span> {posts[0].frontmatter.date}</span>
                    </div>

                  </div>
                  <h1 className="font-[600] mb-[12px] text-[24px] text-left">
                    {posts[0].frontmatter.title}
                  </h1>
                  <p className="font-[400] mb-[12px] text-[16px] text-left">
                    {posts[0].frontmatter.title}
                  </p>
                  <div className="bg-[#9eff51] rounded-[4px] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                    <button >Explore </button>
                    <p className="w-[10px] text-xl  h-full flex items-center">&#8599;</p>
                    {/* <img src={explore} className="w-[10px] h-[10px]" alt="" /> */}
                  </div>

                </div>

              </Link>
            </div>
            <div className=" w-full md:w-1/2  h-fit flex flex-col gap-[20px] md:gap-[41px]">


              {
                postsCol.map((post: any) => {
                  const image: any = getImage(post.frontmatter.hero_image)
                  return (<div key={post.id} className="w-full h-fit sm:h-fit">
                    <Link
                      to={`/blog/${post.frontmatter.slug}`}
                      className="h-full w-full"
                    >
                      <div className="flex flex-col sm:flex-row  w-full   gap-[24px] h-fit ">
                        <GatsbyImage
                          image={image}
                          alt={post.frontmatter.hero_image_alt}
                          className="w-full sm:w-[60%] h-full rounded-[8px] object-cover"
                        // style={{width: 300, height: 200}}
                        />
                        {/* <img src={img7} className="w-[60%] h-full rounded-[8px] object-cover" alt="" /> */}

                        <div className="w-full sm:w-[39%]">
                          <div className="flex justify-start items-center text-[12px]">
                            <GatsbyImage
                              image={image}
                              alt={post.frontmatter.hero_image_alt}
                              className="w-[40px]  h-[40px] rounded-full object-cover mr-[10px]"
                            // style={{width: 300, height: 200}}
                            />
                            {/* <img src={img7} className="w-[40px]  h-[40px] rounded-full object-cover mr-[14px]" alt="" /> */}

                            <span className="mr-2">DuoWork</span>
                            <span>.</span>
                            <span>   {post.frontmatter.date}</span>
                          </div>
                          <h1 className="font-[600] mb-[12px] text-[18px] text-left">
                            {post.frontmatter.title}
                          </h1>
                          <p className="font-[400] mb-[12px] text-[16px] text-left">
                            {post.frontmatter.title}
                          </p>
                          <div className="bg-[#9eff51] rounded-[4px] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                            <button >Explore </button>
                            <p className="w-[10px] text-xl  h-full flex items-center">&#8599;</p>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>)
                }
                )
              }
            </div>
          </div>
        </div>
      </section>
      {/* Test Blog design  Ends*/}
      {/* <section className="px-10 blog-container h-auto lg:h-screen post-container">
        <div className="sm:h-20 mb-0 mt-5 sm:mt-10 blog-header">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            <span className="underline-color-green-light">
              Duowork articles
            </span>
          </h1>
        </div>

        <div className="breadcrumb-nav text-md">
          <Link to="/">
            <small className="text-gray-800">Home</small>
          </Link>
          <small className="breadcrumb-divide mx-1">/</small>
          <small className="text-gray-400">blog</small>
        </div>

        <div
          id="blog-items-container"
          className="flex items-center justify-start flex-wrap my-5"
        >
          {posts.map((post: any) => {
            const image: any = getImage(post.frontmatter.hero_image)

            return (
              <article
                key={post.id}
                className="blog-items w-80 h-96 rounded-md shadow-md mt-5 sm:mr-5"
              >
                <Link
                  to={`/blog/${post.frontmatter.slug}`}
                  className="h-full blog-item-link"
                >
                  <GatsbyImage
                    image={image}
                    alt={post.frontmatter.hero_image_alt}
                    className="w-full rounded-t-md blog-item-image"
                    style={{width: 300, height: 200}}
                  />
                  <div className="mx-2 blog-item-text-container">
                    <div className="w-full my-5 blog-item-tag-container overflow-x-scroll">
                      {post.frontmatter.tags.map((tag: string, i: number) => (
                        <small
                          key={i}
                          className="h-10 text-gray-400 mr-3 p-1 rounded-sm blog-item-tag"
                        >
                          #{tag}
                        </small>
                      ))}
                    </div>
                    <div className="blog-item-date-container my-2">
                      <small className="text-gray-400 blog-item-date">
                        {post.frontmatter.date}
                      </small>
                    </div>
                    <h2 className="blog-item-title text-2xl text-gray-800">
                      {post.frontmatter.title}
                    </h2>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </section> */}
    </Layout>
  )
}

export const Head = () => <SEO title="Blog" />

export const query = graphql`
  query blogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, Y")
          slug
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          tags
        }
        id
      }
    }
  }
`
