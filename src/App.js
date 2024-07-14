import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import useScrollReset from "./hooks/useScrollReset";
import useOnAuthStateChanged from "./hooks/useOnAuthStateChanged";

const App = () => {
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

export default App;
