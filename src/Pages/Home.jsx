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
import { Helmet } from "react-helmet";

// import { BsArrowRight } from "react-icons/bs";
const Home = () => {
  return (
    <section>
      <Helmet>
        <meta
          content="Explore services and offerings of infinity builder"
          charSet="utf-8"
        />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Intro */}
      <div className="intro">
        <div data-aos="flip-left" className="intro-row">
          <img
            className="intro-img"
            src="assets\HomePage\INFINITY_BUILDER_LOGO_PNG.png"
            alt="Infinity Builder Logo "
          />
        </div>
        <div data-aos="fade-right" className="intro-content ">
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
          <Link to="/services" className="intro-btn ">
            INQUIRE NOW{" "}
            <span className="ml-2">
              <TfiArrowRight />
            </span>
          </Link>
        </div>
      </div>
      {/* Our Services Banner*/}
      <div data-aos="fade-right" className="our-services-banner">
        <h1 className="our-services-header ">OUR SERVICES</h1>
        <h1 className="our-services-subheader	"> YEARS OF EXPERIENCE</h1>
      </div>

      {/* Our Services */}
      <div className="our-services-secrion">
        {/*Our Services Content  */}
        <div className="our-services-card">
          <div data-aos="fade-up" className="our-services-card-header">
            <div className="our-services-img">
              <FaTrowelBricks size={70} />
            </div>
            <div className="our-services-content  ">
              <h1 className=" our-services-content-header ">CONSTRUCTION</h1>
              <p className="our-services-content-text">
                Our construction services showcase expertise, precision, and
                dedication. We bring your vision to life, managing every detail
                with meticulous care, ensuring your project is completed on time
                and to the highest standards of quality. Trust us to build the
                future you envision.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="our-services-card-header">
            <div className="our-services-img">
              <MdOutlineRoofing size={70} />
            </div>
            <div className="our-services-content ">
              <h3 className=" our-services-content-header">ROOFING</h3>
              <p className="our-services-content-text">
                Enhance your property with our professional roofing solutions.
                We offer durable, custom roofing options using top-quality
                materials and expert craftsmanship to protect your investment.
                Trust us for a resilient and visually appealing roof.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="our-services-card-header">
            <div className="our-services-img">
              <PiHammerDuotone size={70} />
            </div>
            <div className="our-services-content">
              <h1 className=" our-services-content-header">REMODELING</h1>
              <p className="our-services-content-text">
                If you are looking to enhance or revitalize an existing space,
                our renovation and remodeling services are tailored to meet your
                unique requirements. Our team can transform your current
                property into a modern, functional, and aesthetically pleasing
                space.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" className="more-services-row">
          <Link to="/services" className="more-services-button">
            MORE SERVICES
            <span className="ml-2">
              <PiStackBold />
            </span>
          </Link>
        </div>
      </div>

      {/* WHY US BANNER  */}
      <div data-aos="fade-right" className="why-us-banner">
        <h1 className="why-us-header">WHY US?</h1>
        <h1 className="why-us-subheader">
          {" "}
          ELEVATING CONSTRUCTION STANDARDS{" "}
          {/* Experience, Expertise, Excellence */}
        </h1>
      </div>
      {/* WHY US CONTENT  */}
      <div className="why-us-section">
        <div className="why-us-row">
          <div data-aos="zoom-out" className="why-us-card">
            <h1 className="why-us-card-header ">Exceptional Craftsmanship</h1>
            <p className="why-us-card-text">
              Discover why our construction tea
              <p></p>m stands out. From skilled artisans to expert project
              managers, we take pride in delivering top-notch craftsmanship that
              exceeds industry standards. See how our attention to detail and
              commitment to quality can transform your vision into a reality.
            </p>
          </div>
          <div data-aos="zoom-in" className="why-us-card-logo">
            <GiStoneCrafting size={70} />
          </div>
        </div>

        <div className="why-us-row-reverse">
          <div data-aos="zoom-out" className="why-us-card">
            <h1 className="why-us-card-header ">Demonstrated Expertise</h1>
            <p className="why-us-card-text ">
              We have been building success stories for our clients for years.
              Explore our portfolio of completed projects and learn about our
              proven track record. With a history of on-time delivery and
              satisfied clients, you can trust us to handle your construction
              needs with the same level of expertise and professionalism.
            </p>
          </div>
          <div data-aos="zoom-in" className="why-us-card-logo">
            <MdWorkspacePremium size={70} />
          </div>
        </div>

        <div className="why-us-row">
          <div
            data-aos="zoom-out"
            className="md:max-w-2xl  text-secondary border-b-8 border-r-8 border-primary bg-white p-7"
          >
            <h1 className="why-us-card-header ">Client Centric Approach</h1>
            <p className="why-us-card-text ">
              At our construction company, you are more than just a project; you
              are a valued partner. Discover how our client-centric approach
              puts your needs and vision at the forefront. We collaborate
              closely with you to ensure your project is executed to your exact
              specifications, ensuring your complete satisfaction.
            </p>
          </div>
          <div data-aos="zoom-in" className="why-us-card-logo">
            <TbTargetArrow size={70} />
          </div>
        </div>

        <div className="why-us-row-reverse">
          <div data-aos="zoom-out" className="why-us-card">
            <h1 className="why-us-card-header ">Innovative Solutions</h1>
            <p className="why-us-card-text ">
              We pride ourselves on being at the forefront of construction
              innovation. Learn how our team leverages the latest technologies
              and sustainable building practices to create cutting-edge
              solutions. From eco-friendly designs to efficient project
              management, we are committed to delivering forward-thinking
              results.
            </p>
          </div>
          <div data-aos="zoom-in" className="why-us-card-logo">
            <HiLightBulb size={70} />
          </div>
        </div>

        <div className="why-us-row">
          <div
            data-aos="zoom-out"
            className="md:max-w-2xl  text-secondary border-b-8 border-r-8 border-primary bg-white p-7"
          >
            <h1 className="why-us-card-header ">Safety First</h1>
            <p className="why-us-card-text ">
              Safety is our top priority on every job site. Explore our
              comprehensive safety protocols and training initiatives that keep
              our team and your project secure. We are dedicated to maintaining
              a safe and accident-free environment for everyone involved.
            </p>
          </div>
          <div data-aos="zoom-in" className="why-us-card-logo">
            <AiFillSafetyCertificate size={70} />
          </div>
        </div>
        <div className="why-us-row-reverse">
          <div data-aos="zoom-out" className="why-us-card">
            <h1 className="why-us-card-header ">Transparent Pricing</h1>

            <p className="why-us-card-text ">
              We believe in honest and transparent pricing. Find out how we
              provide detailed cost estimates and clear project timelines,
              ensuring you have full control and awareness of your project
              financial aspects. No hidden fees or surprises; just
              straightforward, fair pricing.
            </p>
          </div>
          <div data-aos="zoom-in" className="why-us-card-logo">
            <GrMoney size={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
