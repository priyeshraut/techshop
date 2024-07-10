import Product from "./Product";
import useFeaturedProduct from "../hooks/useFeaturedProduct";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ title, filterData, route }) => {
  const { slideLeft, slideRight, itemsCont } = useFeaturedProduct();

  return (
    <section className="bestSellerSection">
      <div className="bestSellers allScreenMarginTop bigScreenMarginInline sectionPadding">
        <h2 className="h2style">{title}</h2>
        <button
          onClick={slideLeft}
          className="arrow leftArrow hidden"
          id="left"
        >
          <i className="ri-arrow-left-wide-line"></i>
        </button>
        <div ref={itemsCont} className="items">
          {filterData &&
            filterData.map((data) => (
              <Product
                key={data.id}
                id={data.id}
                itemName={data.itemName}
                image={data.image}
                price={data.price}
                cutPrice={data.cutPrice}
                sale={data.sale}
              />
            ))}
        </div>
        <button onClick={slideRight} className="arrow rightArrow" id="right">
          <i className="ri-arrow-right-wide-line"></i>
        </button>

          <Link to={route}>
            <button type="button" className="button whiteBgBtn">
              View All
            </button>
          </Link>
      </div>
    </section>
  );
};

export default FeaturedProduct;
