import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const useLogin = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
  
    const handleButtonClick = () => {
      const message = checkValidateData(
        emailRef.current.value,
        passwordRef.current.value
      );
      setErrorMessage(message);
  
      if (message) return;
  
      if (isSignUpForm) {
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: nameRef.current.value,
            })
              .then(() => {
                dispatch(addUser({ displayName: auth.currentUser.displayName }));
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch(() => {
            setErrorMessage("Email already in use");
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((result) => {
            const user = result.user;
            const { displayName } = user;
            dispatch(addUser({ displayName }));
          })
          .catch(() => {
            setErrorMessage("Incorrect Email Id or Password");
          });
      }
    };
  
    const handleSignWithGoogle = () => {
      const provider = new GoogleAuthProvider();
  
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          const { displayName, photoURL } = user;
          dispatch(addUser({ displayName, photoURL }));
        })
        .catch(() => {
          setErrorMessage("try again some later");
        });
    };


    return {isSignUpForm, nameRef, emailRef, passwordRef, handleButtonClick, errorMessage, handleSignWithGoogle, setIsSignUpForm}
}

export default useLogin
