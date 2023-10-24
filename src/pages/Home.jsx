import HomeHeader from "../components/HomeHeader";
import Hero from "../components/Hero";
import MostSold from "../components/MostSold";
import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import TrendingNow from "../components/TrendingNow";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <Hero />
      <MostSold />
      <Banner />
      <TrendingNow />
      <BannerReverse />
      <Footer />
    </>
  );
}
