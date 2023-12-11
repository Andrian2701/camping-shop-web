import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  openMobMenuAction,
  closeMobMenuAction,
} from "../store/reducers/mobileMenuReducer";
import {
  openShopCartAction,
  closeShopCartAction,
} from "../store/reducers/shopCartReducer";
import logoImg from "../img/logo/logo.png";
import ShopCart from "./ShopCart";
import MobileMenu from "./MobileMenu";
import "../scss/Header.scss";

export default function HomeHeader() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.mobMenu.menu);
  const cart = useSelector((state) => state.shopCart.cart);
  const cartProducts = useSelector((state) => state.cartProducts.products);
  const [hamburgerMenu, setHamburgerMenu] = useState(window.innerWidth <= 1100);

  window.addEventListener("resize", () => {
    setHamburgerMenu(window.innerWidth <= 1100);
  });

  return (
    <header>
      <nav>
        <div
          className="logo"
          onClick={() => {
            nav("/");
          }}
        >
          <img src={logoImg} alt="Wayfarer" />
        </div>
        <div className="nav-links">
          <li>
            <Link to="/categories/all">SALE</Link>
          </li>
          <li>
            <Link to="/categories/outfits">OUTFITS</Link>
          </li>
          <li>
            <Link to="/categories/gadgets">GADGETS</Link>
          </li>
          <li>
            <Link to="/categories/camping-kitchen">CAMP KITCHEN</Link>
          </li>
          <li>
            <Link to="/categories/camping-furniture">CAMP FURNITURE</Link>
          </li>
          <li>
            <Link to="/categories/dog-gear">DOG GEAR</Link>
          </li>
          <li>
            <Link to="/categories/food-and-hydration">FOOD & HYDRATION</Link>
          </li>
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
          {hamburgerMenu && (
            <i>
              <GiHamburgerMenu
                className="menu-icon"
                onClick={() => dispatch(openMobMenuAction())}
              />
            </i>
          )}
        </div>
      </nav>
      <div
        className={`overlay ${cart || menu ? "open" : "closed"}`}
        onClick={() => {
          dispatch(closeShopCartAction());
          dispatch(closeMobMenuAction());
        }}
      ></div>
      <ShopCart />
      <MobileMenu />
    </header>
  );
}
