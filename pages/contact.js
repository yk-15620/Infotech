import Header from "../component/header.js";
import Footer from "../component/footer.js";
import Btn from "../component/btn/dfl_btn";
const contact = () => {
  const add_outline = (e) => {
    if (e.type == "focus") {
      document.getElementById("outline").className = "email_outline";
    } else {
      document.getElementById("outline").className = "";
    }
  };
  return (
    <div className="contact">
      <Header />
      <section className="sub-banner">
        <h2>CONTACT</h2>
        <img src="image/consulting.svg" alt="" className="phone" />
      </section>
      <section className="contact-info">
        <div>
          <div>
            <div>
              {/* <h2>contact us</h2> */}
              <h3>We'd love to hear from you</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis.
              </p>
            </div>
            <div className="epm">
              <span>
                <img src="image\email.svg" alt="" />
                INFO@MAIL.COM
              </span>
              <span>
                <img src="image\phone.svg" alt="" />
                964-622-3903
              </span>
              <span>
                <img src="image\map.svg" alt="" />
                36 Stephon Ferry
              </span>
            </div>
          </div>
          <div className="eps">
            <span id="outline">
              <img src="image/icon.png" alt="" />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                onFocus={add_outline}
                onBlur={add_outline}
              />
            </span>
            <select name="" id="">
              {/* onSelect={(e) => {}} */}
              <option value="" className="place">
                select product
              </option>
              <option value="">Lyk App</option>
              <option value="">Paisabhejo App</option>
              <option value="">Yap App</option>
            </select>
            <textarea
              name=""
              id=""
              cols=""
              rows=""
              placeholder="Write something..."
            ></textarea>
            <Btn className="default">submit</Btn>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.807933346166!2d77.97494575043756!3d27.193772782923922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974770b2c7a082f%3A0x19397eff28ac00d7!2sJagdish%20Pura%2C%20Lohamandi%2C%20Agra%2C%20Uttar%20Pradesh%20282002!5e0!3m2!1sen!2sin!4v1667384319088!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default contact;
