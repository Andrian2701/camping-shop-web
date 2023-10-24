import bannerImg3 from "../img/banners/bannerImg3.avif";
import "../scss/Banner.scss";

export default function LilBanner() {
  return (
    <>
      <div className="lil-banner">
        <div className="text-col">
          <div className="content">
            <h2>
              Save 10$ on Autumn camping gear with a 25$+ online purchase
              through 10/1.
            </h2>
          </div>
        </div>
        <div className="img-col">
          <img src={bannerImg3} alt="banner-img" />
        </div>
      </div>
    </>
  );
}
