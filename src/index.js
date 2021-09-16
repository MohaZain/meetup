import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import  {
  FavortiesContextProvider,
} from "./store/favorites-context";

ReactDOM.render(
  <FavortiesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavortiesContextProvider>,
  document.getElementById("root")
);
// dxsaxd
