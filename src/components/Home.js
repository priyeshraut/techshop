import Carousel from "./HomePage/Carousel";
import ShowDelas from "./HomePage/ShowDeals";
import BenefitsServices from "./HomePage/BenefitsServices";
import FeaturedProduct from "./FeaturedProduct";
import BestPrice from "./HomePage/BestPrice";
import ShopByCategory from "./HomePage/ShopByCategory";
import AdvertisementBanner from "./HomePage/AdvertisementBanner";
import Brands from "./HomePage/Brands";
import NewsLetter from "./HomePage/NewsLetter";
import MoveToTop from "./MoveToTop";
import useProductData from "../hooks/useProductData";
import useHomeFirstComponent from "../hooks/useHomeFirstComponent";
import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";

const Home = () => {
  const { bestSellersResult, onSaleResult } = useProductData();
  const { firstComponentRef, topLinkRef} = useFirstComponentAndMoveToTop();
  const carouselRef = useHomeFirstComponent();

  return (
    <main ref={firstComponentRef}>
      <Carousel ref={carouselRef} />
      <ShowDelas />
      <BenefitsServices />
      <FeaturedProduct
        route={"/bestsellers"}
        filterData={bestSellersResult}
        title="Best Seller"
      />
      <BestPrice />
      <ShopByCategory />
      <FeaturedProduct
        route={"/sale"}
        filterData={onSaleResult}
        title="On Sale"
      />
      <AdvertisementBanner />
      <Brands />
      <section className="homeNewsLetter">
        <NewsLetter />
      </section>
      <MoveToTop ref={topLinkRef} />
    </main>
  );
};

export default Home;
