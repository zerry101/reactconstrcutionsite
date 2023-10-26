import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Services from "./Pages/Services";
function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
