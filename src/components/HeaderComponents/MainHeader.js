import { Link, useNavigate } from "react-router-dom";
import useMainHeader from "../../hooks/useMainHeader";
import User from "./User";

const MainHeader = ({ showAside }) => {
  const { handleSearch, handleSignOut, query, setQuery, totalCartItems, user } =
    useMainHeader();

  return (
    <div className="headerMainBg">
      <div className="headerMain smallScreenPadding bigScreenPadding">
        <div className="headerMainInner">
          <Link to={"/"}>
            <h1>TechShop</h1>
          </Link>
          <div className="icons">
            <Link to={"/cart"}>
              <i className="fa fa-thin fa-cart-shopping"></i>
              <span className="number">{totalCartItems}</span>
            </Link>
            <i
              onClick={showAside}
              className="fa fa-light fa-bars"
              id="hamburger"
            ></i>
          </div>
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search...."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit">
            <i className="fa fa-light fa-magnifying-glass"></i>
          </button>
          {query && (
            <div
              onClick={() => {
                setQuery("");
              }}
              id="searchCloseIcon"
            >
              <i className="fa fa-sharp fa-thin fa-xmark" id="hamClose"></i>
            </div>
          )}
        </form>
        <div className="headerMainInnerSecond">
          <User />
          <div className="icons">
            <Link to={"/cart"}>
              <i className="fa fa-thin fa-cart-shopping"></i>
              <span className="number">{totalCartItems}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
