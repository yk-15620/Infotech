import Btn from "./btn/dfl_btn";

const product = () => {
  return (
    <div>
      <section className="sub-banner">
        <h1>ABC App</h1>
        <img src="image/Group 10.svg" alt="" className="phone" />
        {/* <img src="image/screen.svg" alt="" className="mobile"/> */}
        {/* <img src="image/fill.svg" alt="" className="watch"/> */}
      </section>
      <section className="feature">
        <h2>Features</h2>
        <div>
          <div className="first">
            <div className="features">
              <div>
                <h3>Retina display</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt utla.
                </p>
              </div>
              <img src="image\check_circle.svg" alt="" />
            </div>
            <div className="features">
              <div>
                <h3>Waterproof</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt utla.
                </p>
              </div>
              <img src="image\check_circle.svg" alt="" />
            </div>
            <div className="features">
              <div>
                <h3>Great sound</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt utla.
                </p>
              </div>
              <img src="image\check_circle.svg" alt="" />
            </div>
          </div>
          <img src="image\Device.svg" alt="" />
          <img src="image\Screen.svg" alt="" className="screen" />
          {/* <span className="mask">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            cumque tempore eveniet pariatur placeat excepturi cupiditate eaque
            atque ratione veniam, in corrupti eius perspiciatis a. Eos,
            veritatis quo? Blanditiis, aut!
          </span> */}
          <div>
            <div className="features">
              <img src="image\check_circle.svg" alt="" />
              <div>
                <h3>Anti-scratch screen</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt utla.
                </p>
              </div>
            </div>
            <div className="features">
              <img src="image\check_circle.svg" alt="" />
              <div>
                <h3>Three colors</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt utla.
                </p>
              </div>
            </div>
            <div className="features">
              <img src="image\check_circle.svg" alt="" />
              <div>
                <h3>12 MP camera</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt utla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="howitwork">
        <h2>How it works</h2>
        <div>
          <div>
            <div>
              <div>
                <img src="image\Number1.png" alt="" />
                <img src="image\like.png" alt="" />
              </div>
              <h3>Install</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div>
            <div>
              <div>
                <img src="image\Number2.png" alt="" />
                <img src="image\Outlines.png" alt="" />
              </div>
              <h3>Setup</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div>
            <div>
              <div>
                <img src="image\Number3.png" alt="" className="num3" />
                <img src="image\app.png" alt="" />
              </div>
              <h3>Design</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>
      {/* <div className="masking">
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum aliquam,
          reiciendis necessitatibus dolores consequuntur animi illo blanditiis.
          Praesentium, obcaecati itaque, blanditiis nemo aut harum sit incidunt
          doloremque nobis culpa facere.
        </h2>{" "}
        <img src="" alt="" />
      </div> */}
      <section className="downloadapp">
        <div>
          <div>
            <h2>Download LYK App</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquat enim
              ad minim.
            </p>
          </div>
          <div>
            <img src="\image\button - appStore.svg" alt="" />
            <img src="\image\button - playStore.svg" alt="" />
          </div>
        </div>
        <img src="image/Group 9.svg" alt="" />
      </section>
    </div>
  );
};

export default product;
