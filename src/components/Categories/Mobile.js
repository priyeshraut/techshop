import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const Mobile = () => {

  const {mobileResult} = useSearch();

  return (
    <Category
      filterResults={mobileResult}
      totalProducts={mobileResult.length}
      category={"Mobile"}
    />
  );
};

export default Mobile;
