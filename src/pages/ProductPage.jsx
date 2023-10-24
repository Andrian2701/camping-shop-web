import { useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "../const/data";
import OtherHeader from "../components/OtherHeader";
import Product from "../components/Product";
import TrendingNow from "../components/TrendingNow";
import Footer from "../components/Footer";

export default function CategoriesPage() {
  const { id } = useParams();
  const [item] = Items.filter((item) => item.id === parseInt(id));
  const [selectedImg, setSelectedImg] = useState(item.img);

  const handleSetSelectedImg = (val) => {
    setSelectedImg(val);
  };

  return (
    <>
      <OtherHeader />
      <Product
        handleSetSelectedImg={handleSetSelectedImg}
        selectedImg={selectedImg}
      />
      <TrendingNow
        handleSetSelectedImg={handleSetSelectedImg}
        selectedImg={selectedImg}
      />
      <Footer />
    </>
  );
}
