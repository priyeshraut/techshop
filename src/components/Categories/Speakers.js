import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const Speakers = () => {
  const { speakersResult } = useSearch();

  return (
    <Category
      filterResults={speakersResult}
      totalProducts={speakersResult.length}
      category={"Speakers"}
    />
  );
};

export default Speakers;
