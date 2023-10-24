import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import {
  openShopCartAction,
  closeShopCartAction,
} from "../store/reducers/shopCartReducer";
import logoImg from "../img/logo/logo.png";
import ShopCart from "./ShopCart";
import "../scss/Header.scss";

export default function OtherHeader() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.mobMenu.menu);
  const cart = useSelector((state) => state.shopCart.cart);
  const cartProducts = useSelector((state) => state.cartProducts.products);

  return (
    <header>
      <nav>
        <div
          className="logo"
          onClick={() => {
            nav("/");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoImg} alt="Wayfarer" />
        </div>
        <div className="icons">
          <i
            cart-products-length={cartProducts.length}
            className={`${
              cartProducts.length > 0 ? "cart-icon filled" : "cart-icon"
            }`}
            onClick={() => dispatch(openShopCartAction())}
          >
            <FaCartShopping onClick={() => dispatch(openShopCartAction())} />
          </i>
        </div>
      </nav>
      <div
        className={`overlay ${cart || menu ? "open" : "closed"}`}
        onClick={() => {
          dispatch(closeShopCartAction());
        }}
      ></div>
      <ShopCart />
    </header>
  );
}
