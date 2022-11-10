import Btn from "./btn/dfl_btn";

const graphic = () => {
  return (
    <div>
      <section className="graphic-banner">
        <img src="image/graphic-background.svg" alt="" className="bg-img" />
        <h2>Graphics Designing</h2>
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
            <Btn className="default" href="/contact">
              Contact us
            </Btn>
          </div>
          <div>
            <img id="desktop" src="image\Background.svg" alt="" />
            <img id="mobile" src="image\Background-6.svg" alt="" />
            <img src="image\Background-1.svg" alt="" />
            <img src="image\Background-2.svg" alt="" />
            <img src="image\Background-3.svg" alt="" />
          </div>
        </div>
        <div>
          <img src="image\Background-5.svg" alt="" />
          <img src="image\Background-6.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default graphic;
