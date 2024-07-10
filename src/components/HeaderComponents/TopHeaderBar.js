import { Link } from "react-router-dom"
import MainNavigation from "./MainNavigation";

const TopHeaderBar = () => {
  return (
    <div className="headerTopBg">
      <div className="headerTop bigScreenPadding">
        <div className="headerTagLine smallScreenPadding">
          <span>
            <i className="ri-box-3-line"></i>
          </span>
          <h3>Free Shipping for orders over ₹5000</h3>
        </div>
        <nav>
        <MainNavigation />
        </nav>
      </div>
      </div>
  )
}

export default TopHeaderBar;
