import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import OurProcess from "./Pages/ourprocess";
import Services from "./Pages/Services";
import Faq from "./Pages/Faq";
import Wheredowebuild from "./Pages/Wheredowebuild";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import Scrolltotop from "./Components/Scrolltotop";
import { Triangle } from "react-loader-spinner";

function App() {
  // eslint-disable-next-line no-undef
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true),
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();
  }, []);

  return (
    <>
      {loading ? (
        <div className="  flex flex-col h-screen items-center   content-center  justify-center w-full text-center ">
          {" "}
          <Triangle
            height="160"
            width="160"
            color="#f6c606"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          <h1 className="text-secondary text-5xl">INFFINITY BUILDERS</h1>
        </div>
      ) : (
        <div className="">
          <Helmet>
            <title>Infinity Builder</title>
            <meta
              // name="Infinity Buiders"
              content="get construction services at best prices"
            />
          </Helmet>
          <Scrolltotop className="hidden" />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ourprocess" element={<OurProcess />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/Wheredowebuild" element={<Wheredowebuild />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
