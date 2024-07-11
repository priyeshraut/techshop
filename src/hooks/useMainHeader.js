import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { productData } from "../utils/productData";
import { setFilteredProducts } from "../utils/searchSlice";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { setFromPath } from "../utils/pathSlice";

const useMainHeader = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const user = useSelector((store) => store.user);

    const handleSearch = (e) => {
        e.preventDefault();

        const searchFilterItenNameWithItemCategroy = productData.filter((data) =>
            (data.category + data.itemName)
                .toString()
                .toLowerCase()
                .includes(query.toLowerCase())
        );

        dispatch(setFilteredProducts(searchFilterItenNameWithItemCategroy));

        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
            })
            .catch(() => {
                navigate("/error");
            });
    };

    const handleLogin = () => {
        navigate('/login')
        dispatch(setFromPath(location.pathname))
      }

    const cartItems = useSelector((store) => store.cart.items);
    const totalCartItems = cartItems.reduce((total, item) => total + item.qty, 0);

    return {handleSearch, handleSignOut, handleLogin, query, setQuery, totalCartItems, user};
}

export default useMainHeader
