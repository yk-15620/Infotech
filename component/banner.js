import bg from "/styles/Home.module.scss";
import Image from "next/image";
import Btn from "./btn/dfl_btn";
const banner = () => {
  return (
    <div className={"banner"}>
      {/* <Image
        className={bg.testing}
        src="/ryan-loughlin--a8Cewc-qGQ-unsplash 1.png"
        alt=""
        layout="fill"
        // style={{ width: "100px", objectFit: "contain" }}
      /> */}
      {/* <Image
        src="/ryan-loughlin--a8Cewc-qGQ-unsplash 1.png"
        layout="fill"
        className="testing"
        // style={{ backgroundColor: "red " }}
      /> */}
      {/* <div className="background"></div> */}
      {/* <img className="banner_img" src="image/Background.png" alt="" /> */}
      <Image
        className="banner_img"
        src="/image/Background.png"
        alt=""
        layout="fill"
      />
      <div className="content">
        <h1>Welcome to your new wireframe kit</h1>
        <p>
          If you’re looking for the latest in wireless headphones, look no
          further. These are perfect for TV, stereo, home, and cell phone.
        </p>
        <div>
          <Btn className={"default"} href="/contact">
            contact us
          </Btn>
          <Btn className={"arrow"} href="/portfolio">
            our portfolio
          </Btn>
        </div>
      </div>
      {/* <div
        className="banner"
        style={{ backgroundImage: `image\icon-1.svg`, color: "red" }}
      ></div> */}
      {/* style={{ background: `url(${image})`, color: "red" }} */}
    </div>
  );
};

export default banner;
