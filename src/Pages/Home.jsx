import "./Home.css";
// import { BsArrowRight } from "react-icons/bs";
import { TfiArrowRight } from "react-icons/tfi";
import { FaTrowelBricks } from "react-icons/fa6";
import { PiHammerDuotone } from "react-icons/pi";
import { MdOutlineRoofing } from "react-icons/md";
import { GiStoneCrafting } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { PiStackBold } from "react-icons/pi";
// import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

// import { BsArrowRight } from "react-icons/bs";
const Home = () => {
  return (
    <section>
      {/* Intro */}
      <div className=" intro ">
        <div className="flex m-10 items-center justify-center ">
          <img
            className="object-cover  max-h-80 w-auto  shadow-xl"
            src="assets\HomePage\INFINITY_BUILDER_LOGO_PNG.png"
            alt=""
          />
        </div>
        <div className="intro-content font-sans text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto
          sed, numquam tempore necessitatibus corrupti ullam voluptas ab
          voluptatibus, eum maxime hic. Alias repellat voluptatem accusamus,
          ipsa fugiat maxime excepturi suscipit provident hic expedita molestias
          cumque id ex dolores iusto, cum sed officia placeat non fugit,
          obcaecati saepe ducimus. Repellendus eius corrupti fugiat inventore
          obcaecati facere sed velit incidunt quisquam, laudantium id atque
          explicabo quo porro odit qui soluta! Assumenda neque culpa voluptas
          dolores est nostrum? Exercitationem illo, recusandae aspernatur
          maiores ut, accusamus minima corrupti nobis porro quibusdam sapiente
          cupiditate iusto nam rerum labore ex quidem sequi voluptatem adipisci
          placeat.
          <button className="button inline-flex items-center ">
            INQUIRE NOW{" "}
            <span className="ml-2">
              <TfiArrowRight />
            </span>
          </button>
        </div>
      </div>
      {/* Our Services Banner*/}
      <div className="items-center  grid grid-rows-2 space-y-4  justify-center w-full bg-secondary p-7 text-primary">
        <h1 className="font-sans text-4xl tracking-widest text-center">
          OUR SERVICES
        </h1>
        <h1 className="font-thin text-2xl text-center tracking-widest	">
          {" "}
          YEARS OF EXPERIENCE
        </h1>
      </div>

      {/* Our Services */}
      <div className="bg-dullwhite h-auto w-full flex flex-col py-7">
        {/*Our Services Content  */}
        <div className=" items-stretch  flex   max-sm:flex-col   justify-self-center lg:px-80 justify-center  ">
          <div className="flex flex-col max-sm:my-7 text-center    place-items-center mx-7">
            <div className="text-secondary bg-primary   p-12 rounded-full">
              <FaTrowelBricks size={70} />
            </div>
            <div className="font-thin text-secondary">
              <h3 className=" text-3xl my-5 ">CONSTRUCTION</h3>
              <p className="text-justify text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                veniam similique deserunt cumque odit qui modi veritatis in
                alias quasi.
              </p>
            </div>
          </div>

          <div className="flex flex-col max-sm:my-7 text-center place-items-center  mx-7">
            <div className="text-secondary bg-primary  p-12 rounded-full">
              <MdOutlineRoofing size={70} />
            </div>
            <div className="font-thin text-secondary">
              <h3 className=" text-3xl my-5">ROOFING</h3>
              <p className="text-justify text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                veniam similique deserunt cumque odit qui modi veritatis in
                alias quasi.
              </p>
            </div>
          </div>

          <div className="flex flex-col text-center max-sm:my-7   place-items-center mx-7">
            <div className="text-secondary bg-primary  p-12 rounded-full">
              <PiHammerDuotone size={70} />
            </div>
            <div className="font-thin text-secondary">
              <h3 className=" text-3xl my-5 ">REMODELING</h3>
              <p className="text-justify text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                veniam similique deserunt cumque odit qui modi veritatis in
                alias quasi.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xl">
          <Link to="/services" className="button inline-flex items-center ">
            MORE SERVICES
            <span className="ml-2">
              <PiStackBold />
            </span>
          </Link>
        </div>
      </div>

      {/* WHY US BANNER  */}
      <div className="items-center  grid grid-rows-2 space-y-4  justify-center w-full bg-secondary p-7 text-primary">
        <h1 className="font-sans text-4xl tracking-widest text-center">
          WHY US?
        </h1>
        <h1 className="font-thin text-2xl text-center tracking-widest	">
          {" "}
          ELEVATING CONSTRUCTION STANDARDS{" "}
          {/* Experience, Expertise, Excellence */}
        </h1>
      </div>
      {/* WHY US CONTENT  */}
      <div className="w-full text-xl font-light bg-dullwhite h-auto   p-12 flex flex-wrap justify-center">
        <div className="flex  gap-28 md:flex-row max-sm:flex-col-reverse my-12 -tracking-wide text-justify items-center place-items-center">
          <div className="md:max-w-2xl  text-secondary border-b-8 border-r-8  border-primary  p-7">
            <h1 className="text-4xl font-sans  my-10">
              Exceptional Craftsmanship
            </h1>
            Discover why our construction team stands out. From skilled artisans
            to expert project managers, we take pride in delivering top-notch
            craftsmanship that exceeds industry standards. See how our attention
            to detail and commitment to quality can transform your vision into a
            reality.
          </div>
          <div className="rounded-full p-10 ring-4 text-secondary bg-primary ring-secondary">
            <GiStoneCrafting size={70} />
          </div>
        </div>

        <div className="flex  gap-28 md:flex-row-reverse max-sm:flex-col-reverse my-12 -tracking-wide text-justify items-center place-items-center">
          <div className="md:max-w-2xl  text-secondary border-b-8 border-l-8 border-primary bg-white p-7">
            <h1 className="text-4xl font-sans   my-10">
              Demonstrated Expertise
            </h1>
            We have been building success stories for our clients for years.
            Explore our portfolio of completed projects and learn about our
            proven track record. With a history of on-time delivery and
            satisfied clients, you can trust us to handle your construction
            needs with the same level of expertise and professionalism.
          </div>
          <div className="rounded-full p-10 ring-4 text-secondary bg-primary ring-secondary">
            <MdWorkspacePremium size={70} />
          </div>
        </div>

        <div className="flex  gap-28 md:flex-row max-sm:flex-col-reverse my-12 -tracking-wide text-justify items-center place-items-center">
          <div className="md:max-w-2xl  text-secondary border-b-8 border-r-8 border-primary bg-white p-7">
            <h1 className="text-4xl font-sans   my-12">
              Client Centric Approach
            </h1>
            At our construction company, you are more than just a project; you
            are a valued partner. Discover how our client-centric approach puts
            your needs and vision at the forefront. We collaborate closely with
            you to ensure your project is executed to your exact specifications,
            ensuring your complete satisfaction.
          </div>
          <div className="rounded-full p-10 ring-4 text-secondary bg-primary ring-secondary">
            <TbTargetArrow size={70} />
          </div>
        </div>

        <div className="flex  gap-28 md:flex-row-reverse max-sm:flex-col-reverse my-12 -tracking-wide text-justify items-center place-items-center">
          <div className="md:max-w-2xl  text-secondary border-b-8 border-l-8 border-primary bg-white p-7">
            <h1 className="text-4xl font-sans    my-12">
              Innovative Solutions
            </h1>
            We pride ourselves on being at the forefront of construction
            innovation. Learn how our team leverages the latest technologies and
            sustainable building practices to create cutting-edge solutions.
            From eco-friendly designs to efficient project management, we are
            committed to delivering forward-thinking results.
          </div>
          <div className="rounded-full p-10 ring-4 text-secondary bg-primary ring-secondary">
            <HiLightBulb size={70} />
          </div>
        </div>

        <div className="flex  gap-28 md:flex-row max-sm:flex-col-reverse my-12 -tracking-wide text-justify items-center place-items-center">
          <div className="md:max-w-2xl  text-secondary border-b-8 border-r-8 border-primary bg-white p-7">
            <h1 className="text-4xl font-sans    my-12">Safety First</h1>
            Safety is our top priority on every job site. Explore our
            comprehensive safety protocols and training initiatives that keep
            our team and your project secure. We are dedicated to maintaining a
            safe and accident-free environment for everyone involved.
          </div>
          <div className="rounded-full p-10 ring-4 text-secondary bg-primary ring-secondary">
            <AiFillSafetyCertificate size={70} />
          </div>
        </div>
        <div className="flex  gap-28 md:flex-row-reverse max-sm:flex-col-reverse my-12 -tracking-wide text-justify items-center place-items-center">
          <div className="md:max-w-2xl  text-secondary border-b-8 border-l-8 border-primary bg-white p-7">
            <h1 className="text-4xl font-sans    my-12">Transparent Pricing</h1>
            We believe in honest and transparent pricing. Find out how we
            provide detailed cost estimates and clear project timelines,
            ensuring you have full control and awareness of your project
            financial aspects. No hidden fees or surprises; just
            straightforward, fair pricing.
          </div>
          <div className="rounded-full p-10 ring-4 text-secondary bg-primary ring-secondary">
            <GrMoney size={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
