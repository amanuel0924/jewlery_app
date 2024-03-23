import React from "react"
import MobImg1 from "./../asset/mobile/andres-vera-202NAwjisYA-unsplash.jpg"
import MobImg2 from "./../asset/mobile/bas-van-den-eijkhof-rWxwWWPw18w-unsplash.jpg"
import MobImg3 from "./../asset/mobile/cat-han-Ks6wd1Zyf1o-unsplash.jpg"
import MobImg4 from "./../asset/mobile/edgar-soto-gb0BZGae1Nk-unsplash.jpg"
import MobImg5 from "./../asset/mobile/jasmin-chew-UBeNYvk6ED0-unsplash.jpg"
import MobImg6 from "./../asset/mobile/karly-jones-hKsqlfJnR60-unsplash.jpg"
import MobImg7 from "./../asset/mobile/kateryna-hliznitsova-pjrPWwwYx1I-unsplash.jpg"
import MobImg8 from "./../asset/mobile/sabrianna-9poB8SBFveA-unsplash.jpg"
import DekImg1 from "./../asset/desktop/andres-vera-202NAwjisYA-unsplash.jpg"
import DekImg2 from "./../asset/desktop/bas-van-den-eijkhof-rWxwWWPw18w-unsplash.jpg"
import DekImg3 from "./../asset/desktop/cat-han-Ks6wd1Zyf1o-unsplash.jpg"
import DekImg4 from "./../asset/desktop/jasmin-chew-UBeNYvk6ED0-unsplash.jpg"
import DekImg5 from "./../asset/desktop/karly-jones-hKsqlfJnR60-unsplash.jpg"
import DekImg6 from "./../asset/desktop/kateryna-hliznitsova-pjrPWwwYx1I-unsplash.jpg"
import DekImg7 from "./../asset/desktop/logan-delaney-PRNrYj8MdRE-unsplash.jpg"
import DekImg8 from "./../asset/desktop/sabrianna-9poB8SBFveA-unsplash.jpg"

const Catagory = () => {
  const firstDekImg = [
    {
      img: DekImg1,
      text: "chain",
      mimg: MobImg1,
    },
    {
      img: DekImg2,
      text: "chain",
      mimg: MobImg2,
    },
    {
      img: DekImg3,
      text: "chain",
      mimg: MobImg3,
    },
    {
      img: DekImg4,
      text: "chain",
      mimg: MobImg4,
    },
  ]
  const secondDekImg = [
    {
      img: DekImg5,
      text: "chain",
      mimg: MobImg5,
    },
    {
      img: DekImg6,
      mimg: MobImg6,
      text: "chain",
    },
    {
      img: DekImg7,
      text: "chain",
      mimg: MobImg7,
    },
    {
      img: DekImg8,
      text: "chain",
      mimg: MobImg8,
    },
  ]
  return (
    <section>
      <div className=" container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0 ">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className=" text-4xl text-center uppercase md:text-left md:text-5xl">
            our accesories
          </h2>
          <button className=" hidden btn md:block">see all</button>
        </div>
        <div className=" item-container">
          {firstDekImg.map((el, ind) => {
            return (
              <div className="group item" key={ind}>
                <img
                  src={el.img}
                  className=" hidden w-full duration-200 md:block group-hover:scale-110"
                  alt="decImg"
                />
                <div className="item-gradient"></div>
                <h5>{el.text}</h5>

                {/* for mobile */}
                <img
                  src={el.mimg}
                  className=" md:hidden w-full "
                  alt="decImg"
                />
              </div>
            )
          })}
        </div>
        <div className=" item-container">
          {secondDekImg.map((el, ind) => {
            return (
              <div className="group item" key={ind}>
                <img
                  src={el.img}
                  className=" hidden w-full duration-200 md:block group-hover:scale-110"
                  alt="decImg"
                />
                <div className="item-gradient"></div>
                <h5>{el.text}</h5>

                {/* for mobile */}
                <img
                  src={el.mimg}
                  className=" md:hidden w-full "
                  alt="decImg"
                />
              </div>
            )
          })}
        </div>
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  )
}

export default Catagory
