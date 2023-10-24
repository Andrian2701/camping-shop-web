import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import TrendingItem from "./TrendingItem";

export default function TrendingNow({ selectedImg, handleSetSelectedImg }) {
  const loc = useLocation();
  const ref = useRef(null);

  const slideLeft = () => {
    let slider = ref.current;
    slider.scrollLeft = slider.scrollLeft - 230;
  };

  const slideRight = () => {
    let slider = ref.current;
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
        <div className="trending-items" ref={ref} id="slider">
          <TrendingItem
            selectedImg={selectedImg}
            handleSetSelectedImg={handleSetSelectedImg}
          />
        </div>
      </div>
    </div>
  );
}
