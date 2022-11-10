import Link from "next/link";
import { useState } from "react";
import Btn from "./btn/dfl_btn";
const footer = () => {
  const [email, setemail] = useState("");
  const change = (e) => {
    setname(e.target.value);
    console.log(e.target.value);
  };
  return (
    <footer>
      <section className="footerbody">
        <section>
          Product
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a> How it works</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Testimonials</a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          About Form
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>Our team</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Careers</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Press</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Stores</a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          Connect
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Twitter</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Instagram</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>Linkedin</a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          Contact
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>info@form.com</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>882-587-3025</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>6116 Willa River Suite 610</a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a>How it works</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="newsletter">
          NewsLetter
          <Link href={"/"} legacyBehavior>
            <a href="" onClick={(e) => console.log("hello")}>
              Join our weekly maiiling list
            </a>
          </Link>
          <div>
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Your email"
            />
            <Btn className="default">subscribe</Btn>
          </div>
        </section>
      </section>
      <div></div>
      <section className="termsandconditions">
        <span className="left">
          <span>Terms and Conditions</span>
          <span>Legal</span>
          <span>Pattents</span>
        </span>
        <span className="right">©2018 - Form | All right reserved</span>
      </section>
    </footer>
  );
};

export default footer;
