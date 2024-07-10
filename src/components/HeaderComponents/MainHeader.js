import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../../utils/productData";
import { setFilteredProducts } from "../../utils/searchSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const MainHeader = ({ showAside }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispath = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchFilterItenNameWithItemCategroy = productData.filter((data) =>
      (data.category + data.itemName)
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    dispath(setFilteredProducts(searchFilterItenNameWithItemCategroy));

    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const cartItems = useSelector((store) => store.cart.items);
  const totalCartItems = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="headerMainBg">
      <div className="headerMain smallScreenPadding bigScreenPadding">
        <div className="headerMainInner">
          <Link to={"/"}>
            <h1>TechShop</h1>
          </Link>
          <div className="icons">
            <Link to="/cart">
              <i className="fa fa-thin fa-cart-shopping"></i>
              <span className="number">0</span>
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
          <div className="headerMainInnerSecondLogin">
            <div id="userCont">
              {user?.photoURL ? (
                <span id="userImg">
                  <img src={user.photoURL} alt="user" />
                </span>
              ) : (
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
              )}
              <span>
                <i className="fa fa-sharp fa-light fa-angle-down"></i>
              </span>
            </div>
            <div id="dropDownCont">
              <p>{user?.displayName}</p>
              <p onClick={handleSignOut}>Log Out</p>
            </div>
          </div>
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
