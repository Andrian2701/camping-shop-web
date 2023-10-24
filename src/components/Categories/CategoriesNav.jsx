import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../const/routes";
import "../../scss/Header.scss";

export default function CategoriesNav() {
  const [title, setTitle] = useState("");
  const loc = useLocation();

  useEffect(() => {
    const categoryTitle = routes[loc.pathname];
    if (categoryTitle) {
      setTitle(categoryTitle);
    }
  }, [loc.pathname]);

  return (
    <div className="catego-nav">
      <div className="title">
        <label>{title}</label>
      </div>
      <div className="filter-buttons">
        <Link to="all">
          <button>All</button>
        </Link>
        <Link to="outfits">
          <button>Outfits</button>
        </Link>
        <Link to="gadgets">
          <button>Gadgets</button>
        </Link>
        <Link to="camping-kitchen">
          <button>Camping Kitchen</button>
        </Link>
        <Link to="camping-furniture">
          <button>Camping Furniture</button>
        </Link>
        <Link to="dog-gear">
          <button>Dog Gear</button>
        </Link>
        <Link to="food-and-hydration">
          <button>Food & Hydration</button>
        </Link>
      </div>
    </div>
  );
}
