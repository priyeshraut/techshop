import { useEffect, useRef } from "react";

const useHomeFirstComponent = () => {
    const carouselRef = useRef(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleHomeScroll = (e) => {
      if (carouselRef.current) {
        carouselRef.current.style.paddingTop = "0px";
        carouselRef.current.style.marginTop = e.matches
          ? `${164 / 1.2}px`
          : `${145 / 2}px`;
      }
    };

    handleHomeScroll(mediaQuery);

    mediaQuery.addEventListener("change", () => handleHomeScroll(mediaQuery));

    return () => {
      mediaQuery.removeEventListener("change", () =>
        handleHomeScroll(mediaQuery)
      );
    };
  });

  return carouselRef;
}

export default useHomeFirstComponent
