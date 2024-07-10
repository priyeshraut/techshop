import { Link } from "react-router-dom";

const MainNavigation = ({hideAside}) => {
  return (
      <ul className="navList">
        <li onClick={hideAside}>
          <Link to={"/"}>Home</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/about"}>About</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li onClick={hideAside}>
          <Link to={"/helpcenter"}>Help Center</Link>
        </li>
        <li onClick={hideAside}>
          <a href="tel:123-456-7890" id="callUs">
            Call Us
          </a>
          <a href="tel:123-456-7890">123-456-7890</a>
        </li>
      </ul>
  );
};

export default MainNavigation;
