import googleLogo from "../images/google_logo.png";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    isSignUpForm,
    nameRef,
    emailRef,
    passwordRef,
    fromPath,
    handleButtonClick,
    errorMessage,
    handleSignWithGoogle,
    setIsSignUpForm,
  } = useLogin();


  return (
    <div className="loginSignupSection ">
      <div className="loginClose">
        <Link to={fromPath || '/'}>
          <i className="fa fa-sharp fa-thin fa-xmark"></i>
        </Link>
      </div>
      <div className="loginSignUpContainer">
        <div className="loginForm">
          <div className="loginSignup">
            <h2>{isSignUpForm ? "Sign Up" : "Log In"}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              {isSignUpForm && (
                <input
                  ref={nameRef}
                  type="text"
                  name="text"
                  placeholder="Name"
                />
              )}
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button onClick={handleButtonClick} type="submit">
                {isSignUpForm ? "Sign Up" : "Log In"}
              </button>
            </form>
          </div>
        </div>
        <div className="loginSignupError">{errorMessage}</div>
        <div className="signUp_login">
          <span>{isSignUpForm ? "Have An Account?" : "New to TechShop?"}</span>
          <button
            onClick={(e) => {
              setIsSignUpForm(!isSignUpForm);
            }}
            type="submit"
          >
            {isSignUpForm ? "Log In" : "Sign Up"}
          </button>
        </div>
        <button
          type="button"
          className="signin-with-google"
          onClick={handleSignWithGoogle}
        >
          <img src={googleLogo} alt="" />
          <span>Sing with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
