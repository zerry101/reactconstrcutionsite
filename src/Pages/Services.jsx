import "./Services.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaTrowelBricks } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiHammerDuotone } from "react-icons/pi";
import { MdOutlineArchitecture } from "react-icons/md";
import { SiInstructure } from "react-icons/si";
import { MdEngineering } from "react-icons/md";

import { MdOutlineRoofing } from "react-icons/md";

function Services() {
  return (
    <section className="bg-dullwhite">
      {/* What we offer banner */}
      <div data-aos="fade-right" className="page-banner">
        <div className="text-secondary tracking-widest mt-9 max-md:mt-20  max-sm:mt-20  font-sans text-center text-4xl">
          WHAT WE OFFER?
        </div>
        <div className="text-secondary tracking-widest m-4  font-thin text-center text-2xl">
          DISCOVER OUR EXPERTISE
        </div>
      </div>
      {/* What we offer content */}
      <div className=" flex   flex-wrap gap-10   justify-center p-10">
        <div
          data-aos="zoom-in"
          className="bg-white  flex flex-col  max-w-md    shadow-xl transition duration-200 hover:scale-105 hover:bg-primary hover:text-secondary "
        >
          <img
            className=""
            src="assets\ServicePage\project_inspection_img2.jpg"
            alt=""
            // width={200}
            // height={200}
          />
          <div className="flex flex-col p-5">
            <div className="text-3xl   font-sans tracking-wider text-center">
              Complete Turnkey at Rs 2100/Sq.ft{" "}
            </div>{" "}
            <div className="">
              <ul className="mx-3 my-5 text-2xl font-thin flex flex-col ">
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  All Structural works{" "}
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  All Joinery Works
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  Electrical & Plumbing
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  Putty & Painting
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  Complete Flooring
                </li>
              </ul>
              <div className="flex justify-center h-fit ">
                <Link
                  to="/contact"
                  className="text-center bg-secondary w-fit p-3 border-2 border-transparent transition duration-200 hover:bg-primary hover:scale-105 hover:text-secondary hover:border-secondary font-sans tracking-wider text-lg text-primary"
                >
                  CHECK OUR RATES
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-white  flex flex-col  max-w-md    shadow-xl transition duration-200 hover:scale-105 hover:bg-primary hover:text-secondary "
        >
          <img
            className=""
            src="assets\ServicePage\frameOnlyImg.jpg"
            alt=""
            // width={200}
            // height={200}
          />
          <div className="flex flex-col p-5">
            <div className="text-3xl   font-sans tracking-wider text-center">
              Frame Only at Only Rs.1000 Sq/ft{" "}
            </div>{" "}
            <div className="">
              <ul className="mx-3 my-5 text-2xl font-thin flex flex-col ">
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  Foundation Works{" "}
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  Brick Works{" "}
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  RCC Works{" "}
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  Plastering Works
                </li>
                <li className="items-center gap-2 my-1 inline-flex">
                  <span className=" ">
                    <BiSolidRightArrow />
                  </span>
                  White Washing{" "}
                </li>
              </ul>
              <div className="flex justify-center h-fit ">
                <Link
                  to="/contact"
                  className="text-center bg-secondary w-fit p-3 border-2 border-transparent transition duration-200 hover:bg-primary hover:scale-105 hover:text-secondary hover:border-secondary font-sans tracking-wider text-lg text-primary"
                >
                  CHECK OUR RATES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR SERVCIES BANNER */}
      <div
        data-aos="fade-right"
        className="grid grid-rows-2 place-items-center w-full space-y-4 p-7 bg-secondary text-primary"
      >
        <div className="text-center font-sans tracking-widest text-4xl">
          OUR SERVICES
        </div>
        <div className="text-center  font-thin tracking-wider text-2xl">
          CRAFTING YOUR VISION
        </div>
      </div>
      {/* OUR SERVICES CONTENT */}
      <div className="flex md:flex-row flex-wrap    w-full  justify-center ">
        <div
          data-aos="zoom-in"
          className="  m-12 flex flex-col text-secondary font-sans text-xl font-thin   gap-10 md:w-1/3 h-auto  text-center place-items-center  "
        >
          <div className="bg-primary p-12 rounded-full ">
            <FaTrowelBricks size={70} />
          </div>
          <div className="bg-white shadow-lg italic  text-justify  p-7 border-b-4    border-primary ">
            <div className="text-3xl my-4 text-center">CONSTRUCTION</div>
            Our construction services showcase expertise, precision, and
            dedication. We bring your vision to life, managing every detail with
            meticulous care, ensuring your project is completed on time and to
            the highest standards of quality. Trust us to build the future you
            envision.
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="  m-12 flex flex-col text-secondary font-sans text-xl font-thin   gap-10 md:w-1/3 h-auto  text-center place-items-center  "
        >
          <div className="bg-primary p-12 rounded-full ">
            <MdOutlineRoofing size={70} />
          </div>
          <div className="bg-white shadow-lg italic  text-justify  p-7 border-b-4    border-primary ">
            <div className="text-3xl my-4 text-center  ">ROOFING</div>
            Enhance your property with our professional roofing solutions. We
            offer durable, custom roofing options using top-quality materials
            and expert craftsmanship to protect your investment. Trust us for a
            resilient and visually appealing roof.
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="  m-12 flex flex-col text-secondary font-sans text-xl font-thin   gap-10 md:w-1/3 h-auto  text-center place-items-center  "
        >
          <div className="bg-primary p-12 rounded-full ">
            <PiHammerDuotone size={70} />
          </div>
          <div className="bg-white shadow-lg italic  text-justify  p-7 border-b-4    border-primary ">
            <div className="text-3xl my-4 text-center">REMODELING</div>
            If you are looking to enhance or revitalize an existing space, our
            renovation and remodeling services are tailored to meet your unique
            requirements. Our team can transform your current property into a
            modern, functional, and aesthetically pleasing space.
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="  m-12 flex flex-col text-secondary font-sans text-xl font-thin   gap-10 md:w-1/3 h-auto  text-center place-items-center  "
        >
          <div className="bg-primary p-12 rounded-full ">
            <MdOutlineArchitecture size={70} />
          </div>
          <div className="bg-white shadow-lg italic  text-justify  p-7 border-b-4    border-primary ">
            <div className="text-3xl my-4 text-center">
              {" "}
              ARCHITETURE & PLANNING
            </div>
            We blend creativity with practicality, crafting spaces that go
            beyond ordinary. Our designs are a testament to your unique vision,
            turning ideas into reality. Let us partner with you from concept to
            completion, redefining the art of architecture with a personal
            touch.
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="  m-12 flex flex-col text-secondary font-sans text-xl font-thin   gap-10 md:w-1/3 h-auto  text-center place-items-center  "
        >
          <div className="bg-primary p-12 rounded-full ">
            <SiInstructure size={70} />
          </div>
          <div className="bg-white shadow-lg italic  text-justify  p-7 border-b-4    border-primary ">
            <div className="text-3xl my-4 text-center">
              {" "}
              STRUCTUARL ENGINEERING SOLUTIONS
            </div>
            Our expertise in structural engineering offers a foundation of
            strength and stability. We provide innovative solutions that ensure
            the safety and resilience of your structures. Trust us to make your
            vision stand strong, uniquely blending form and function.
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="  m-12 flex flex-col text-secondary font-sans text-xl font-thin   gap-10 md:w-1/3 h-auto  text-center place-items-center  "
        >
          <div className="bg-primary p-12 rounded-full ">
            <MdEngineering size={70} />
          </div>
          <div className="bg-white shadow-lg italic  text-justify  p-7 border-b-4    border-primary ">
            <div className="text-3xl my-4 text-center">
              {" "}
              PROJECT MANAGEMENT & CONSULTATION
            </div>
            Streamline your construction projects with our expert guidance and
            consultancy. We offer tailored solutions to ensure efficient project
            execution and cost-effective, successful results. Trust our
            experienced team to bring your vision to fruition with confidence.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
