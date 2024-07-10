import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const Computers = () => {
  const {computersResult} = useSearch();

  return (
    <Category
      filterResults={computersResult}
      totalProducts={computersResult.length}
      category={"Computer"}
    />
  );
};

export default Computers;
