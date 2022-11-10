// import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
// import logo from "../image/Group 2.svg";
// import mail from "../image/Group 2.svg";
// import contact from "./contact-cpt";
const header = (props) => {
  const hide = (e) => {
    console.log(e.type);
  };
  const add_id = (e) => {
    const services = document.getElementById("services");
    const products = document.getElementById("products");
    const service = document.getElementById("service");
    const product = document.getElementById("product");
    const testimonial = document.getElementById("testimonial");
    const portfolio = document.getElementById("portfolio");
    const about = document.getElementById("about");
    const contact = document.getElementById("contact");
    function hel(params) {
      console.log(params.type);
    }
    service.addEventListener("click", hel);
    // service.addEventListener("onClick", (e) => console.log(e.type));
    if (e.target.id == "service") {
      if (services.className == "block") {
        e.target.className = "product";
        services.className = services.className.replace("block", "option");
        products.className = products.className.replace("option", "block");
        product.className = product.className.replace("product", "");
        testimonial.className = testimonial.className.replace("product", "");
        portfolio.className = portfolio.className.replace("product", "");
        about.className = about.className.replace("product", "");
        contact.className = contact.className.replace("product", "");
      } else {
        e.target.className = "";
        services.className = services.className.replace("option", "block");
      }
    } else if (e.target.id == "product") {
      if (products.className == "block") {
        e.target.className = "product";
        products.className = products.className.replace("block", "option");
        console.log(e.target);
        services.className = services.className.replace("option", "block");
        service.className = service.className.replace("product", "");
        testimonial.className = testimonial.className.replace("product", "");
        portfolio.className = portfolio.className.replace("product", "");
        about.className = about.className.replace("product", "");
        contact.className = contact.className.replace("product", "");
        // if (e.type == onblur) {
        //   console.log(object);
        // }
      } else {
        e.target.className = "";
        products.className = products.className.replace("option", "block");
      }
    } else if (e.target.id == "testimonial") {
      if (e.target.className == "") {
        e.target.className = "product";
        services.className = services.className.replace("option", "block");
        products.className = products.className.replace("option", "block");
        service.className = service.className.replace("product", "");
        product.className = product.className.replace("product", "");
        portfolio.className = portfolio.className.replace("product", "");
        about.className = about.className.replace("product", "");
        contact.className = contact.className.replace("product", "");
      }
    } else if (e.target.id == "portfolio") {
      if (e.target.className == "") {
        e.target.className = "product";
        service.className = service.className.replace("product", "");
        services.className = services.className.replace("option", "block");
        product.className = product.className.replace("product", "");
        products.className = products.className.replace("option", "block");
        testimonial.className = testimonial.className.replace("product", "");
        about.className = about.className.replace("product", "");
        contact.className = contact.className.replace("product", "");
      }
    } else if (e.target.id == "about") {
      if (e.target.className == "") {
        e.target.className = "product";
        service.className = service.className.replace("product", "");
        services.className = services.className.replace("option", "block");
        product.className = product.className.replace("product", "");
        products.className = products.className.replace("option", "block");
        testimonial.className = testimonial.className.replace("product", "");
        portfolio.className = portfolio.className.replace("product", "");
        contact.className = contact.className.replace("product", "");
      }
    } else if (e.target.id == "contact") {
      if (e.target.className == "") {
        e.target.className = "product";
        service.className = service.className.replace("product", "");
        services.className = services.className.replace("option", "block");
        product.className = product.className.replace("product", "");
        products.className = products.className.replace("option", "block");
        testimonial.className = testimonial.className.replace("product", "");
        portfolio.className = portfolio.className.replace("product", "");
        about.className = about.className.replace("product", "");
      }
    }
  };
  const blur = (e) => {
    console.log(e.target.id);
  };
  return (
    <>
      {/* <Head> */}
      {/* <title>alskd</title> */}
      {/* <base href="/image" /> */}
      {/* <base href="https://www.w3schools.com/" target="_blank"> */}
      {/* <base href="../image" /> */}
      {/* </Head> */}
      <header>
        {/* <a href="tags/tag_base.asp">HTML base Tag</a> */}
        {/* <div>alksdfj</div> */}
        {/* <Image src={logo} width={100} height={100}/> */}
        <div>
          <div className="left">
            <div className="mail">
              <img src="image\email.svg" alt="" />
              <span>INFO@MAIL.COM</span>
            </div>
            <div className="phone">
              <img src="image\phone.svg" alt="" />
              <span>964-622-3903</span>
            </div>
          </div>
          <div className="right">
            {/* <img src="vercel.svg" alt="" /> */}
            <img src="image\twitter.svg" alt="" />
            <img src="image\facebook.svg" alt="" />
            <img src="image/instagram.svg" alt="" />
          </div>
        </div>
        <div></div>
        <nav>
          <div>
            {/* <Image
              src="/image/group 2.svg"
              width={190}
              height={44}
              id="logo"
              alt=""
            /> */}
            <Link href="/">
              <img src="/image/group 2.svg" alt="" id="logo" />
            </Link>
            <img
              id="mob_logo"
              src="/image/navicon.svg"
              alt=""
              onClick={(e) => {
                console.log(e.type);
                const tag = document.getElementsByTagName("ul");
                if (tag[0].className == "") {
                  tag[0].className = "ulunblock";
                } else {
                  tag[0].className = "";
                }
              }}
            />
          </div>
          <ul>
            <div className="add">
              <li
                id="service"
                onClick={add_id}
                // onClick={hide}
                // onFocus={() => {
                //   console.log("hello");
                // }}
              >
                {/* <li className="product" onBlur={add_id}> */}
                Services
              </li>
              {/* <div className="abc" id="block"> */}
              <div
                id="services"
                className="block"
                onClick={add_id}
                // onBlur={(e) => console.log(e.type)}
              >
                <Link href="/services" legacyBehavior>
                  <li id="0" onBlur={hide} onClick={props.addservice}>
                    <a onFocus={hide}>Graphics Designing</a>
                  </li>
                </Link>
                <Link href="/services">
                  <li id="1" onClick={props.addservice}>
                    UI/UX Designing
                  </li>
                </Link>
                <Link href="/services">
                  <li id="2" className="web_border" onClick={props.addservice}>
                    Web/App Development
                    <div className="border_line"></div>
                  </li>
                </Link>
              </div>
            </div>
            {/* <Link href="/products"> */}
            {/* <a> */}
            {/* <li>Products</li> */}
            {/* <select name="" id="" onChange={props.addproduct}>
                <Link href="/products">
                  <option>Lyk_app</option>
                </Link>
                <Link href="/products">
                  <option>Paisabhejo_app</option>
                </Link>
                <Link href="/products">
                  <option>Yap_app</option>
                </Link>
              </select> */}
            {/* </a> */}
            <div className="add">
              <li id="product" className="event" onClick={add_id}>
                Products
              </li>
              <div id="products" className="block">
                <Link href="/products">
                  <li id="0" onClick={props.addproduct}>
                    Lyk App
                  </li>
                </Link>
                <Link href="/products">
                  <li id="1" onClick={props.addproduct}>
                    Paisabhejo App
                  </li>
                </Link>
                <Link href="/products">
                  <li id="2" className="web_border" onClick={props.addproduct}>
                    Yap App
                    <div className="border_line"></div>
                  </li>
                </Link>
              </div>
            </div>
            {/* </Link> */}
            <Link href="/testimonials">
              <li id="testimonial" onClick={add_id}>
                {/* onClick={add_id} */}
                Testimonials
              </li>
            </Link>
            <Link href={"portfolio"}>
              <li id="portfolio" onClick={add_id}>
                Portfolio
              </li>
            </Link>
            {/* <Link href="/portfolio"></Link> */}
            <Link href="/about">
              <li id="about" onClick={add_id}>
                About
              </li>
            </Link>
            <Link href="/contact">
              <li id="contact" onClick={add_id}>
                Contact
              </li>
            </Link>
          </ul>
          {/* <img src="/vercel.svg" alt="" width={100} height={100} />
            <img src={abc} alt="" width={100} height={100} /> */}
          {/* <img src="../image/ryan-loughlin--a8Cewc-qGQ-unsplash 1.png" alt="" width={100} height={100} /> */}
        </nav>
        {/* </div> */}
      </header>
    </>
  );
};

export default header;
