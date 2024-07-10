import { productData } from "../utils/productData";

const useSearch = () => {
  const allproductsResult = productData.map((data) => data);

  const computersResult = productData.filter((data) =>
    data.category.includes("computers")
  );

  const tabletsResult = productData.filter((data) =>
    data.category.includes("tablets")
  );

  const dronesandcamerasResult = productData.filter((data) =>
    data.category.includes("droneandcameras")
  );

  const headphonesResult = productData.filter((data) =>
    data.category.includes("headphones")
  );

  const speakersResult = productData.filter((data) =>
    data.category.includes("speakers")
  );

  const mobileResult = productData.filter((data) =>
    data.category.includes("mobile")
  );

  const tvAndHomeCinemaResult = productData.filter((data) =>
    data.category.includes("tvandhomecinema")
  );

  const wearableTechResult = productData.filter((data) =>
    data.category.includes("wearabletech")
  );

  const saleResult = productData.filter((data) =>
    data.category.includes("sale")
  );


  return {
    computersResult,
    allproductsResult,
    tabletsResult,
    dronesandcamerasResult,
    headphonesResult,
    speakersResult,
    mobileResult,
    tvAndHomeCinemaResult,
    wearableTechResult,
    saleResult
  };
};

export default useSearch;
