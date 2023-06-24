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
      <section className="md:px-[120px] px-[20px] categoryPage mb-[106px]">
      <ul className="flex mb-[64px] justify-center items-center gap-[32px] text-[16px] text-[#313133]">
            <Link
              to={`/`}
              className="h-full w-full"
            >
              <li>Home</li>
            </Link>
            <p className="w-[10px] mx-[14px] text-[7px] text-[#939498]  h-full flex items-center">&#10148;</p>
            <Link
              to={`/blog`}
              className="h-full w-full"
            > <li className="">Blog</li>
            </Link>
            <p className="w-[10px] mx-[14px] text-[7px] text-[#939498]  h-full flex items-center">&#10148;</p>
              
            <Link
              to={`/blog/category`}
              className="h-full w-full"
            >
              <li className="text-[#939498]">Technology</li>
            </Link>
          </ul>
        <div className=" flex justify-center items-center flex-col">
         
          <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-[8px]">
            Technolgy
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[16px] leading-[24px] w-[559px] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
            tempora eligendi obcaecati maxime dignissimos sequi aspernatur
            quibusdam laborum vel exercitationem.
          </p>
        </div>
        <div className=" flex flex-wrap gap-[48px] justify-between items-center ">
          {
            arr.map((item) => {
              return (
                <div className="border-[1px] border-[#f2f2f2] rounded-[20px] p-[16px] w-[30%]  h-[500px]">

                  <img
                    src={img7}
                    alt=''
                    className="w-full object-cover h-[240px] rounded-[6px] mb-[28px]"
                  // style={{width: 300, height: 200}}
                  />
                  {/* <img src={img7} alt="" /> */}
                  <small className="font-[400] pl-[10px] text-[14px] leading-[20px] py-[2px] px-[10px] bg-[#9eff5126] mb-[20px]">Technology</small>
                  <p className="font-[500] text-[22px] leading-[32px] text-[#232426] mb-[20px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, praesentium.
                  </p>

                  <div className="flex justify-between items-center w-full">
                    <div className="flex">
                      <img className="w-[36px] rounded-full mr-[12px] h-[36px]" src={img7} alt="" />
                      <span className="font-[500] text-[16px] leading-[24px]">Dennis Sadoh</span>
                    </div>
                    <p className="font-[400] text-[16px] leading-[24px]">June 15,2023</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <button className="py-[14px] mx-auto flex px-[24px] rounded-[6px] border-[1px] border-[#8cbf40]  text-[#8cbf40] ">Load More</button>
      </section>
    </Layout>
  )
}
export const Head = () => <SEO title="Blog Category" />
