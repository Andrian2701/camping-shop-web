import { Link } from "react-router-dom";
import heroImg1 from "../img/hero/heroImg1.jpeg";
import heroImg2 from "../img/hero/heroImg2.png";
import heroImg3 from "../img/hero/heroImg3.jpeg";
import heroImg4 from "../img/hero/heroImg4.jpeg";
import "../scss/Hero.scss";

export default function Hero() {
  return (
    <div className="grid-container">
      <div className="featured grid-one">
        <Link to="/categories/all" onClick={() => window.scrollTo(0, 0)}>
          <div id="img1" className="mini-overlay"></div>
          <img src={heroImg1} alt="Keep exploring" />
          <p className="description">Keep exploring</p>
        </Link>
      </div>
      <div className="featured grid-two">
        <Link
          to="/categories/food-and-hydration"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div id="img2" className="mini-overlay"></div>
          <img src={heroImg2} alt="Food" />
          <p className="description">Food</p>
        </Link>
      </div>
      <div className="featured grid-four">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/categories/camping-kitchen"
        >
          <div id="img3" className="mini-overlay"></div>
          <img src={heroImg3} alt="Kitchen" />
          <p className="description">Kitchen</p>
        </Link>
      </div>
      <div className="featured grid-four-low">
        <Link onClick={() => window.scrollTo(0, 0)} to="/categories/gadgets">
          <div id="img4" className="mini-overlay"></div>
          <img src={heroImg4} alt="Gadgets" />
          <p className="description">Gadgets</p>
        </Link>
      </div>
    </div>
  );
}
