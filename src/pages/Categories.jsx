import { Outlet } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import LilBanner from "../components/LilBanner";
import CategoriesNav from "../components/Categories/CategoriesNav";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";

export default function Categories() {
  useScrollTop();

  return (
    <>
      <HomeHeader />
      <LilBanner />
      <CategoriesNav />
      <Outlet />
      <Footer />
    </>
  );
}
