import React from "react"
import Logo from "./../asset/jewelry-logo.png"

const Hero = () => {
  return (
    <section className=" bg-[#2a123d]">
      <div className=" container max-w-6xl mx-auto py-12 px-6 ">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={Logo} alt="logo" className=" h-16" />
          <div className=" hidden h-10 font-OpenSans md:flex md:space-x-8 ">
            <div className="group">
              <a href="/#">NEW</a>
              <div className=" mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/#">DESIGNERS</a>
              <div className=" mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/#">CATAGORIES</a>
              <div className=" mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/#">RINGS</a>
              <div className=" mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/#">ABOUT</a>
              <div className=" mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </nav>
        <div className=" max-w-lg mt-24 mb-24 p-4 font-PtSerif text-3xl text-white  uppercase border-2 md:p-10 md:m-24 md:text-5xl">
          Show Off Your Style Sweetest Deals
        </div>
        <button className=" px-8 py-3 bg-[#754599] text-white font-medium   md:ml-24 duration-200 hover:scale-110">
          Buy Now
        </button>
      </div>
    </section>
  )
}

export default Hero
