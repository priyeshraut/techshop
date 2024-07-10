import { productData } from "../../utils/productData";
import Category from "../Category";

const BestSellers = () => {
    const bestSellersResult = productData.filter((data) =>
        data.category.includes("bestsellers")
      );


  return (
    <Category
      filterResults={bestSellersResult}
      totalProducts={bestSellersResult.length}
      category={"Best Sellers"}
    />
  );
};

export default BestSellers;
