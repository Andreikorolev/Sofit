import React from "react";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getClassIcon = (classType) => {
  switch (classType) {
    case `car`:
      return <i className="class-type-icon fas fa-car-side"></i>;
    case `truck`:
      return <i className="class-type-icon fas fa-truck-moving"></i>;
    case `bus`:
      return <i className="class-type-icon fas fa-bus"></i>;
    case `motorcycle`:
      return <i className="class-type-icon fas fa-motorcycle"></i>;
  }
};

export const getFormatedTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleString(`ru-RU`, {
    hour: `numeric`,
    minute: `numeric`,
    second: `numeric`,
    day: `numeric`,
    month: `long`,
  });
};

export const getSpeedColor = (speed, maxSpeed) =>
  speed > maxSpeed
    ? { backgroundColor: "red" }
    : { backgroundColor: "lightgreen" };
