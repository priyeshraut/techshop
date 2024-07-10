import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const useOnAuthStateChanged = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {displayName, photoURL} = user;
          dispatch(addUser({ displayName, photoURL }));
          navigate("/");
        } else {
          dispatch(removeUser());
          navigate("/login");
        }
      });
  
      return () => unsubscribe();
    }, []);
}

export default useOnAuthStateChanged
