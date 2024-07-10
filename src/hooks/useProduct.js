import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const useProduct = (props) => {
    const [count, setCount] = useState(1)

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const qtyObj = {qty: count}
    dispatch(addItem({...item, ...qtyObj}));

  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      
    }
    
  }
  
  const handleIncrease = () => {
    setCount(count + 1);
  }

const { image, itemName, price, sale, addToCart, qty, item, id } = props;

  
const formattedPrice = new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2
}).format(price);

const formattedCutPrice = new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2
}).format(price * 1.5);

return { image, itemName, sale, addToCart, qty, item, id, handleAddItem, handleDecrease, handleIncrease, count, formattedPrice, formattedCutPrice }


}

export default useProduct
