import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../layouts/layout"
import SEO from "../../components/SEO"
 import bg from "../../assets/images/bgDuoWork.jpg";
import img7 from "../../assets/images/img7.jpg";
import arrowDown from "../../assets/images/Vector.png";
import arrowRight from "../../assets/images/Vectorarroeight.svg";
import leftTag from "../../assets/images/VectorleftArr.svg";
import rightTag from "../../assets/images/Vector.svg";
import explore from '../../assets/images/Iconexplore.svg'
export default function Blog({ data }: any) {
  const arr = [1, 2, 3, 5, 7];
  const arr2 = [1, 2,];
  let bgStyle = {
    borderRadius: "8px",
    backgroundImage:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
  };
  let bgStyle2 = {
    backgroundImage:
      "linear-gradient(0deg, rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6))",
  };
  const posts = data.allMdx.nodes

  return (
    <Layout>

      {/* Test Blog design  Starts*/}
      <div className="px-[96px]">
        <div className=" flex justify-center items-center flex-col">
          <ul className="flex mb-[64px] justify-center items-center gap-[32px] text-[16px] text-[#313133]">
            <li>Home</li>
            <li className="text-[#939498]">Blog</li>
          </ul>
          <h1 className=" text-[#222222] text-[45px] leading-[52px] mb-[8px]">
            Blog
          </h1>
          <p className=" text-[#4A4A4C] text-center text-[16px] leading-[24px] w-[559px] mb-[80px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
            tempora eligendi obcaecati maxime dignissimos sequi aspernatur
            quibusdam laborum vel exercitationem.
          </p>
          <div className="w-full flex mb-[76px] text-white items-center pl-[40px] h-[450px] relative">
            <img
              src={bg}
              className="absolute top-0 rounded-[8px] overflow-hidden  left-0 w-full h-full object-cover"
              alt=""
            />
            <div
              style={bgStyle}
              className="absolute  h-full  top-0 left-0 w-full"
            ></div>
            <div className="absolute bottom-[49px]">
              <div className="rounded-[100px] mb-[16px] text-black bg-[#9EFF51] py-6 w-fit h-[32px] px-[12px] flex justify-center items-center">
                {" "}
                <span className="w-[6px] mt-1 h-[6px] mr-[6px] bg-[#222222]"></span>{" "}
                Technology
              </div>
              <h1 className="font-[600] text-[36px] leading-[44px] text-left max-w-[816px] mb-[24px]">
                Lorem ipsum dolor sit amet consectetur. Neque non iaculis integer
                malesuada.
              </h1>
              <div className="flex gap-[15px]">
                <img
                  src={img7}
                  className="w-[57px] h-[57px] rounded-full object-cover"
                  alt=""
                />
                <div>
                  <p>Dennis Sadah</p>
                  <div className="flex justify-center items-center">
                    {" "}
                    <small className="font-[600] text-[16px] leading-[19px]">
                      June 15, 2023
                    </small>{" "}
                    <div className="w-[2px] h-[4px] text-white bg-white mx-10"></div>{" "}
                    <small className="font-[400] text-[14px] leading-[17px]">
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

          <img className=" mx-auto mb-[71px]" src={arrowDown} alt="" />

          <div className="w-full font-[600] text-[24px]  h-fit  justify-between flex ">
            <div className="flex w-fit  h-fit gap-[10px] justify-center items-center">
              {" "}
              <h1>Browse The Category </h1>{" "}
              <div className="mt-[10px] w-[35px] h-[1px] bg-black"></div>
            </div>
            <div className="flex mb-[66px] h-fit  w-fit gap-[10px] justify-center items-center">
              <h1>see all category </h1>
              <img src={arrowRight} className="mt-3" alt="" />
            </div>
          </div>
        </div>
        <div className="flex mb-[50px] justify-between items-center h-fit w-full gap-[41px]">
          <img src={leftTag} alt="" />
          <div className="flex w-full h-fit gap-[30px] flex-wrap">
            {arr.map((item) => (
              <div
                key={item}
                className="w-[171px] relative rounded-[10px] overflow-hidden h-[221px] flex justify-center items-center"
              >
                <img
                  src={img7}
                  className="w-full absolute top-0 right-0 h-full object-cover"
                  alt=""
                />
                <div
                  style={bgStyle2}
                  className=" absolute w-full h-full top-0 left-0 "
                ></div>
                <h1 className="relative text-white">Design</h1>
              </div>
            ))}
          </div>
          <img src={rightTag} alt="" />
        </div>
        <div className="w-full flex justify-center mb-[160px] items-center gap-[20px] h-fit">
          <div className="w-[18px] h-[18px] cursor-pointer rounded-full bg-[#3EA645]"></div>
          <div className="w-[18px] h-[18px] cursor-pointer rounded-full bg-[#3ea645b2]"></div>
          <div className="w-[18px] h-[18px] cursor-pointer rounded-full bg-[#3ea64566]"></div>
        </div>
        <div className="w-full">
          <h1 className="font-[600] text-[24px] mb-[64px]">Featured</h1>
          <div className="flex w-full mb-[223px] gap-[56px]">
            <div className="w-1/2">
              <img src={img7} className="w-full rounded-[8px] h-[244px] mb-[32px] object-cover" alt="" />
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center ">
                  <img src={img7} className="w-[40px]  h-[40px] rounded-full object-cover mr-[14px]" alt="" />

                  <div className="flex justify-center items-center gap-3 text-[14px] font-[500]">
                    <span>John Doe</span>
                    <span className="mx-[4px] my-auto">.</span>
                    <span>15 June,2023</span>
                  </div>

                </div>
                <h1 className="font-[600] mb-[12px] text-[24px] text-left">
                  Lorem ipsum, dolor sit amet cons
                </h1>
                <p className="font-[400] mb-[12px] text-[16px] text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                  deleniti? Doloribus sit, tenetur qui amet repudiandae nostrum
                  atque hic eos laborum ut a dolorem fugiat in laboriosam veniam,
                  blanditiis maxime?
                </p>
                <div className="bg-[#9eff51] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                  <button >Explore </button>
                  <img src={explore} className="w-[10px] h-[10px]" alt="" />
                </div>

              </div>
            </div>
            <div className="w-1/2 h-fit flex flex-col gap-[41px]">


              {
                arr2.map((item) =>
                  <div className="w-full h-[223px]">
                    <div className="flex w-full gap-[24px] h-full ">
                      <img src={img7} className="w-[60%] h-full rounded-[8px] object-cover" alt="" />

                      <div className="w-[39%]">
                        <div className="flex justify-start items-center text-[14px]">
                          <img src={img7} className="w-[40px]  h-[40px] rounded-full object-cover mr-[14px]" alt="" />

                          <span>John Doe</span>
                          <span>.</span>
                          <span>15 June,2023</span>
                        </div>
                        <h1 className="font-[600] mb-[12px] text-[18px] text-left">
                          Lorem ipsum, dolor s
                        </h1>
                        <p className="font-[400] mb-[12px] text-[16px] text-left">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                          de
                        </p>
                        <div className="bg-[#9eff51] cursor-pointer justify-center items-center gap-[15px] h-[40px] w-[123px] flex ">
                          <button >Explore </button>
                          <img src={explore} className="w-[10px] h-[10px]" alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
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
