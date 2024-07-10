import { useEffect, useRef, useState } from "react";

const useHeader = () => {
    const headerRef = useRef(null);

    const [headerHeight, setHeaderHeight] = useState(0);

  
    useEffect(() => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }, [])
  
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const handleScroll = () => {
        if (headerRef.current) {
          if (lastScrollY < window.scrollY) {
            headerRef.current.style.top = `-${headerHeight}px`;
          } else {
            headerRef.current.style.top = '0';
          }
          lastScrollY = window.scrollY;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [headerHeight]);

    return headerRef;
}

export default useHeader
