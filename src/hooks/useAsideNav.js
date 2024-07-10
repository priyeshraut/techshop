import { useState } from "react";

const useAsideNav = () => {
    const [aside, setAside] = useState("hideAside");

    const showAside = () => {
      setAside("showAside");
    };
  
    const hideAside = () => {
      setAside("hideAside");
    };


    return {aside, showAside, hideAside};
}

export default useAsideNav
