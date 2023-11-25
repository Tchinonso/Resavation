"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Search from "../../image/Vector.png";
import rectangle from "../../image/Rectangle683.png";
import rectangle1 from "../../image/Rectangle691.png";
import { BiHeart } from "react-icons/bi";
import eclipse1 from "../../image/Ellipse128.png";
import vector1 from "../../image/Vector1.png";
import vector2 from "../../image/Vector2.png";
import vector3 from "../../image/Vector3.png";
import eclipse2 from "../../image/Ellipse133.png";
import burg from "../../image/burg.png";
import box from "../../image/box.png";
import style from "./search.module.css";

const search = () => {
  const [change, setChange] = useState(0);
  const [roomAndApartment, setRoomAndApartment] = useState([])

  function handleSwitch(index) {
    setChange(index);
  }

  useEffect(() => {
    fetch("https://resavation-service.onrender.com/api/v1/roommates/match?is_roommate=false&location=Location1")
    .then((response) => response.json())
    .then((data) => setRoomAndApartment(data))
  },[])
  console.log(roomAndApartment);



  return (
    <div className="search-container flex flex-col">
      <div className="flex flex-row my-14 justify-around">
        <div className="flex bg-gray-100 relative w-9/12 rounded-md left-2 md:ml-4 xl:ml-[5rem]">
          <input
            type="text"
            className="bg-gray-100 h-9 flex-2 px-5 rounded-md text-sm focus:outline-none w-11/12 md:h-[60px] w-10/12 lg:w-11/12"
            placeholder="Enter your address"
          />
          <Image
            src={Search}
            alt="search"
            width={14}
            height={6}
            className="absolute top-3 right-4 md:top-6 md:right-6 md:h-5"
          />
        </div>
        <div
          className={`block ${style["btn-ham"]} focus:outline-none right-3 md:right-6 md:mt-[0.2rem] lg:right-10 xl:right-[5rem]`}
        >
          <span className={`${style["btn-ham-top"]}`}></span>
          <span className={`${style["btn-ham-fmiddle"]}`}></span>
          <span className={`${style["btn-ham-lmiddle"]}`}></span>
          <span className={`${style["btn-ham-bottom"]}`}></span>
        </div>
      </div>

      <div>
        <div className="flex flex-row w-[87.5%] h-11 mx-auto -my-7 bg-gray-100 md:w-5/12 md:m-0 md:ml-12 lg:w-4/12 lg:m-0 lg:ml-14 lg:-mt-8 xl:w-3/12 xl:m-0 xl:ml-[8.6rem] xl:-mt-8">
          <div className=" flex items-center justify-center flatmate1 w-3/6">
            <div
              onClick={() => handleSwitch(0)}
              className={`${
                style["switchleft"]
              } w-full flex items-center justify-center 
        ${change === 0 ? `${style["active"]}` : " "}`}
            >
              <h3 className="hidden sm:flex sm:items-center sm:justify-center sm:font-montserrat sm:text-xs sm:font-semibold lg:hidden">
                Flatmates
              </h3>
              <h3 className="sm:hidden md:hidden lg:flex lg:items-center lg:justify-center lg:font-montserrat lg:text-xs lg:font-semibold">
                Flatmates
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-center flatemate2 w-3/6">
            <div
              onClick={() => handleSwitch(1)}
              className={`${
                style["switchright"]
              } w-full flex items-center justify-center 
        ${change === 1 ? `${style["active"]}` : " "}`}
            >
              <h3 className="hidden sm:flex sm:items-center sm:justify-center sm:font-montserrat sm:text-xs sm:font-semibold lg:hidden">
                Apartments
              </h3>
              <h3 className="sm:hidden md:hidden lg:flex lg:items-center lg:justify-center lg:font-montserrat lg:text-xs lg:font-semibold">
                Apartments
              </h3>
            </div>
          </div>
        </div>

        {change === 0 && (
          <>
          {/* {roomAndApartment.map((room) => (

          <> */}
            <div className="lg:flex lg:flex-row lg:items-center lg:w-[88%] lg:mx-auto justify-center">
              <div className="my-11 lg:w-3/6">
                <div className="flex flex-col w-[87.5%] mx-auto ">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-row items-center w-3/6">
                      <h3 key={room.id} className="sm:flex font-montserrat text-blue-600 font-normal text-base leading-5 text-center lg:hidden">
                        {room.id}
                      </h3>
                      <h2 className="sm:flex ml-1 font-montserrat text-base font-normal leading-5 text-center lg:hidden">
                        Flatmates found
                      </h2>

                      <div className="hidden sm:hidden lg:flex lg:flex-col lg:left-0 lg:-mt-5">
                        <h2 className="text-[12px]">Flatmates in Lagos</h2>
                        <h3 className="text-[12px]">2 Results</h3>
                      </div>
                    </div>

                    <div className="flex justify-end w-3/6">
                      <h3 className="sm:font-montserrat text-base font-normal leading-5 text-center lg:hidden">
                        Sort by
                      </h3>
                    </div>

                    <div className="sm:hidden lg:flex"></div>
                  </div>

                  <div className="bg-white shadow-lg">
                    <div className="image-div my-3 relative">
                      <span className="bg-blue-800 absolute top-5 left-5 w-24 h-9 flex items-center justify-center">
                        <h3 className="text-white text-xs flex items-center justify-center">
                          80% Match
                        </h3>
                      </span>
                      <span className="bg-white absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full">
                        <BiHeart />
                      </span>
                      <Image
                        src={rectangle}
                        alt="rec"
                        className={`${style["rec1"]}`}
                      />
                    </div>

                    <div className="eclipse absolute mt-[-50px]">
                      <Image
                        src={eclipse1}
                        alt="ellipse"
                        className={`${style["ec1"]}`}
                      />
                    </div>

                    <div className="my-16 w-36">
                      <h2 className="font-montserrat font-semibold text-base leading-6 text-center">
                        Stephen, 27
                      </h2>
                      <h6 className="font-montserrat font-normal text-xs leading-4 text-center">
                        Lekki, Lagos
                      </h6>
                    </div>

                    <div className="absolute -mt-12 ml-7 flex items-center justify-center w-20 h-7 rounded-full border border-gray-400 bg-blue-200 bg-opacity-50">
                      <button className="flex items-center justify-center font-montserrat font-medium text-xs leading-4">
                        Student
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-11 lg:w-3/6">
                <div className="flex flex-col w-[87.5%] mx-auto ">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-row items-center w-3/6">
                      <h3 className="flex font-montserrat text-blue-600 font-normal text-base leading-5 text-center lg:hidden">
                        2
                      </h3>
                      <h2 className="ml-1 font-montserrat text-base font-normal leading-5 text-center lg:hidden">
                        Flatmates found
                      </h2>
                    </div>
                    <div className="flex justify-end w-3/6 lg:-mt-2">
                      <h3 className="font-montserrat text-base font-normal leading-5 text-center lg:absolute lg:mr-[6.3rem]">
                        Sort by
                      </h3>
                      <Image
                        src={burg}
                        alt="burg"
                        className="hidden sm:hidden lg:block h-5 w-5 m-0 mr-2"
                      />
                      <Image
                        src={box}
                        alt="box"
                        className="hidden sm:hidden lg:block h-5 w-5"
                      />
                    </div>
                  </div>

                  <div className="bg-white shadow-lg">
                    <div className="image-div my-3 relative">
                      <span className="bg-blue-800 absolute top-5 left-5 w-24 h-9 flex items-center justify-center">
                        <h3 className="text-white text-xs flex items-center justify-center">
                          80% Match
                        </h3>
                      </span>
                      <span className="bg-white absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full">
                        <BiHeart />
                      </span>
                      <Image
                        src={rectangle}
                        alt="rec"
                        className={`${style["rec2"]}`}
                      />
                    </div>

                    <div className="eclipse absolute mt-[-50px]">
                      <Image src={eclipse1} alt="ellipse" />
                    </div>

                    <div className="my-16 w-36">
                      <h2 className="font-montserrat font-semibold text-base leading-6 text-center">
                        Stephen, 27
                      </h2>
                      <h6 className="font-montserrat font-normal text-xs leading-4 text-center">
                        Lekki, Lagos
                      </h6>
                    </div>

                    <div className="absolute -mt-12 ml-7 flex items-center justify-center w-20 h-7 rounded-full border border-gray-400 bg-blue-200 bg-opacity-50">
                      <button className="flex items-center justify-center font-montserrat font-medium text-xs leading-4">
                        Student
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </>
          ))} */}
          </>
        )}

        {change === 1 && (
          <>
            <div className="lg:flex lg:flex-row lg:items-center lg:w-[88%] lg:mx-auto justify-center">
              <div className="my-11 lg:w-3/6">
                <div className="flex flex-col w-[87.5%] mx-auto ">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-row items-center w-3/6">
                      <h3 className="sm:flex font-montserrat text-blue-600 font-normal text-base leading-5 text-center lg:hidden">
                        2
                      </h3>
                      <h2 className="sm:ml-1 font-montserrat text-base font-normal leading-5 text-center lg:hidden">
                        Apartments found
                      </h2>

                      <div className="hidden sm:hidden lg:flex lg:flex-col lg:left-0 lg:-mt-5">
                        <h2 className="text-[12px]">Apartments in Lagos</h2>
                        <h3 className="text-[12px]">2 Results</h3>
                      </div>
                    </div>
                    <div className="flex justify-end w-3/6">
                      <h3 className="font-montserrat text-base font-normal leading-5 text-center lg:hidden">
                        Sort by
                      </h3>
                    </div>
                  </div>

                  <div className="bg-white shadow-lg">
                    <div className="image-div my-3 relative">
                      <span className="bg-white absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full">
                        <BiHeart />
                      </span>
                      <Image
                        src={rectangle1}
                        alt="rec"
                        className={`${style["rec22"]}`}
                      />
                    </div>

                    <div className="">
                      <h3 className="font-montserrat font-semibold text-base leading-6 ml-2">
                        Looking for a student roomate
                      </h3>
                      <h5 className="font-montserrat font-normal text-xs leading-4 ml-2">
                        Lekki, Lagos
                      </h5>
                    </div>

                    <div className="flex flex-row items-center justify-around my-5">
                      <div className="flex flex-row mr-10 gap-2">
                        <Image src={vector1} alt="guests" width={14} />
                        <h4 className="font-montserrat font-normal text-xs leading-4">
                          3 Guests
                        </h4>
                      </div>
                      <div className="flex flex-row mr-10 gap-2">
                        <Image src={vector2} alt="bedrooms" width={14} />
                        <h4 className="font-montserrat font-normal text-xs leading-4">
                          3 Bedroom
                        </h4>
                      </div>
                      <div className="flex flex-row gap-2">
                        <Image src={vector3} alt="m2" width={14} />
                        <h4 className="font-montserrat font-normal text-xs leading-4">
                          300m2
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-row md:justify-around">
                      <div className="flex flex-row items-center justify-around">
                        <Image src={eclipse2} alt="eccs" />
                        <div className="mr-9">
                          <h3 className="font-montserrat font-semibold text-xs leading-6">
                            Stephen, 27
                          </h3>
                          <h5 className="font-montserrat font-medium text-xs leading-3 text-blue-600">
                            Student
                          </h5>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center">
                        <h2 className="font-montserrat font-medium text-xs leading-6 text-center">
                          #100000/Month
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-11 lg:w-3/6">
                <div className="flex flex-col w-[87.5%] mx-auto ">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-row items-center w-3/6">
                      <h3 className="sm:flex font-montserrat text-blue-600 font-normal text-base leading-5 text-center lg:hidden">
                        2
                      </h3>
                      <h2 className="sm:ml-1 font-montserrat text-base font-normal leading-5 text-center lg:hidden">
                        Apartments found
                      </h2>
                    </div>
                    <div className="flex justify-end w-3/6 lg:-mt-2">
                      <h3 className="font-montserrat text-base font-normal leading-5 text-center lg:absolute lg:mr-[6.3rem]">
                        Sort by
                      </h3>
                      <Image
                        src={burg}
                        alt=""
                        className="hidden sm:hidden lg:block h-5 w-5 m-0 mr-2"
                      />
                      <Image
                        src={box}
                        alt=""
                        className="hidden sm:hidden lg:block h-5 w-5"
                      />
                    </div>
                  </div>

                  <div className="bg-white shadow-lg">
                    <div className="image-div my-3 relative">
                      <span className="bg-blue-800 absolute top-5 left-5 w-24 h-9 flex items-center justify-center">
                        <h3 className="text-white text-xs flex items-center justify-center">
                          80% Match
                        </h3>
                      </span>
                      <span className="bg-white absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full">
                        <BiHeart />
                      </span>
                      <Image
                        src={rectangle1}
                        alt="rec"
                        className={`${style["rec33"]}`}
                      />
                    </div>

                    <div className="">
                      <h3 className="font-montserrat font-semibold text-base leading-6 ml-2">
                        Looking for a student roomate
                      </h3>
                      <h5 className="font-montserrat font-normal text-xs leading-4 ml-2">
                        Lekki, Lagos
                      </h5>
                    </div>

                    <div className="flex flex-row items-center justify-around my-5">
                      <div className="flex flex-row mr-10 gap-2">
                        <Image src={vector1} alt="guests" width={14} />
                        <h4 className="font-montserrat font-normal text-xs leading-4">
                          3 Guests
                        </h4>
                      </div>
                      <div className="flex flex-row mr-10 gap-2">
                        <Image src={vector2} alt="bedrooms" width={14} />
                        <h4 className="font-montserrat font-normal text-xs leading-4">
                          3 Bedroom
                        </h4>
                      </div>
                      <div className="flex flex-row gap-2">
                        <Image src={vector3} alt="m2" width={14} />
                        <h4 className="font-montserrat font-normal text-xs leading-4">
                          300m2
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-row md:justify-around">
                      <div className="flex flex-row items-center justify-around">
                        <Image src={eclipse2} alt="eccs" />
                        <div className="mr-9">
                          <h3 className="font-montserrat font-semibold text-xs leading-6">
                            Stephen, 27
                          </h3>
                          <h5 className="font-montserrat font-medium text-xs leading-3 text-blue-600">
                            Student
                          </h5>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center">
                        <h2 className="font-montserrat font-medium text-xs leading-6 text-center">
                          #100000/Month
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="w-full flex justify-center items-center mt-[4rem]">
          <ul className="flex justify-center items-center gap-2">
            <li className="px-[15px] py-[8px]  bg-[#f5f5f5] rounded-full text-black font-bold cursor-pointer  hover:bg-blue-600 hover:text-white ">
              1
            </li>
            <li className="px-[15px] py-[8px]  bg-[#f5f5f5] rounded-full text-black font-bold cursor-pointer  hover:bg-blue-600 hover:text-white ">
              2
            </li>
            <li className="px-[15px] py-[8px]  bg-[#f5f5f5] rounded-full  text-black font-bold cursor-pointer  hover:bg-blue-600 hover:text-white ">
              3
            </li>
            <li className="px-[15px] py-[8px]  bg-[#f5f5f5] rounded-full  text-black font-bold cursor-pointer  hover:bg-blue-600 hover:text-white">
              4
            </li>
            <li className="px-[15px] py-[8px]  bg-[#f5f5f5] rounded-full  text-black font-bold cursor-point hover:bg-blue-600 hover:text-white">
              5
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default search;
