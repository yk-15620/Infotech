import Header from "../component/header.js";
import Footer from "../component/footer.js";
import Contact from "../component/contact-cpt";
import Graphic from "../component/graphic";
import UiUx from "../component/uiux";
import WebApp from "../component/web-app";
import { useState } from "react";

const services = () => {
  var [service, setservice] = useState(<Graphic />);
  function addservice(e) {
    // console.log(e.target.selectedIndex);
    if (e.target.id == 0) {
      setservice(<Graphic />);
    } else if (e.target.id == 1) {
      setservice(<UiUx />);
    } else if (e.target.id == 2) {
      setservice(<WebApp />);
    }
  }
  return (
    <div className="services">
      <Header addservice={addservice} setservice={setservice} />
      {service}
      <Contact />
      <Footer />
    </div>
  );
};

export default services;
