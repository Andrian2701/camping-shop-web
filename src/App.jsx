import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction } from "./store/reducers/cartProductsReducer";
import { useEffect } from "react";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductPage from "./pages/ProductPage";
import All from "./components/Categories/All";
import Outfits from "./components/Categories/Outfits";
import Gadgets from "./components/Categories/Gadgets";
import CampKitchen from "./components/Categories/CampKitchen";
import CampFurniture from "./components/Categories/CampFurniture";
import DogGear from "./components/Categories/DogGear";
import FoodAndHydration from "./components/Categories/FoodAndHydration";
import "./index.scss";

export default function App() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts.products);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (savedProducts) {
      dispatch(addProductsAction(savedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="outfits" element={<Outfits />} />
          <Route path="gadgets" element={<Gadgets />} />
          <Route path="camping-kitchen" element={<CampKitchen />} />
          <Route path="camping-furniture" element={<CampFurniture />} />
          <Route path="dog-gear" element={<DogGear />} />
          <Route path="food-and-hydration" element={<FoodAndHydration />} />
        </Route>
        <Route
          path="/product-categories/product/:id"
          element={<ProductPage />}
        />
      </Routes>
    </div>
  );
}
