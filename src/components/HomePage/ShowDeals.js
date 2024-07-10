import deals_01 from "../../images/deals/deals_01.webp";
import deals_02 from "../../images/deals/deals_02.webp";
import bigDeals_01 from "../../images/deals/bigDeals_01.webp";
import bigDeals_02 from "../../images/deals/bigDeals_02.webp";
import { Link } from "react-router-dom";

const ShowDelas = () => {
  return (
    <section className="showDelasSection">
    <div className="showDelas allScreenMarginTop bigScreenMarginInline">
      <div className="dealsItem">
        <div className="dealsIntro">
          <p>Holiday Deals</p>
          <h2>
            Up to <br />
            30% off
          </h2>
          <p>Selected Smartphone Brands</p>
          <Link to={"/mobile"}>
            <button type="button" className="button shopbtn">
              Shop
            </button>
          </Link>
        </div>
        <picture>
          <source srcSet={deals_01} media="(max-width: 425px)" />
          <img src={bigDeals_01} alt="dealsimage" />
        </picture>
      </div>
      <div className="dealsItem">
        <div className="dealsIntro">
          <p>Just In</p>
          <h2>
            Take Your <br />
            Sound <br />
            Anywhere
          </h2>
          <p>Top Headphone Brands</p>
          <Link to={"/headphones"}>
            <button type="button" className="button shopbtn">
              Shop
            </button>
          </Link>
        </div>
        <picture>
          <source srcSet={deals_02} media="(max-width: 425px)" />
          <img src={bigDeals_02} alt="dealsimage" />
        </picture>
      </div>
    </div>
    </section>
  );
};

export default ShowDelas;
