import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobnav, setMobnav] = useState(true);
  let navItems = [
    { id: 2, value: "Home", lin:"/" },
    { id: 1, value: "Resume", lin: "/resume" },
    { id: 3, value: "Personal", lin:"/personal" },

  ];

  return (
    <>
      {/* laptop Menu */}
      <div className="hidden md:flex flex-col w-full md:flex-row md:max-w-[1175px] mx-auto md:h-20 md:p-3 justify-between items-center ">
        <div className=" w-full  md:flex justify-between items-center md:w-[33%] lg:w-[26%]">
         <Link className=" no-underline text-[inherit]" to={navItems[0].lin}> <h2 className="text-7xl font-sfumato md:text-5xl font-bold">Aslam</h2> </Link>
          <p className="hidden  md:block text-[14px] font-light pl-[-16px]">
            Junior Business Economist
          </p>
        </div>
        <div>
          <ul className=" hidden md:flex justify-evenly items-center w-full">
            {navItems.map((item, index) => (
              <Link className=" no-underline text-[inherit]" to={item.lin}><li
                className={`text-[22px]  px-7  font-mono font-extralight cursor-pointer hover:scale-105 duration-200 hover:text-black ${
                  index !== navItems.length - 1
                    ? "border-r border-solid border-gray-400 border-spacing-1 "
                    : " "
                } `}
                key={item.id}
              >
                {item.value}
              </li></Link>
            ))}
          </ul>
        </div>
      </div>
      {/* mobile menu Now */}

      <div className="md:hidden flex flex-col">
        <div className="flex items-center justify-between h-20 py-[4%] px-[6%] border-b border-gray-300 border-solid border-">
         <Link className=" no-underline text-[inherit]" to={navItems[0].lin}> <h2 className="text-5xl font-sfumato cursor-pointer ">Aslam</h2></Link>
          <div
            className="duration-300 cursor-pointer"
            onClick={() => setMobnav((prev) => !prev )}
          >
            {mobnav ? <FaTimes size={30} /> : <MdOutlineMenu size={30} />}
          </div>
        </div>
        {/*                 
        <ul className="flex flex-col bg-black right-0 top-0 absolute h-full w-1/2 duration-300 items-center justify-center">
            {navItems.map((item) => (
              <li
                className="w-full text-[#F3F3F3] text-2xl"
                key={item.id}
              >
                {item.value}
              </li>
            ))}
          </ul> */}
        {mobnav && (
          <div className=" bg-black right-[0px] top-20 duration-500 absolute h-full w-1/2 items-center justify-center">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <Link className=" no-underline text-[inherit]" onClick={( ) => setMobnav(!mobnav)} to={item.lin} ><li
                  className="w-full cursor-pointer text-3xl items-center justify-center pl-[8%] py-[10%] bg-black text-[#F3F3F3] "
                  key={item.id}
                >
                  {item.value}
                </li></Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
