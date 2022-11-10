import Header from "../component/header.js";
import Footer from "../component/footer.js";
import Contact from "../component/contact-cpt";
import Link from "next/link";
// import Btn from "../component/btn/dfl_btn.js";
import { useState } from "react";

const testimonials = () => {
  const [testimonial, addtestimonial] = useState(<h2>sakfj</h2>);
  const [num, add_num] = useState();
  const focu = (e) => {
    console.log("object");
  };
  // html.innerHTML = "alskdfj";
  const add_btn = (e) => {
    const html = document.getElementById("addhtml");
    const all = document.getElementById("all");
    const web = document.getElementById("web");
    const app = document.getElementById("app");
    const seo = document.getElementById("seo");
    if (e.target.id == "web") {
      add_num(3);
      web.className = "active_btn";
      app.className = "";
      seo.className = "";
      all.className = "";
    } else if (e.target.id == "app") {
      add_num(3);
      app.className = "active_btn";
      web.className = "";
      seo.className = "";
      all.className = "";
    } else if (e.target.id == "seo") {
      add_num(3);
      seo.className = "active_btn";
      web.className = "";
      app.className = "";
      all.className = "";
    } else {
      add_num(6);
      all.className = "active_btn";
      web.className = "";
      app.className = "";
      seo.className = "";
    }
    // addtestimonial(
    //   <h5>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iusto
    //     cupiditate doloremque rerum, optio ad. Excepturi iure fuga ad placeat
    //     ratione minima iste tempora voluptatum dolore optio, fugiat libero
    //     voluptas.
    //   </h5>
    // );
    for (let i = 0; i < num; i++) {
      addtestimonial(
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
      );
      // addtestimonial(<h2>hello</h2>);
      // html.innerHTML += "<h2>hello</h2>";
      // addtestimonial(testimonial+<h4>alskdfj</h4>);
      // html.innerHTML = "<h4>alskf</h4>";
      // add_btn.innerHTML = "<h4>alskf</h4>";
    }
    console.log(e.type);
  };
  return (
    <div className="testimonials">
      <Header />
      <section className="sub-banner">
        <h2>TESTIMONIALS</h2>
        <img src="image/testimonial.svg" alt="" className="phone" />
      </section>
      <section className="testimonials-info">
        <div className="tab" onBlur={focu}>
          {/* <Btn className="default">All</Btn> */}
          <Link href="#" legacyBehavior>
            <a id="all" className="active_btn" onClick={add_btn}>
              All
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a id="web" onClick={add_btn}>
              Web Design
            </a>
          </Link>
          <Link href="#" legacyBehavior className="appdesign">
            <a id="app" onClick={add_btn}>
              App Design
            </a>
          </Link>
          <Link href="#" legacyBehavior onClick={add_btn}>
            <a id="seo" onClick={add_btn}>
              SEO
            </a>
          </Link>
        </div>
        {/* <span id="addhtml">alsdkjf</span> */}
        {/* {testimonial} */}
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

export default testimonials;
