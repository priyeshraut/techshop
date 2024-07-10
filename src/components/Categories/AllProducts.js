import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const AllProducts = () => {
  const {allproductsResult} = useSearch();

  return (
    <Category
      filterResults={allproductsResult}
      totalProducts={allproductsResult.length}
      category={"All Products"}
    />
  );
};

export default AllProducts;
