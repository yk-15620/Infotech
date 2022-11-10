import Btn from "../component/btn/dfl_btn";
import Header from "../component/header.js";
import Footer from "../component/footer.js";
import Banner from "../component/banner.js";
import Contact from "../component/contact-cpt";
// import Image from "next/image";

const home = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <span style={{backgroundColor:'blue',width:'200px',height:'100px',display:'inline-block',border:'2px solid red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed porro eos, excepturi est totam ipsa. Consequuntur nulla, et rem cumque, amet accusantium doloribus facilis vero animi, hic non iste!</span> */}
      <section className="second">
        <div>
          <h3>Our most powerful engine to date</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <Btn className="arrow" href="/portfolio">
            Our Portfolio
          </Btn>
        </div>
        {/* <img src="image\Background.jpg" alt="" /> */}
        {/* <Image src="/image/Background.jpg" alt="" layout="fill" /> */}
      </section>
      <section className="ourservices">
        <h2>our services</h2>
        <div>
          <div className="graphic">
            <img src="image/computer.svg" alt="" />
            <h3>Graphics Designing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="ui-ux">
            <img src="image/XMLID_30_.svg" alt="" />
            <h3>UI/UX Designing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="web">
            <img src="image/XMLID_299_.svg" alt="" />
            <h3>Web/App Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>
      <section className="uiwebgraphic">
        <div>
          <img src="image\ux.svg" alt="" />
          <div className="right">
            <h3>UI/UX Designing and Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Btn className="default" href="/contact">
              contact us
            </Btn>
          </div>
        </div>
        <div>
          <div className="left">
            <h3>Graphic Designing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Btn className="default" href="/contact">
              contact us
            </Btn>
          </div>
          <img src="image\second.svg" alt="" />
        </div>
      </section>
      <section className="ourproduct">
        <h2>OUR PRODUCTS</h2>
        <div>
          <img src="image/product_tablet.svg" className="ourtab" alt="" />
          <img
            src="image/product_tablet_mobileview.svg"
            className="ourtab_mobileview"
            alt=""
          />
          <img src="image/tab_img.svg" alt="" className="tab_img" />
          <div className="right">
            <div>
              <div className="app-heading">
                <img src="image/check_circle.svg" alt="" />
                <h3>LYK App</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididuntut lab.
              </p>
            </div>
            <div className="paisabhejo">
              <div className="app-heading">
                <img src="image/check_circle2.svg" alt="" />
                <h3>Paisa Bhejo App</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididuntut lab.
              </p>
            </div>
            <div>
              <div className="app-heading">
                <img src="image/check_circle.svg" alt="" />
                <h3>Yap App App</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididuntut lab.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="startservices">
        <h3>Start using our services today</h3>
        <p>
          Your information is secure and encrypted, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliquat enim ad minim.
        </p>
        <Btn className="default" href="/contact">
          contact us
        </Btn>
      </section>
      <section className="team">
        <h2>The team</h2>
        <p>
          Your information is secure and encrypted, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliquat enim ad minim.
        </p>
        <div>
          <div>
            <img src="image\Mask.jpg" alt="" />
            <h3>Stella Alvarez</h3>
            <p>CMO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="social">
              <img src="image\Twitter.svg" alt="" />
              <img src="image\Facebook.svg" alt="" />
              <img src="image\instagram.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="image\Mask-1.jpg" alt="" />
            <h3>John Alvarez</h3>
            <p>CMO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="social">
              <img src="image\Twitter.svg" alt="" />
              <img src="image\Facebook.svg" alt="" />
              <img src="image\instagram.svg" alt="" />
            </div>
          </div>
          <div>
            <img src="image\Mask-2.jpg" alt="" />
            <h3>Stella Alvarez</h3>
            <p>CMO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="social">
              <img src="image\Twitter.svg" alt="" />
              <img src="image\Facebook.svg" alt="" />
              <img src="image\instagram.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="whylove">
        <h2>Why people love Form </h2>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div>
              <img src="image\Twitter.svg" alt="" />
              <p>@Ralph_Keller</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div>
              <img src="image\Twitter.svg" alt="" />
              <p>@Frank_Todd</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div>
              <img src="image\Twitter.svg" alt="" />
              <p>@Della_Morgan</p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
