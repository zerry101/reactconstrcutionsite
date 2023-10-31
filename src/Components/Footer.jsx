import { MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ImLocation2 } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <div className="bg-primary w-full text-secondary flex flex-col space-y-14 justify-center h-auto p-12">
        <h1 className="text-4xl font-sans text-center tracking-widest">
          {" "}
          WE CAN HELP BUILD YOUR PROJECT
        </h1>
        <h1 className="text-2xl tracking-wider font-thin text-center">
          {" "}
          TELL US ABOUT YOUR PROJECT
        </h1>
        <div className="text-center">
          <Link
            to="/services"
            className="contact-button  inline-flex items-center "
          >
            CONTACT US
            <span className="ml-2">
              <MdContacts />
            </span>
          </Link>
        </div>
      </div>
      <div className="grid items-center  max-md:grid-rows-4 max-sm:grid-rows-4  lg:grid-cols-4    bg-secondary w-full h-auto p-5">
        <div className="m-2 place-self-center ">
          <img
            src="assets\Footer\Gold Black Modern Real Estate Logo (1).png"
            alt=""
            width={200}
          />
        </div>
        <div className="text-white items-start flex flex-col m-2 place-self-center self-start font-thin">
          <h1 className="text-2xl place-self-center">ABOUT US</h1>
          Infinity Builders is a premier construction company dedicated to
          turning your vision into reality. With a wealth of experience in
          residential and commercial construction, we offer a wide range of
          services, from design and planning to execution and project
          management. Our commitment to quality, innovation, and client
          satisfaction sets us apart as your trusted partner for all
          construction needs.
        </div>
        <div className=" font-thin items-start flex self-start flex-col text-white place-self-center  m-2">
          <h1 className="text-2xl place-self-center">CONTACT US</h1>
          <div className="gap-3 hover:text-primary transition duration-300 inline-flex items-center my-3 ">
            <div>
              <ImLocation2 size={30} />
            </div>
            <p>718,CITY GATE,VISHALA,AHMEDABAD</p>{" "}
          </div>
          <Link
            className=" gap-3 hover:text-primary transition duration-300 inline-flex items-center my-3"
            onClick={() => (window.location = "mailto:xyz@gmail.com")}
          >
            <div>
              <HiMail size={30} />
            </div>
            <p>xyz@gmail.com</p>
          </Link>
          <div className=" gap-3 hover:text-primary transition duration-300 inline-flex items-center my-3">
            <div>
              <IoMdCall size={30} />
            </div>
            <p>+91 9865349023</p>
          </div>
        </div>
        <div className="text-white  items-start flex flex-col  m-2 place-self-center self-start font-thin">
          <h1 className="text-2xl place-self-center">LINKS</h1>
          <div className="flex flex-row flex-wrap    justify-center ">
            <Link
              className="mx-2   hover:text-primary transition duration-300 "
              to="/home"
            >
              HOME
            </Link>
            |
            <Link
              className="mx-2   hover:text-primary transition duration-300 "
              to="/services"
            >
              SERVICES
            </Link>
            |
            <Link
              className="mx-2   hover:text-primary transition duration-300 "
              to="/Wheredowebuild"
            >
              WHERE DO WE BUILD?
            </Link>
            |
            <Link
              className="mx-2   hover:text-primary transition duration-300 "
              to="/ourprocess"
            >
              OUR PROCESS
            </Link>
            |
            <Link
              className="mx-2   hover:text-primary transition duration-300 "
              to="/faq"
            >
              FAQ
            </Link>
            |
            <Link
              className="mx-2   hover:text-primary transition duration-300 "
              to="/contact"
            >
              CONTACT US
            </Link>
            |
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
