import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import { closeMobMenuAction } from "../store/reducers/mobileMenuReducer";
import "../scss/Header.scss";

export default function MobileMenu() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.mobMenu.menu);

  return (
    <div className={`mobile-menu ${menu ? "open" : "closed"}`}>
      <div className="close-icon">
        <RiCloseFill
          onClick={() => {
            dispatch(closeMobMenuAction());
            window.scrollTo(0, 0);
          }}
        />
      </div>
      <div className="nav-links">
        <li>
          <Link
            to="product-categories/all"
            onClick={() => {
              dispatch(closeMobMenuAction());
              window.scrollTo(0, 0);
            }}
          >
            SALE
          </Link>
        </li>
        <li>
          <Link
            to="product-categories/outfits"
            onClick={() => {
              dispatch(closeMobMenuAction());
              window.scrollTo(0, 0);
            }}
          >
            OUTFITS
          </Link>
        </li>
        <li>
          <Link
            to="product-categories/gadgets"
            onClick={() => {
              dispatch(closeMobMenuAction());
              window.scrollTo(0, 0);
            }}
          >
            GADGETS
          </Link>
        </li>
        <li>
          <Link
            to="product-categories/camping-kitchen"
            onClick={() => {
              dispatch(closeMobMenuAction());
              window.scrollTo(0, 0);
            }}
          >
            CAMP KITCHEN
          </Link>
        </li>
        <li>
          <Link
            to="product-categories/camping-furniture"
            onClick={() => {
              dispatch(closeMobMenuAction());
              window.scrollTo(0, 0);
            }}
          >
            CAMP FURNITURE
          </Link>
        </li>
        <li>
          <Link
            to="product-categories/dog-gear"
            onClick={() => {
              dispatch(closeMobMenuAction());
              window.scrollTo(0, 0);
            }}
          >
            DOG GEAR
          </Link>
        </li>
        <li>
          <Link
            to="product-categories/food-and-hydration"
            onClick={() => {
              dispatch(closeMobMenuAction());
              window.scrollTo(0, 0);
            }}
          >
            FOOD & HYDRATION
          </Link>
        </li>
      </div>
    </div>
  );
}
