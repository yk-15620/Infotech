import Btn from "./btn/dfl_btn";

const graphic = () => {
  return (
    <div>
      <section className="graphic-banner">
        <img src="image/web-app-background.svg" alt="" className="bg-img" />
        <h2>Web/App Development</h2>
      </section>
      <section className="service-portfolio">
        <div>
          <div>
            <h3>Portfolio</h3>
            <h2>Hey there!</h2>
            <h2>We&apos;re ABC INFOTECH, A Creative Agency. </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <Btn className="default" href="/contact">Contact us</Btn>
          </div>
          <div>
            <img src="image\webapp1.svg" alt="" />
            <img src="image\webapp2.svg" alt="" />
            <img src="image\webapp3.svg" alt="" />
            <img src="image\webapp4.svg" alt="" />
          </div>
        </div>
        <div>
          <img src="image\webapp5.svg" alt="" />
          <img src="image\webapp6.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default graphic;
