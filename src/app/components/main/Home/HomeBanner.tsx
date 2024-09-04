'use client'
import { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

import { homeBanner } from "@/utils/assets";
import Link from "next/link";
import Button from "../../ui/button/Button";
import SocialLink from "./SocialLink";
import Image from "next/image";

const HomeBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { banner1, banner2, banner4, banner5, banner6 } = homeBanner;

  const images = [
    {
      img: banner1,
    },
    {
      img: banner2,
    },
    {
      img: banner4,
    },
    {
      img: banner5,
    },
    {
      img: banner6,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // #47ce5b

  return (
    <div className="bg-gradient-to-r from-[#95ecb0] to-[#2ea840] -mt-16">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:-ml-14 ml-5 md:ml- w-[90%] lg:h-[450px] mx-auto mb-8 lg:-mt-5">
        {/* home banner content start */}
        <div className="w-full lg:w-[50%] flex flex-col justify-start lg:items-center ml-14 lg:mt-10 lg:ml-8">
          <div className="relative ">
            <div className="flex flex-col justify-start items-start ">
              <h1 className="text-white absolute -top-8 bg-primary z-10 text-xl w-48 ml-5 rounded-full  p-2 italic -rotate-12 text-center mb-5">
                {" "}
                Fresh & Healthy
              </h1>
              <h1 className=" text-black z-10 bg-yellow-400 w-60 p-2 italic rounded-full -rotate-12 text-3xl text-center ">
                Vegetables
              </h1>
            </div>

            <h1 className="text-xl mt-10">Don't Penic, Go Organic</h1>
            <h4 className="text-3xl mt-2">
              Healthy Vegetable that <br />
              Deserve to Eat Fresh
            </h4>

            <Link className="" href="/category">
              <Button text="Shopping Now" className="w-36 mt-5 mb-5  rounded-full h-9" />
                
            </Link>
          </div>

          <SocialLink />
        </div>

        {/* home banner content end */}

        <div className=" mt-10 mb-10">
          <Image width={600} height={500}
            className="w-[90%] mx-auto lg:w-[600px]  ml-3 rounded-xl h-[300px] lg:h-[400px] z-20"
            src={images[currentImageIndex].img} alt="Home Banner"
          />
        </div>

        {/* <Button
        text={<ArrowUpOutlined />}
          onClick={handleScrollToTop}
          className="animated z-10 fixed right-5 bottom-16 transition rounded-full duration-200 text-[20px] flex justify-center items-center animate-bounce w-8 h-8 font-bold bg-primary "
        >
          
        </Button> */}
        <Button
        text={<ArrowUpOutlined />}
          onClick={handleScrollToTop}
          className="animated z-10 fixed right-5 bottom-16 transition rounded-full duration-200 text-[20px] flex justify-center items-center animate-bounce w-8 h-8 font-bold bg-primary "
        />
          
      </div>
    </div>
  );
};

export default HomeBanner;
