import { Link } from "react-router-dom";
import CategoryNavigation from "../HeaderComponents/CategoryNavigation";

const FooterNavigation = () => {
  return (
    <section className="footerNav sectionPadding">
      <div className="storeLocation">
        <h3>Store Location</h3>
        <p>
          500 Gandhi Nagar Street <br />
          Dhanbad, Jharkhand, India<br />
          info@techshop.com <br />
          123-456-7890
        </p>
        <ul>
          <li>
            <i className="ri-facebook-fill"></i>
          </li>
          <li>
            <i className="ri-instagram-line"></i>
          </li>
          <li>
            <i className="ri-twitter-x-fill"></i>
          </li>
          <li>
            <i className="ri-youtube-fill"></i>
          </li>
        </ul>
      </div>
      <div className="shop">
        <h3>Shop</h3>
        <CategoryNavigation />
      </div>
      <div className="customerSupport">
        <h3>Customer Support</h3>
        <ul>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/helpcenter"}>Help Center</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/about"}>Careers</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterNavigation;
