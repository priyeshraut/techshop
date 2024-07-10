import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const Headphones = () => {

  const {headphonesResult} = useSearch();

  return (
    <Category
      filterResults={headphonesResult}
      totalProducts={headphonesResult.length}
      category={"Headphones"}
    />
  );
};

export default Headphones;
