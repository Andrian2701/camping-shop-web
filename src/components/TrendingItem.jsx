import { Link, useLocation } from "react-router-dom";
import { Items } from "../const/data";
import "../scss/TrendingNow.scss";

export default function TrendingItem({ handleSetSelectedImg }) {
  const loc = useLocation();
  const filteredItemsOne = Items.filter((item) => item.id > 7 && item.id < 19);
  const filteredItemsTwo = Items.filter((item) => item.id > 19 && item.id < 31);

  return (
    <>
      {loc.pathname === "/"
        ? filteredItemsOne.map((item, idx) => (
            <Link
              key={idx}
              to={`/product-categories/product/${item.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="item">
                <div className="item-header">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="item-details">
                  <p>{item.title}</p>
                  <p className="item-price">{item.price}$</p>
                </div>
              </div>
            </Link>
          ))
        : filteredItemsTwo.map((item, idx) => (
            <Link
              to={`/product-categories/product/${item.id}`}
              onClick={() => {
                handleSetSelectedImg(item.img);
                window.scrollTo(0, 0);
              }}
              key={idx}
            >
              <div className="item">
                <div className="item-header">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="item-details">
                  <p>{item.title}</p>
                  <p className="item-price">{item.price}$</p>
                </div>
              </div>
            </Link>
          ))}
    </>
  );
}
