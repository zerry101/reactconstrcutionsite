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
      <div className="flex flex-col  bg-secondary">
        <div className="w-full max-sm:p-5 md:p-10    max-sm:text-sm text-xl  font-extralight md:tracking-wider  flex   flex-wrap  justify-center">
          {/* Navigation Links */}
          <div className="h-auto max-w-sm text-center p-10 md:m-16 m-2 border-b-2 transition duration-300 border-transparent hover:border-b-primary hover:scale-110 hover:text-primary text-graywhite  ">
            HOME
          </div>
          <div className="h-auto max-w-sm text-center md:m-16 p-10  m-2 border-b-2 transition duration-300 border-transparent hover:border-b-primary hover:scale-110 hover:text-primary text-graywhite  ">
            OUR SERVICES
          </div>
          <div className="h-auto max-w-sm text-center md:m-16 p-10 m-2 border-b-2 transition duration-300 border-transparent hover:border-b-primary hover:scale-110 hover:text-primary text-graywhite  ">
            ABOUT US
          </div>
          <div className="h-auto max-w-sm text-center md:m-16  p-10 m-2 border-b-2 transition duration-300 border-transparent hover:border-b-primary hover:scale-110 hover:text-primary text-graywhite  ">
            CONTACT US
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-wrap   items-center justify-center  max-sm:text-sm text-2xl  font-extralight md:tracking-wider  w-full ">
          <div className="p-10 w h-full   md:m-16 m-2  transition duration-300  hover:scale-110  text-graywhite">
            <img
              src="\assets\Footer\Gold Black Modern Real Estate Logo (1).png"
              className="object-cover"
              width={150}
              alt=""
            />
          </div>
          <div className="p-10 max-w-sm h-full flex-wrap justify-center text-center inline-flex items-center   m-2 border-b-2 transition duration-300 border-transparent   hover:scale-110 hover:text-primary text-graywhite">
            <span className="m-2">
              <ImLocation2 size={45} />
            </span>
            718,City Gate, Vishala,Ahmedabad{" "}
          </div>
          <div className="p-10 max-w-sm h-full flex-wrap justify-center text-center inline-flex items-center   m-2 border-b-2 transition duration-300 border-transparent   hover:scale-110 hover:text-primary text-graywhite">
            <span className="m-2">
              <IoMdCall size={45} />
            </span>
            +91 7654983402{" "}
          </div>
          <div className="p-10 max-w-sm h-full flex-wrap justify-center text-center inline-flex items-center   m-2 border-b-2 transition duration-300 border-transparent   hover:scale-110 hover:text-primary text-graywhite">
            <span className="m-2">
              <HiMail size={45} />
            </span>
            xyz@gmail.com{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
