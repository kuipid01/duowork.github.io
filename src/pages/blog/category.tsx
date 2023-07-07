import React from 'react'
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../../components/SEO"
import Layout from "../../layouts/layout"
import img7 from "../../assets/images/img7.jpg";






export default function category() {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 7];
  const image: any = getImage(img7)
  return (
    <Layout>
      <section className="lg:px-[120px] overflow-x-hidden px-[20px] categoryPage mb-[106px]">
   
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
            <small className="mx-1 text-gray-300">{">"}</small>
            <Link
              to={`/blog/category`}
              className=""
            >
              <small className="text-[#939498]">Technology</small>
            </Link>
        </div>
        <div className=" flex justify-center items-center flex-col">
         
          <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-[8px]">
            Technolgy
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[12px] md:text-[16px] leading-[24px] w-full md:w-[559px] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
            tempora eligendi obcaecati maxime dignissimos sequi aspernatur
            quibusdam laborum vel exercitationem.
          </p>
        </div>
        <div className=" flex flex-row flex-wrap gap-2 lg:gap-[48px] justify-between items-center ">
          {
            arr.map((item) => {
              return (
                <div className="border-[1px]  border-[#f2f2f2] rounded-[20px] p-[16px] w-[48%] lg:w-[30%] h-fit ">
<Link to ='/'>

                  <img
                    src={img7}
                    alt=''
                    className="w-full object-cover h-[140px] lg:h-[240px] rounded-[6px] mb-[28px]"
          
                  />

                  <small className="font-[400] pl-[10px] text-[14px] leading-[20px] py-[2px] px-[10px] bg-[#9eff5126] mb-[20px]">Technology</small>
                  <p className="font-[500] w-full text-sm lg:text-[22px] lg:leading-[32px] text-[#232426] mb-[20px]">
                    Lorem ipsum, dolor sit amet consectetur  <span className='hidden lg:flex'>adipisicing elit. Necessitatibus, praesentium.</span> 
                  </p>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex w-full items-center ">
                      <img className="md:w-[36px] w-[25px] rounded-full mr-1 md:mr-[12px] h-[25px] md:h-[36px]" src={img7} alt="" />
                      <span className="font-[500] text-[10px] md:text-[13px]  lg:text-[16px] leading-[24px]">Dennis Sadoh</span>
                    </div>
                    <p className="font-[400] text-xs lg:text-[16px] md:leading-[24px]">June 15,2023</p>
                  </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <button className="md:py-[14px] py-[7px] mt-5 md:my-1 mx-auto flex px-[24px] rounded-[6px] border-[1px] border-[#8cbf40] mb-[160px] text-[#8cbf40] ">Load More</button>
      </section>
    </Layout>
  )
}
export const Head = () => <SEO title="Blog Category" />
