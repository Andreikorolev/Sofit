import React from "react";

const CarNumber = ({ number }) => {
  return (
    <div className="car-number z-depth-1">
      <div className="car-number__left-wrap">
        <div className="car-number__letters">{number.slice(0, 1)}</div>
        <div className="car-number__digits">{number.slice(1, 4)}</div>
        <div className="car-number__letters">{number.slice(4, 6)}</div>
      </div>
      <div className="car-number__region">{number.slice(6)}</div>
    </div>
  );
  <div className={`secondary-content`}>{number}</div>;
};

export default CarNumber;
