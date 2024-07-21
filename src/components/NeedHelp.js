import NeedHelpSmall from "../images/needHelp/samll.webp";
import NeedHelpBig from "../images/needHelp/big.webp";
import { Link, useLocation } from "react-router-dom";

const NeedHelp = () => {
  const location = useLocation();
  return (
    <div className="needHelp">
      <picture id="img">
        <source srcSet={NeedHelpSmall} media="(max-width: 553px)" />
        <img src={NeedHelpBig} alt="" />
      </picture>
      <div className="bigScreen">
        <div className="bigScreenInner">
          <p className="needText">
            {location.pathname === "/helpcenter" ? (
              <>
                Need Help? <br />
                We're here to help.
              </>
            ) : (
              <>
                Need Help? Check Out <br /> Our Help Center!
              </>
            )}
          </p>
          <p className="smallText">
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
          {location.pathname === "/helpcenter" ? (
            <a href="tel:123-456-7890">
              <button type="button" className="button">
                Call Us
              </button>
            </a>
          ) : (
            <Link to={"/helpcenter"}>
              <button type="button" className="button">
                Go To Help Center
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
