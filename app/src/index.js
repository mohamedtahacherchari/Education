import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import DataProvider from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
      <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataProvider>

);
