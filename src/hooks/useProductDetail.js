import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { productData } from "../utils/productData";

const useProductDetail = () => {
  const [count, setCount] = useState(1);
  const { resId } = useParams();
  const actualId = resId - 1;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const qtyObj = { qty: count };
    dispatch(addItem({ ...item, ...qtyObj }));
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const {
    itemName,
    itemDesc,
    itemInfo,
    returnRefundPolicy,
    shippingInfo,
    price,
    image,
  } = productData[actualId];

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
  }).format(price);

  const formattedCutPrice = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
  }).format(price * 1.5);

  return {
    itemName,
    itemDesc,
    itemInfo,
    returnRefundPolicy,
    shippingInfo,
    price,
    image,
    formattedPrice,
    formattedCutPrice,
    count,
    handleDecrease,
    handleIncrease,
    handleAddItem,
    actualId,
  };
};

export default useProductDetail;
