import { Link } from "react-router-dom";
import bannerImg1 from "../img/banners/bannerImg1.jpeg";
import "../scss/Banner.scss";

export default function Banner() {
  return (
    <div className="big-banner">
      <div className="text-col">
        <div className="content">
          <h2>Fall adventures await</h2>
          <p>Embrace the crisp air, golden leaves, and cozy campfires.</p>
          <Link
            to="/product-categories/all"
            onClick={() => window.scrollTo(0, 0)}
          >
            <button>Shop Fall</button>
          </Link>
        </div>
      </div>
      <div className="img-col">
        <img src={bannerImg1} alt="banner-img" />
      </div>
    </div>
  );
}
