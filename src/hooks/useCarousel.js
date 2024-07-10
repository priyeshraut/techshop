import { useEffect, useState } from "react";
import { CarouselImages } from "../utils/mockData";

const useCarousel = () => {
  const [slide, setSlide] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(1);

  const { imgBig, sourceMid, sourceSm } = CarouselImages[slide];

  const carouselSlide = () => {
    setImgOpacity(0);

    setTimeout(() => {
      const changeSlide = slide >= CarouselImages.length - 1 ? 0 : slide + 1;
      setSlide(changeSlide);
      setImgOpacity(1);
    }, 500);
  };

  const handleDot = (e) => {
    setSlide(parseInt(e.target.id));
  };

  useEffect(() => {
    const interval = setInterval(carouselSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return {
    imgOpacity,
    slide,
    handleDot,
    CarouselImages,
    imgBig,
    sourceMid,
    sourceSm,
  };
};

export default useCarousel;
