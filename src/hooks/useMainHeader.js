import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productData } from "../utils/productData";
import { setFilteredProducts } from "../utils/searchSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const useMainHeader = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispath = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchFilterItenNameWithItemCategroy = productData.filter((data) =>
      (data.category + data.itemName)
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    dispath(setFilteredProducts(searchFilterItenNameWithItemCategroy));

    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const cartItems = useSelector((store) => store.cart.items);
  const totalCartItems = cartItems.reduce((total, item) => total + item.qty, 0);

  return {
    handleSearch,
    setQuery,
    user,
    handleSignOut,
    totalCartItems
  };
};

export default useMainHeader;
