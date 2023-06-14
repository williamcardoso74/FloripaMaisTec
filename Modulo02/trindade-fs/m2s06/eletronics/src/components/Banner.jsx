import React from "react";
import "../styles/Banner.css";
import Proptypes from 'prop-types';

function Banner({title1, title2, dot}) {
  return (
    <div className="container-fluid banner">
      <span className="title1">{title1}</span>
      <span className="title2">{title2}<span className="dot">{dot}</span></span>
    </div>
  );
};

Banner.propTypes = {
  title1: Proptypes.string,
  title2: Proptypes.string,
  dot: Proptypes.string
};

export default Banner;
