import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItemQty } from "../utils/cartSlice";

const useCartItem = (props) => {
  const [count, setCount] = useState(props.qty);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleDecrease = (item) => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(updateItemQty({ id: item.id, qty: item.qty - 1 }));
    }
  };

  const handleIncrease = (item) => {
    setCount(count + 1);
    dispatch(updateItemQty({ id: item.id, qty: item.qty + 1 }));
  };

  const { itemName, price, cutPrice, image, itemId, id, item, qty } = props;
  
  const formattedPrice = new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
    }).format(price);
    
    const formattedCutPrice = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
    }).format(price * 1.5);
    


  return { itemName, price, cutPrice, image, itemId, id, item, qty, formattedPrice, formattedCutPrice, handleRemoveItem, handleDecrease, handleIncrease, count }
};

export default useCartItem;
