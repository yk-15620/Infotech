import Header from "../component/header.js";
import Footer from "../component/footer.js";

import Contact from "../component/contact-cpt";

const about = () => {
  return (
    <div className="about">
      <Header />
      <section className="sub-banner">
        <h2>ABOUT</h2>
        <img src="image/team.svg" alt="" className="phone" />
      </section>
      <section className="techcompany">
        <h2>The ONLY TECH COMPANY YOU WANT FOR YOUR PROJECT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>
      </section>
      <section className="about-3">
        <span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat incididunt ut laboret.
          </p>
          <p className="midle-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat incididunt ut laboret.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat incididunt ut laboret.
          </p>
        </span>
        <img src="image\about-Background.svg" alt="" />
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default about;
