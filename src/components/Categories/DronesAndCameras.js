import useSearch from "../../hooks/useSearch";
import Category from "../Category";

const DronesAndCameras = () => {

  const {dronesandcamerasResult} = useSearch();

  return (
    <Category
      filterResults={dronesandcamerasResult}
      totalProducts={dronesandcamerasResult.length}
      category={"Drones & Cameras"}
    />
  );
};

export default DronesAndCameras;
