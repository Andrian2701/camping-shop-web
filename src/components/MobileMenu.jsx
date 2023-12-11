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
          }}
        />
      </div>
      <div className="nav-links">
        <li>
          <Link
            to="/categories/all"
            onClick={() => {
              dispatch(closeMobMenuAction());
            }}
          >
            SALE
          </Link>
        </li>
        <li>
          <Link
            to="/categories/outfits"
            onClick={() => {
              dispatch(closeMobMenuAction());
            }}
          >
            OUTFITS
          </Link>
        </li>
        <li>
          <Link
            to="/categories/gadgets"
            onClick={() => {
              dispatch(closeMobMenuAction());
            }}
          >
            GADGETS
          </Link>
        </li>
        <li>
          <Link
            to="/categories/camping-kitchen"
            onClick={() => {
              dispatch(closeMobMenuAction());
            }}
          >
            CAMP KITCHEN
          </Link>
        </li>
        <li>
          <Link
            to="/categories/camping-furniture"
            onClick={() => {
              dispatch(closeMobMenuAction());
            }}
          >
            CAMP FURNITURE
          </Link>
        </li>
        <li>
          <Link
            to="/categories/dog-gear"
            onClick={() => {
              dispatch(closeMobMenuAction());
            }}
          >
            DOG GEAR
          </Link>
        </li>
        <li>
          <Link
            to="/categories/food-and-hydration"
            onClick={() => {
              dispatch(closeMobMenuAction());
            }}
          >
            FOOD & HYDRATION
          </Link>
        </li>
      </div>
    </div>
  );
}
