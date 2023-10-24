import { Link } from "react-router-dom";
import { Items } from "../../const/data";
import "../../scss/CategoryItem.scss";

export default function DogGear() {
  const filteredItems = Items.filter((item) => item.category === "dog-gear");

  return (
    <div className="category-items">
      <div className="items">
        {filteredItems.map((item, idx) => (
          <Link
            key={idx}
            to={`/product-categories/product/${item.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="item">
              <div className="item-header">
                <img src={item.img} />
              </div>
              <div className="item-details">
                <p>{item.title}</p>
                <p className="item-price">{item.price}$</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
