import Header from "../component/header.js";
import Footer from "../component/footer.js";
import Contact from "../component/contact-cpt";
// import Btn from "../component/btn/dfl_btn.js";
import Link from "next/link";

const portfolio = () => {
  const add_btn = (e) => {
    const all = document.getElementById("all");
    const web = document.getElementById("web");
    const app = document.getElementById("app");
    const seo = document.getElementById("seo");
    if (e.target.id == "web") {
      web.className = "active_btn";
      app.className = "";
      seo.className = "";
      all.className = "";
    } else if (e.target.id == "app") {
      app.className = "active_btn";
      web.className = "";
      seo.className = "";
      all.className = "";
    } else if (e.target.id == "seo") {
      seo.className = "active_btn";
      web.className = "";
      app.className = "";
      all.className = "";
    } else {
      all.className = "active_btn";
      web.className = "";
      app.className = "";
      seo.className = "";
    }
  };
  return (
    <div className="portfolio">
      <Header />
      <section className="sub-banner">
        <h2>PORTFOLIO</h2>
        <img src="image/file.svg" alt="" className="phone" />
      </section>
      <section className="portfolio-info">
        <div className="tab">
          {/* <Btn className="default">All</Btn> */}
          <Link href={""} legacyBehavior>
            <a id="all" className="active_btn" onClick={add_btn}>
              All
            </a>
          </Link>
          <Link href={""} legacyBehavior>
            <a id="web" onClick={add_btn}>
              Web Design
            </a>
          </Link>
          <Link href={""} legacyBehavior className="appdesign">
            <a id="app" onClick={add_btn}>
              App Design
            </a>
          </Link>
          <Link href={""} legacyBehavior>
            <a id="seo" onClick={add_btn}>
              SEO
            </a>
          </Link>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default portfolio;
