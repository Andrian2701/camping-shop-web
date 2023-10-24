import { useLocation } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import TrendingItem from "./TrendingItem";

export default function TrendingNow({ selectedImg, handleSetSelectedImg }) {
  const loc = useLocation();

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 230;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 230;
  };

  return (
    <div className="trending-now">
      <div className="container">
        <div className="items-header">
          {loc.pathname === "/" ? <h2>In Trends</h2> : <h2>Might Interest</h2>}
          <div className="slide-buttons">
            <button onClick={slideLeft}>
              <HiArrowSmLeft />
            </button>
            <button onClick={slideRight}>
              <HiArrowSmRight />
            </button>
          </div>
        </div>
        <div className="trending-stuffs" id="slider">
          <TrendingItem
            selectedImg={selectedImg}
            handleSetSelectedImg={handleSetSelectedImg}
          />
        </div>
      </div>
    </div>
  );
}
