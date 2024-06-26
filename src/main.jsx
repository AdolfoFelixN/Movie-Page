import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Search } from "./components/Search";
import { Principal } from "./components/Principal";
import { SideOptions } from "./components/SideOptions";

//Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mainContainer">
      <div className="sideOptions">
        <SideOptions />
      </div>

      <div className="moviesAvailable">
        <Search />
        <Principal sectionTitle={"Movies"} />

      </div>
    </div>
  </React.StrictMode>
);
