import { useCallback, useEffect, useRef, useState } from "react";

const useFeaturedProduct = () => {
  const itemsCont = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [productWidth, setProductWidth] = useState(0);

  useEffect(() => {
    if (itemsCont.current) {
      const scrollW =
        itemsCont.current.scrollWidth - itemsCont.current.clientWidth;
      const productW = itemsCont.current.children[0].offsetWidth;

      setScrollWidth(scrollW);
      setProductWidth(productW);
    }
  }, []);

  const slideLeft = useCallback(() => {
    if (itemsCont.current) {
      itemsCont.current.scrollLeft =
        itemsCont.current.scrollLeft === 0
          ? scrollWidth
          : itemsCont.current.scrollLeft - productWidth;
    }
  }, [scrollWidth, productWidth]);

  const slideRight = useCallback(() => {
    if (itemsCont.current) {
      itemsCont.current.scrollLeft =
        itemsCont.current.scrollLeft >= scrollWidth
          ? 0
          : itemsCont.current.scrollLeft + productWidth;
    }
  }, [scrollWidth, productWidth]);

  return { slideLeft, slideRight, itemsCont };
};

export default useFeaturedProduct;
