import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import {
  addOneItemAction,
  removeOneItemAction,
  removeProductsAction,
} from "../store/reducers/cartProductsReducer";
import "../scss/cartProduct.scss";

export default function CartProduct({}) {
  const dispatch = useDispatch();
  const [uniqueItems, setUniqueItems] = useState([]);
  const cartProducts = useSelector((state) => state.cartProducts.products);

  useEffect(() => {
    const updatedUniqueItems = cartProducts.filter(
      (val, idx, self) => self.findIndex((item) => item.id === val.id) === idx
    );

    setUniqueItems(updatedUniqueItems);
  }, [cartProducts]);

  const removeOneItem = (id) => {
    const indexToRemove = cartProducts.findIndex((item) => item.id === id);

    const updatedCartProducts = [...cartProducts];
    updatedCartProducts.splice(indexToRemove, 1);
    dispatch(removeOneItemAction(updatedCartProducts));
  };

  return (
    <>
      {uniqueItems.map((uniqueItem, idx) => {
        let itemsCount = 0;
        let totalPrice = 0;

        for (const cartItem of cartProducts) {
          if (cartItem.id === uniqueItem.id) {
            itemsCount += 1;
            totalPrice += Number(cartItem.price);
          }
        }

        return (
          <div className="cart-product" key={idx}>
            <div className="img">
              <img src={uniqueItem.img} alt={uniqueItem.title} />
            </div>
            <div className="text">
              <div className="first-row">
                <p>{uniqueItem.title}</p>
                <RiCloseFill
                  className="rmv-icon"
                  onClick={() => dispatch(removeProductsAction(uniqueItem.id))}
                />
              </div>
              <div className="sec-row">
                <div className="inc-dec">
                  <button
                    className="minus"
                    onClick={() => removeOneItem(uniqueItem.id)}
                  >
                    -
                  </button>
                  <p>{itemsCount}</p>
                  <button
                    className="plus"
                    onClick={() => dispatch(addOneItemAction(uniqueItem))}
                  >
                    +
                  </button>
                </div>
                <p>{totalPrice.toFixed(2)}$</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
