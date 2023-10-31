import { HiClipboardDocumentList } from "react-icons/hi2";
import { BsFillHouseGearFill } from "react-icons/bs";
import { AiFillCalculator } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaCompassDrafting } from "react-icons/fa6";

const OurProcess = () => {
  return (
    <section className="bg-dullwhite">
      {" "}
      <div
        data-aos="fade-right"
        className="w-full flex flex-col    justify-center bg-primary"
      >
        <div className="text-secondary tracking-widest mt-9 max-md:mt-20  max-sm:mt-20  font-sans text-center text-4xl">
          PROJECT WORKFLOW{" "}
        </div>
        <div className="text-secondary tracking-widest m-4  font-thin text-center text-2xl">
          FROM VISION TO REALITY
        </div>
      </div>
      {/* OUR RPOCESS  */}
      <div className="flex w-full p-10 flex-row  flex-wrap justify-center gap-8  ">
        {/* OUR PROCESS CONTENT */}
        <div
          data-aos="zoom-out"
          className=" p-5 group hover:bg-black transition duration-500 hover:text-white bg-white text-secondary rounded-xl shadow-lg md:max-w-md max-sm:max-w-sm  h-full"
        >
          <div className="flex flex-col  ">
            <div className="flex  items-center max-sm:text-center max-sm:flex-col justify-start max-sm:justify-center gap-4 my-4 flex-wrap md:flex-row">
              {/* LOGO */}
              <div className="p-5 transition duration-500 text-primary group-hover:text-secondary group-hover:bg-primary  bg-secondary rounded-full">
                <HiClipboardDocumentList size={40} />
              </div>
              <div className="flex  transition duration-500 group-hover:text-primary tracking-widest flex-col">
                <div className="text-4xl ">STEP 1</div>
                <div className="text-2xl">PROJECT INSPECTION</div>
              </div>
            </div>
            {/* CARD CONTENT */}
            <div className=" font-thin  tracking-normal text-xl">
              Our construction journey kicks off with Project Inspection. This
              essential step involves a thorough examination of every detail,
              ensuring they meet industry standards and quality requirements,
              giving your project a sturdy foundation.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className=" p-5 group hover:bg-black transition duration-500 hover:text-white bg-white text-secondary rounded-xl shadow-lg md:max-w-md max-sm:max-w-sm  h-full"
        >
          <div className="flex flex-col  ">
            <div className="flex  items-center max-sm:text-center max-sm:flex-col justify-start max-sm:justify-center gap-4 my-4 flex-wrap md:flex-row">
              {/* LOGO */}
              <div className="p-5 transition duration-500 text-primary group-hover:text-secondary group-hover:bg-primary  bg-secondary rounded-full">
                <FaCompassDrafting size={40} />
              </div>
              <div className="flex  transition duration-500 group-hover:text-primary tracking-widest flex-col">
                <div className="text-4xl ">STEP 2</div>
                <div className="text-2xl">DWELLING PLANNING</div>
              </div>
            </div>
            {/* CARD CONTENT */}
            <div className=" font-thin  tracking-normal text-xl">
              Once Project Inspection is complete, we delve into Dwelling
              Planning. In this phase, we work closely with you to design and
              lay out your dream home, taking your ideas and turning them into a
              practical blueprint that fits your vision and budget.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className=" p-5 group hover:bg-black transition duration-500 hover:text-white bg-white text-secondary rounded-xl shadow-lg md:max-w-md max-sm:max-w-sm  h-full"
        >
          <div className="flex flex-col  ">
            <div className="flex  items-center max-sm:text-center max-sm:flex-col justify-start max-sm:justify-center gap-4 my-4 flex-wrap md:flex-row">
              {/* LOGO */}
              <div className="p-5 transition duration-500 text-primary group-hover:text-secondary group-hover:bg-primary  bg-secondary rounded-full">
                <AiFillCalculator size={40} />
              </div>
              <div className="flex  transition duration-500 group-hover:text-primary tracking-widest flex-col">
                <div className="text-4xl ">STEP 3</div>
                <div className="text-2xl">PROJECT ESTIMATE</div>
              </div>
            </div>
            {/* CARD CONTENT */}
            <div className=" font-thin  tracking-normal text-xl">
              After Dwelling Planning, we calculate the costs involved and
              provide you with a Project Estimate. This financial roadmap
              outlines the expenses, helping you prepare your budget for a
              seamless construction journey.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className=" p-5 group hover:bg-black transition duration-500 hover:text-white bg-white text-secondary rounded-xl shadow-lg md:max-w-md max-sm:max-w-sm  h-full"
        >
          <div className="flex flex-col  ">
            <div className="flex  items-center max-sm:text-center max-sm:flex-col justify-start max-sm:justify-center gap-4 my-4 flex-wrap md:flex-row">
              {/* LOGO */}
              <div className="p-5 transition duration-500 text-primary group-hover:text-secondary group-hover:bg-primary  bg-secondary rounded-full">
                <AiOutlineFileDone size={40} />
              </div>
              <div className="flex  transition duration-500 group-hover:text-primary tracking-widest flex-col">
                <div className="text-4xl ">STEP 4</div>
                <div className="text-2xl">ASSESSMENT</div>
              </div>
            </div>
            {/* CARD CONTENT */}
            <div className=" font-thin  tracking-normal text-xl">
              The Assessment phase takes a close look at the progress, ensuring
              everything aligns with our quality and safety standards. It is
              like a regular check-up for your project, keeping it on track and
              making necessary adjustments if required.{" "}
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className=" p-5 group hover:bg-black transition duration-500 hover:text-white bg-white text-secondary rounded-xl shadow-lg md:max-w-md max-sm:max-w-sm  h-full"
        >
          <div className="flex flex-col  ">
            <div className="flex  items-center max-sm:text-center max-sm:flex-col justify-start max-sm:justify-center gap-4 my-4 flex-wrap md:flex-row">
              {/* LOGO */}
              <div className="p-5 transition duration-500 text-primary group-hover:text-secondary group-hover:bg-primary  bg-secondary rounded-full">
                <BsFillHouseGearFill size={40} />
              </div>
              <div className="flex  transition duration-500 group-hover:text-primary tracking-widest flex-col">
                <div className="text-4xl ">STEP 5</div>
                <div className="text-2xl">FINAL RESOLUTION</div>
              </div>
            </div>
            {/* CARD CONTENT */}
            <div className=" font-thin  tracking-normal text-xl">
              The construction process concludes with Final Resolution. This is
              where we wrap up the project, ensuring every detail is in place,
              and the final result meets or exceeds your expectations. It is the
              finishing touch that brings your vision to life.{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
