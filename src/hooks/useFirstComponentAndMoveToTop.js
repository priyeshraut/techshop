import { useEffect, useRef, useState } from "react";

const useFirstComponentAndMoveToTop = () => {
  const firstComponentRef = useRef(null);
  const topLinkRef = useRef(null);
  const [firstComponentHeight, setFirstComponentHeight] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleHideUnhideHeader = (e, firstComponentRef) => {
      if (firstComponentRef.current) {
        setFirstComponentHeight(
          firstComponentRef.current.children[0].offsetHeight
        );

        firstComponentRef.current.children[0].style.paddingTop = e.matches
          ? 164 * 1.2 + "px"
          : 145 * 1.2 + "px";
      }
    };

    handleHideUnhideHeader(mediaQuery, firstComponentRef);

    const handleMoveToTop = () => {
      const scrollHeight = window.scrollY;

      if (topLinkRef.current) {
        scrollHeight > firstComponentHeight
          ? topLinkRef.current.classList.remove("show-link")
          : topLinkRef.current.classList.add("show-link");
      }
    };

    mediaQuery.addEventListener("change", () =>
      handleHideUnhideHeader(mediaQuery, firstComponentRef)
    );

    window.addEventListener("scroll", handleMoveToTop);

    return () => {
      mediaQuery.removeEventListener("change", () =>
        handleHideUnhideHeader(mediaQuery, firstComponentRef)
      );

      window.removeEventListener("scroll", handleMoveToTop);
    };
  }, [firstComponentHeight]);

  return { firstComponentRef, topLinkRef };
};

export default useFirstComponentAndMoveToTop;
