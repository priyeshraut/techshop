import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const WearableTech = () => {

  const {wearableTechResult} = useSearch();

  return (
    <Category
      filterResults={wearableTechResult}
      totalProducts={wearableTechResult.length}
      category={"Wearable Tech"}
    />
  );
};

export default WearableTech;
