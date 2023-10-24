import { Outlet } from "react-router-dom";
import OtherHeader from "../components/OtherHeader";
import LilBanner from "../components/LilBanner";
import CategoriesNav from "../components/Categories/CategoriesNav";
import Footer from "../components/Footer";

export default function Categories() {
  return (
    <>
      <OtherHeader />
      <LilBanner />
      <CategoriesNav />
      <Outlet />
      <Footer />
    </>
  );
}
