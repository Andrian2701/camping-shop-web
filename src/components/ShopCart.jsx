import { useDispatch, useSelector } from "react-redux";
import { closeShopCartAction } from "../store/reducers/shopCartReducer";
import { RiCloseFill } from "react-icons/ri";
import CartProduct from "../components/CartProduct.jsx";
import "../scss/ShopCart.scss";

export default function ShopCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shopCart.cart);
  const cartProducts = useSelector((state) => state.cartProducts.products);

  const total = cartProducts.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  return (
    <div className={`shop-cart ${cart ? "open" : "closed"}`}>
      {cart && (
        <>
          <div className="cart-title">
            <label>Shopping cart "{cartProducts.length}"</label>
            <RiCloseFill
              className="close-icon"
              onClick={() => dispatch(closeShopCartAction())}
            />
          </div>
          <div className="cart-body">
            {cartProducts.length === 0 ? (
              <div className="cart-content">
                <button className="refresh-btn">Refresh</button>
              </div>
            ) : (
              <>
                <div className="cart-content">
                  <CartProduct />
                </div>
                <div className="total">
                  <div className="left-row">
                    <p>Total:</p>
                    <p className="price">{total}.00$</p>
                  </div>
                  <div className="right-row">
                    <button>Proceed to Payment</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
