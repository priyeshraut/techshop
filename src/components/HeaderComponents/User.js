import useMainHeader from "../../hooks/useMainHeader";

const User = () => {
  const { handleSignOut, handleLogin, user } = useMainHeader();

  return (
    <div className="headerMainInnerSecondLogin">
      <div id="userCont">
        {user?.photoURL ? (
          <div id="userImg">
            <img src={user.photoURL} alt="user" />
          </div>
        ) : (
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
        )}
        {!user ? (
          <div onClick={handleLogin} id="loginUser">
            Log In
          </div>
        ) : (
          <div>
            <i className="fa fa-sharp fa-light fa-angle-down"></i>
          </div>
        )}
        {user && (
          <div id="dropDownCont">
            <p>{user?.displayName}</p>
            <p onClick={handleSignOut}>Log Out</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
