import React from "react";
import styles from "./InfoPage.css";

import GeneralInfo from "../InfoContent/GeneralInfo";


const Info = () => {
  return (
    <React.Fragment>
      <div className="InfoSection">
        <h1 align="center" className="H1Tag">
          Information Section
        </h1>
      </div>
      <GeneralInfo />
    </React.Fragment>
  );
};

export default Info;
