import React from "react";
import "../styles/Banner.css";
import Proptypes from 'prop-types';

function Banner(title1, title2) {
  return (
    <div className="container-fluid banner">
      <span>{title1}</span>
      <span>{title2}</span>
    </div>
  );
};

Banner.propTypes = {
  title1: Proptypes.string,
  title2: Proptypes.string
};

export default Banner;
