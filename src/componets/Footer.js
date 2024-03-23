import React from "react"

import fcIcon from "./../asset/icon-facebook.svg"
import twIcon from "./../asset/icon-twitter.svg"
import inIcon from "./../asset/icon-instagram.svg"
import ptIcon from "./../asset/icon-pinterest.svg"
import Logo from "./../asset/jewelry-logo.png"

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4 ">
            <div className="h-8">
              <img src={Logo} alt="" className="w-24 md:ml-3" />
            </div>
            {/* Menu Container  */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div className="h-10 group">
                <a href="/#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              <div className="h-10 group">
                <a href="/#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          {/* Social & Copy Container  */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* icons Container */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              <div className="h-8 group">
                <a href="/#">
                  <img src={fcIcon} alt="" className="h-6" />
                </a>
              </div>

              <div className="h-8 group">
                <a href="/#">
                  <img src={twIcon} alt="" className="h-6" />
                </a>
              </div>

              <div className="h-8 group">
                <a href="/#">
                  <img src={ptIcon} alt="" className="h-6" />
                </a>
              </div>

              <div className="h-8 group">
                <a href="/#">
                  <img src={inIcon} alt="" className="h-6" />
                </a>
              </div>
            </div>

            <div className="font-bold">
              &copy; 2022 jewelry. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
