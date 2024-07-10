import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const Tablets = () => {
  const { tabletsResult } = useSearch();

  return (
    <Category
      filterResults={tabletsResult}
      totalProducts={tabletsResult.length}
      category={"Tablets"}
    />
  );
};

export default Tablets;
