import { Link, useNavigate } from "react-router-dom";
import CategoryNavigation from "./CategoryNavigation";
import MainNavigation from "./MainNavigation";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import User from "./User";

const SideBarNavigation = ({ aside, hideAside }) => {
  const navigate = useNavigate();
  
  const user = useSelector((store) => store.user);
  
  const handleSignOut = () => {
    signOut(auth).catch(() => {
      navigate("/error");
    });
  };
  
  return (
    <aside className={`hamburgerMobileView ${aside}`}>
      <div className="hamMobileIcon">
        <div className="sideBarLoginUser">
          <User />
        </div>
        <div>
          <i
            onClick={hideAside}
            className="fa fa-sharp fa-thin fa-xmark"
            id="hamClose"
          ></i>
        </div>
      </div>
      <nav className="hamNav">
        <MainNavigation hideAside={hideAside} />
      </nav>

      <div className="hamCategory">
        <h2>Categories</h2>
        <CategoryNavigation hideAside={hideAside} />
      </div>
    </aside>
  );
};

export default SideBarNavigation;
