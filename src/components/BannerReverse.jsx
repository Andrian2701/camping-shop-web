import { Link } from "react-router-dom";
import bannerImg2 from "../img/banners/bannerImg2.jpeg";
import "../scss/Banner.scss";

export default function BannerReverse() {
  return (
    <div className="big-banner">
      <div className="img-col">
        <img src={bannerImg2} alt="banner-img" />
      </div>
      <div className="text-col">
        <div className="content">
          <h2>Fall gear essentials</h2>
          <p>
            Prepare for the season with the latest gear designed to enhance your
            autumn adventures.
          </p>
          <Link to="/categories/all">
            <button>Shop Fall</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
