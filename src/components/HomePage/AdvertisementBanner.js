import smallScreen from "../../images/todaysSpecial/smallScreen.webp";
import bigScreen from "../../images/todaysSpecial/bigScreen.webp";
import { Link } from "react-router-dom";

const AdvertisementBanner = () => {
  return (
    <section className="TodaysSpecialSection">
      <div className="todaysSepcial bestPrices allScreenMarginTop bigScreenMarginInline">
        <picture id="img">
          <source srcSet={smallScreen} media="(max-width: 553px)" />
          <img src={bigScreen} alt="" />
        </picture>
        <div className="bigScreen">
          <div className="bigScreenInner">
            <p className="smallText ts">Today's Special</p>
            <p className="fontText">Best Arial View in Town</p>
            <p className="price">
              <span className="percent">30%</span> OFF
            </p>
            <p className="fontText">on professional camera drones</p>
            <p className="smallText">
              Limited quantities. <br />
              See product detail pages for availability.
            </p>
            <Link to={"/drones&cameras"}>
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

export default AdvertisementBanner;
