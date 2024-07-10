import { Link, useNavigate } from "react-router-dom";
import CategoryNavigation from "./CategoryNavigation";
import MainNavigation from "./MainNavigation";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

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
        <div className="login_likedItem">
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
              <p onClick={handleSignOut}>
               Log Out
              </p>
            </div>
          </div>
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
