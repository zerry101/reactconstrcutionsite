import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import "./Nav.css";
// import { Button } from "react-scroll";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className="">
      <div className="  m-0 md:hidden h-auto text-lg grid p-7  text-white bg-secondary grid-cols-1 ">
        <div className="w-full bg-secondary h-20"></div>
        <Link
          to="/home"
          spy={true}
          smooth={true}
          className="text-center p-4 rounded-lg border-b-2 border-transparent   hover:border-primary hover:bg-darkblue hover:text-primary"
        >
          HOME
        </Link>
        <Link
          to="/services"
          className="text-center p-4 rounded-lg border-b-2 border-transparent    hover:border-primary hover:bg-darkblue hover:text-primary"
        >
          SERVICES
        </Link>
        <Link
          to="/Wheredowebuild"
          className="text-center p-4 rounded-lg border-b-2 border-transparent    hover:border-primary hover:bg-darkblue hover:text-primary"
        >
          WHERE DO WE BUILD?
        </Link>
        <Link
          to="/ourprocess"
          spy={true}
          smooth={true}
          className="text-center p-4 rounded-lg border-b-2 border-transparent    hover:border-primary hover:bg-darkblue hover:text-primary"
        >
          OUR PROCESS
        </Link>
        <Link
          to="/faq"
          spy={true}
          smooth={true}
          className="text-center p-4 rounded-lg border-b-2 border-transparent    hover:border-primary hover:bg-darkblue hover:text-primary"
        >
          FAQ
        </Link>

        <Link
          to="/contact"
          spy={true}
          smooth={true}
          className="text-center p-4 rounded-lg border-b-2 border-transparent      hover:border-primary hover:bg-darkblue hover:text-primary"
        >
          CONTACT
        </Link>
      </div>
      <div />
    </div>
  );
  return (
    <nav className="w-full">
      <div className="grid  grid-cols-1 font-sans bg-secondary lg:justify-items-center h-auto ">
        <ul className=" max-md:hidden text-lg h-auto items-center   text-graywhite  grid place-items-center  grid-cols-7     ">
          <li className="px-6 hover:bg-darkblue h-full flex tracking-wide items-center  ">
            <Link
              to="/home"
              spy={true}
              smooth={true}
              className="transition-transform text-sm    duration-300 border-b-2 border-transparent  hover:text-white  hover:border-primary hover:scale-110   "
            >
              HOME
            </Link>
          </li>

          <li className="px-6 hover:bg-darkblue h-full tracking-wide flex items-center  ">
            <Link
              to="/services"
              spy={true}
              smooth={true}
              className="transition-transform text-sm   duration-300 border-b-2 border-transparent  hover:text-white  hover:border-primary hover:scale-110   "
            >
              SERVICES
            </Link>
          </li>
          <li className="px-6 text-center hover:bg-darkblue h-full tracking-wide flex items-center  ">
            <Link
              to="/Wheredowebuild"
              spy={true}
              smooth={true}
              className="transition-transform text-sm   duration-300 border-b-2 border-transparent  hover:text-white  hover:border-primary hover:scale-110   "
            >
              WHERE DO WE BUILD?
            </Link>
          </li>
          <li className=" self-start overflow-y-visible items-center text-center  ">
            <img
              className="h-32 w-32   object-cover scale-125 shadow-gray-800    drop-shadow-2xl"
              src="assets\HomePage\INFINITY_BUILDER_LOGO_PNG.png"
              alt=""
            />
          </li>
          <li className="px-6 text-center hover:bg-darkblue h-full tracking-wide flex items-center  ">
            <Link
              to="/ourprocess"
              spy={true}
              smooth={true}
              className="transition-transform text-sm   duration-300 border-b-2 border-transparent  hover:text-white  hover:border-primary hover:scale-110   "
            >
              OUR PROCESS
            </Link>
          </li>
          <li className="px-6 text-center hover:bg-darkblue h-full tracking-wide flex items-center  ">
            <Link
              to="/faq"
              spy={true}
              smooth={true}
              className="transition-transform text-sm   duration-300 border-b-2 border-transparent  hover:text-white  hover:border-primary hover:scale-110   "
            >
              FAQ
            </Link>
          </li>
          <li className="px-6 text-center hover:bg-darkblue h-full tracking-wide flex items-center  ">
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              className="transition-transform text-sm   duration-300 border-b-2 border-transparent  hover:text-white  hover:border-primary hover:scale-110   "
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <div className=" grid md:hidden  grid-cols-3 items-stretch bg-secondary gap-2 h-20  p-2">
          <div></div>
          <div className="self-start place-self-center">
            <img
              className="object-cover h-32 w-32 scale-110 drop-shadow-2xl shadow-gray-800"
              src="assets\HomePage\INFINITY_BUILDER_LOGO_PNG.png"
              alt=""
            />
          </div>
          <div className="h-16 w-10 self-center  text-primary  place-self-center ">
            <button onClick={handleClick}>
              {click ? <FaTimes size={30} /> : <CiMenuFries size={30} />}
            </button>
            {/* hi */}
          </div>
        </div>
        {click && content}
      </div>
    </nav>
  );
};

export default Nav;
