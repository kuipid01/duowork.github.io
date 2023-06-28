import React from 'react'
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../layouts/layout"
import SEO from "../../components/SEO"
import bg from "../../assets/images/bgDuoWork.jpg";
import img7 from "../../assets/images/img7.jpg";
export default function category() {
  const arrTest = [1,2,3,4,5,6,7,8,9,0]
  return (
    <Layout>
    <section className='flex mb-[120px] flex-col justify-center items-center w-full px-[120px]'>
       <ul className="flex justify-center mt-[40px] items-center gap-[14px] text-[16px] text-[#313133]">
          <Link
            to={`/`}

          >
            <li>Home</li>
          </Link>
          <p className="w-[10px] mx-[14px] text-[7px] text-[#939498]  h-full flex items-center">
            &#10148;
          </p>
          <Link
            to={`/blog`}

          >
            <li className="text-[#939498]">Blog</li>
          </Link>
          <p className="w-[10px] mx-[14px] text-[7px] text-[#939498]  h-full flex items-center">
            &#10148;
          </p>
          <Link
            to={`/blog/category`}

          >
            <li className="text-[#939498]">Technology</li>
          </Link>
        </ul>
        <h1 className=" text-[#222222] font-[600] mt-[68px]  text-[45px] leading-[52px] mb-[8px]">
           Technology
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[16px] leading-[24px] w-[559px] mb-[48px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          </p>
          <div className='mt-[48px] w-full justify-center items-center flex gap-[48px] flex-row flex-wrap'>
{
  arrTest.map(card => <div className='border boxShadow border-[#F2F2F2] w-[392px] h-fit max-h-[500px] rounded-[20px] p-[16px] '>
<img src={img7} className='w-[360px] h-[240px] object-cover rounded-[6px] mb-[28px]'
 alt="" />
 <p className='text-[14px] rounded-[100px] mb-[16px] font-[500] leading-[20px] text-[#313133] px-[10px] py-[4px] w-fit bg-[#9EFF511A]'>Technology</p>
  <h1 className='text-[22px] mb-[20px] font-[500] leading-[32px] text-left'>
  How to work with software development companies and agencies.
  </h1>
  <div className='flex justify-between items-center'>
    <div className='flex items-center'>
    <img src={img7} className='w-[36px] h-[36px] object-cover rounded-full mr-[12px]' alt="" />
    <span className='font-[500] text-[16px] leading-[24px]'> Dennis Sadoh </span>
    </div>
    <p className='text-[16px] text-[#4A4A4C] leading-[24px] '>June 15,2023</p>
     </div>
  </div> )
}
         </div>
         <button className='mt-[48px] mb-[120px] rounded-[6px] cursor-pointer px-[24px] py-[14px] border border-[#8CBF40] text-[#8CBF40] text-[18px] font-[500] leading-[26px]'>Load More</button>
 
    </section>
    </Layout>
  )
}
