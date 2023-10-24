import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Items } from "../const/data";
import { addProductsAction } from "../store/reducers/cartProductsReducer";
import "../scss/Product.scss";

export default function Product({ handleSetSelectedImg, selectedImg }) {
  const { id } = useParams();
  const [item] = Items.filter((item) => item.id === parseInt(id));
  const [itemsOnAdd, setItemsOnAdd] = useState([]);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    const startPrice = Number(item.price);
    const onAddPrice = itemsOnAdd.reduce((acc, item) => {
      return acc + Number(item.price);
    }, 0);
    return startPrice + onAddPrice;
  };

  return (
    <div className="product-container">
      <div className="product-div">
        <label>{item.title}</label>
        <div className="product">
          <div className="first-col">
            <div className="big-img">
              <img src={selectedImg} alt="Kailas Mystery Backpack" />
            </div>
            <div className="small-imgs">
              <img
                onMouseOver={(e) => handleSetSelectedImg(e.target.src)}
                src={item.img}
                alt="Kailas Mystery Backpack"
              />
              <img
                onMouseOver={(e) => handleSetSelectedImg(e.target.src)}
                src={item.imgs[0]}
                alt="Kailas Mystery Backpack"
              />
              <img
                onMouseOver={(e) => handleSetSelectedImg(e.target.src)}
                src={item.imgs[1]}
                alt="Kailas Mystery Backpack"
              />
            </div>
          </div>
          <div className="sec-col">
            <div className="content">
              <div className="product-spec">
                <p>{item.spec}</p>
              </div>
              <div className="product-quant">
                <p>Amount</p>
                <div className="inc-dec">
                  <button
                    className="minus"
                    onClick={() =>
                      setItemsOnAdd((prev) => {
                        if (prev.length > 0) {
                          prev.pop();
                        }
                        return [...prev];
                      })
                    }
                  >
                    -
                  </button>
                  <p>{itemsOnAdd.length === 0 ? 1 : itemsOnAdd.length + 1}</p>
                  <button
                    className="plus"
                    onClick={() => setItemsOnAdd((prev) => [...prev, item])}
                  >
                    +
                  </button>
                </div>
                <p className="total-price">
                  {getTotalPrice()}
                  .00$
                </p>
              </div>
              <div className="add-buy">
                <button
                  className="add"
                  onClick={() => {
                    dispatch(addProductsAction([item, ...itemsOnAdd]));
                    setItemsOnAdd([]);
                  }}
                >
                  ADD TO CART
                </button>
                <button className="buy">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="specifications">
        <div className="details">
          <label>Material:</label>
          <p>{item.material}</p>
        </div>
        <div className="details">
          <label>Size:</label>
          <p>{item.size}</p>
        </div>
        <div className="details">
          <label>Weigth:</label>
          <p>{item.weight}</p>
        </div>
      </div>
    </div>
  );
}
