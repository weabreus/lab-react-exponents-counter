import React from "react";

const ExponentComponent = ({exponent, count}) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<span style={{verticalAlign: "super", fontSize: "0.5em"}}>{exponent}</span></p>
      <p className="exponent-result">
        {count} * {count} ={" "}
        <span className="total">{(count ** exponent).toLocaleString()}</span>
      </p>
    </div>
  );
};

export default ExponentComponent;
