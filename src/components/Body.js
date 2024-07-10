import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import useScrollReset from "../hooks/useScrollReset";
import useOnAuthStateChanged from "../hooks/useOnAuthStateChanged";

const Body = () => {
  useScrollReset();
  useOnAuthStateChanged();

  return (
    <>
      {location.pathname !== "/login" && <Header />}  
      <Outlet />
      {location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default Body;
