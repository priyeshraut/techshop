import smallScreenBestPrice from "../../images/bestPrice/smallScreenBestPrice.webp";
import bigScreenBestPrice from "../../images/bestPrice/bigScreenBestPrice.webp";
import { Link } from "react-router-dom";


const BestPrice = () => {
  return (
    <section className="bestPricesSection">
    <div className="bestPrices allScreenMarginTop bigScreenMarginInline">
      <picture id="img">
        <p className="tag">
          Best <br />
          Price
        </p>
        <source
          srcSet={smallScreenBestPrice}
          media="(max-width: 553px)"
        />
        <img src={bigScreenBestPrice} alt="bestpriceimage" />
      </picture>
      <div className="bigScreen">
        <div className="bigScreenInner">
          <p className="fontText">Save up to</p>
          <p className="price">$150</p>
          <p className="fontText st">
            on selected laptop <br />& tablets brands
          </p>
          <p className="smallText">Terms and conditions apply</p>
          <Link to={"/computers"}>
            <button type="button" className="button shopbtn whiteBgBtn">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BestPrice;
