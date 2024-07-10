import { productData } from "../utils/productData";

const useProductData = () => {
  const bestSellersResult = productData.filter((data) =>
    data.category.includes("bestsellers")
  );

  const onSaleResult = productData.filter((data) =>
    data.category.includes("sale")
  );

  return {bestSellersResult, onSaleResult};
};

export default useProductData;
