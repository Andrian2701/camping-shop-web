import { Link } from "react-router-dom";
import { Items } from "../const/data";
import "../scss/MostSold.scss";

export default function MostSoldItem() {
  const filteredItems = Items.filter((item) => item.id < 9);

  return (
    <>
      {filteredItems.map((item, idx) => (
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
      ))}
    </>
  );
}
