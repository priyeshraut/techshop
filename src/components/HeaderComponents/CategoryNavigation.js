import { Link } from "react-router-dom";

const CategoryNavigation = ({ addStyle, hideAside, allProducts }) => {
  return (
    <nav>
      <ul className={`${addStyle?.caterories} ${addStyle?.bigScreenPadding}`}>
        <li onClick={hideAside}>
          {!allProducts ? (
            <Link to={"/allproducts"}>Shop All</Link>
          ) : (
            <Link to={"/allproducts"}>All Products</Link>
          )}
        </li>
        <li onClick={hideAside}>
          <Link to={"/computers"}>Computers</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/tablets"}>Tablets</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/drones&cameras"}>Drones & Cameras</Link>
        </li>
        <li id="audio">
          <div>Audio</div>
          <div id="dropdonw">
            <Link to={"/headphones"}>Headphone</Link>
            <Link to={"/speakers"}>Speakers</Link>
          </div>
        </li>
        <li id="headphones" onClick={hideAside}>
          <Link to={"/headphones"}>Headphone</Link>
        </li>
        <li id="speakers" onClick={hideAside}>
          <Link to={"/speakers"}>Speakers</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/mobile"}>Mobile</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/tvandhomecinema"}>T.V & Home Cinema</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/wearabletech"}>Wearable Tech</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/sale"}>Sale</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
