import { FaMapLocationDot } from "react-icons/fa6";
import BasicAccordion from "../Components/WdwbAccordian";

function Wheredowebuild() {
  return (
    <section>
      <div
        data-aos="fade-right"
        className="w-full flex flex-col  justify-center bg-primary "
      >
        <div className="text-secondary tracking-widest mt-9 max-md:mt-20  max-sm:mt-20  font-sans text-center text-4xl">
          LOCATIONS SHOWCASE
        </div>
        <div className="text-secondary tracking-widest m-4  font-thin text-center text-2xl">
          AREA HIGHLIGHTS
        </div>
      </div>
      <div className="w-full bg-dullwhite p-10   ">
        <div className="flex flex-col items-center  justify-center max-sm:p-2   ">
          <div className="flex  flex-row">
            <div
              data-aos="fade-left"
              className="bg-primary my-6 text-secondary justify-center rounded-3xl p-10"
            >
              <FaMapLocationDot size={50} />
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="bg-white p-4  flex flex-col flex-wrap rounded-2xl border-2 border-neutral-500 text-secondary shadow-lg  max-w-xl  max-sm:text-center  text-2xl   font-thin"
          >
            <div className="text-4xl font-sans tracking-wide  text-center">
              INTRODUCING OUR LOCATIONS GALLERY
            </div>
            <div className="my-5 text-center">
              Explore our portfolio of construction sites in Ahmedabad. Witness
              our dedication to excellence within the city. Click to learn more
              about each location and our commitment to top-quality
              construction.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div data-aos="fade-up" className="m-5   max-w-7xl ">
            <BasicAccordion className="text-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wheredowebuild;
