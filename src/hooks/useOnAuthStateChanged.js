import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const useOnAuthStateChanged = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {displayName, photoURL} = user;
          dispatch(addUser({ displayName, photoURL }));
        } else {
          dispatch(removeUser());
        }
      });
  
      return () => unsubscribe();
    }, []);
}

export default useOnAuthStateChanged
