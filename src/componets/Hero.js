import React, { useState } from "react"
import Logo from "./../asset/jewelry-logo.png"
import { FaBars, FaXmark } from "react-icons/fa6"
const Hero = () => {
  const [menu, setMenu] = useState(true)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <section className=" bg-[#262527]">
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
          <button
            onClick={handleMenu}
            id="hamMenu"
            className=" duration-200 z-40 block md:hidden focus:outline-none"
          >
            {menu ? <FaBars size={32} /> : <FaXmark size={32} />}
          </button>
        </nav>
        {!menu && (
          <div className="text-white text-lg  items-center backdrop-blur-md flex  flex-col  pt-32 space-y-6 w-full min-h-screen   z-30 absolute inset-0  transition-all duration-200 md:hidden ">
            <a
              href="/#"
              className="  duration-200 hover:scale-105 hover:underline"
            >
              NEW
            </a>
            <a
              href="/#"
              className=" duration-200 hover:scale-105 hover:underline"
            >
              DESIGNERS
            </a>
            <a
              href="/#"
              className=" duration-200 hover:scale-105 hover:underline"
            >
              CATAGORIES
            </a>
            <a
              href="/#"
              className=" duration-200 hover:scale-105 hover:underline"
            >
              RINGS
            </a>
            <a
              href="/#"
              className=" duration-200 hover:scale-105 hover:underline"
            >
              ABOUT
            </a>
          </div>
        )}
        {/* <div className=" max-w-lg mt-24 mb-24 p-4 font-PtSerif text-3xl text-white  uppercase border-2 md:p-10 md:m-24 md:text-5xl">
          Show Off Your Style Sweetest Deals
        </div>
        <button className=" px-8 py-3 bg-[#ffffff] text-black font-medium   md:ml-24 duration-200 hover:scale-110">
          Buy Now
        </button> */}
      </div>
    </section>
  )
}

export default Hero
