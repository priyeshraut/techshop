import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import HelpCenter from "./components/HelpCenter";
import Cart from "./components/Cart";
import Error from "./components/Error";
import AllProducts from "./components/Categories/AllProducts";
import Computers from "./components/Categories/Computers";
import Tablets from "./components/Categories/Tablets";
import DronesAndCameras from "./components/Categories/DronesAndCameras";
import Mobile from "./components/Categories/Mobile";
import TvAndHomeCinema from "./components/Categories/TvAndHomeCinema";
import WearableTech from "./components/Categories/WearableTech";
import Sale from "./components/Categories/Sale";
import BestSellers from "./components/Categories/BestSellers";
import Headphones from "./components/Categories/Headphones";
import Speakers from "./components/Categories/Speakers";
import SearchResults from "./components/SearchResults";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/helpcenter", element: <HelpCenter /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/allproducts", element: <AllProducts /> },
      { path: "/computers", element: <Computers /> },
      { path: "/tablets", element: <Tablets /> },
      { path: "/drones&cameras", element: <DronesAndCameras /> },
      { path: "/mobile", element: <Mobile /> },
      { path: "/tvandhomecinema", element: <TvAndHomeCinema /> },
      { path: "/wearabletech", element: <WearableTech /> },
      { path: "/sale", element: <Sale /> },
      { path: "/bestsellers", element: <BestSellers /> },
      { path: "/headphones", element: <Headphones /> },
      { path: "/speakers", element: <Speakers /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/product/:resId", element: <ProductDetail /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
