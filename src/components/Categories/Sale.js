import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const Sale = () => {

  const {saleResult} = useSearch();

  return (
    <Category
      filterResults={saleResult}
      totalProducts={saleResult.length}
      category={"Sale"}
    />
  );
};

export default Sale;
