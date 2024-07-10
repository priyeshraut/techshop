import React, { useState } from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={appStore}>
          <Body />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
