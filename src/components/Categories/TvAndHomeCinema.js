import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const TvAndHomeCinema = () => {

  const {tvAndHomeCinemaResult} = useSearch();

  return (
    <Category
      filterResults={tvAndHomeCinemaResult}
      totalProducts={tvAndHomeCinemaResult.length}
      category={"TV & Home Cinema"}
    />
  );
};

export default TvAndHomeCinema;
