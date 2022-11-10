import Header from "../component/header.js";
import Footer from "../component/footer.js";
import Contact from "../component/contact-cpt";
import Lyk_app from "../component/lyk-app";
import Paisabhejo_app from "../component/paisabhejo-app";
import Yap_app from "../component/yap-app";
import { useState } from "react";
const product = () => {
  var [product, setproduct] = useState(<Lyk_app />);
  function addproduct(e) {
    console.log(e.target.selectedIndex);
    if (e.target.id == 0) {
      setproduct(<Lyk_app />);
    } else if (e.target.id == 1) {
      setproduct(<Paisabhejo_app />);
    } else if (e.target.id == 2) {
      setproduct(<Yap_app />);
    }
  }
  // const roduct = document.getElementById("container");
  // product.appendChild(Yap_app);
  // const createli = document.createElement("li");
  // const createtxt = document.createTextNode("alkflasdj");
  // createli.appendChild(createtxt);
  // roduct.appendChild(createli);
  // roduct.appendChild(Yap_app);
  // console.log(roduct);
  console.log("hello");
  // }
  return (
    <div className="products">
      {/* {const prod =<button onClick={addproduct} value="alsdkfj">
        submit
      </button>} */}
      {/* <button onClick={(e) => setvlue(e.target.value)} value="as">
        submit
      </button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea vitae
      nobis sint accusantium cum a magni, beatae vero, ad facere dolore
      necessitatibus nisi? Beatae autem corrupti laboriosam minus aperiam.
      <button onClick={(e) => setvlue(e.target.value)} value="a">
        submit
      </button> */}
      {/* {addproduct("as")} */}
      {/* <div className="produc"> */}
      {/* </div> */}
      {/* {value == "a" ? <Yap_app /> : <Lyk_app/>}
      {value == "a" ? <Paisabhejo_app /> : <Lyk_app/>>} */}
      <Header addproduct={addproduct} setproduct={setproduct} />
      {product}
      <Contact />
      <Footer />
    </div>
  );
};

export default product;
