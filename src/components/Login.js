import googleLogo from "../images/google_logo.png";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const {
    isSignUpForm,
    nameRef,
    emailRef,
    passwordRef,
    handleButtonClick,
    errorMessage,
    handleSignWithGoogle,
    setIsSignUpForm,
  } = useLogin();

  return (
    <div className="loginSignupSection ">
      <div className="loginSignUpContainer">
        <div className="loginForm">
          <div className="loginSignup">
            <h2>{isSignUpForm ? "Sign Up" : "Login"}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              {isSignUpForm && (
                <input
                  ref={nameRef}
                  type="text"
                  name="text"
                  placeholder="Name"
                  required
                />
              )}
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
              <button onClick={handleButtonClick} type="submit">
                {isSignUpForm ? "Sign Up" : "Login"}
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
            {isSignUpForm ? "Login" : "Sign Up"}
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
