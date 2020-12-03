import React from "react";
import TrafficItemTimestamp from "../traffic-item-timestamp/traffic-item-timestamp";
import CarNumber from "../car-number/car-number";
import { getClassIcon, getSpeedColor } from "../../utils";

const TrafficItem = ({ itemData, maxSpeed }) => {
  return (
    <li className="traffic-item z-depth-2">
      <div className="traffic-item__left-wrap">
        <div
          className="traffic-item__icon z-depth-1"
          style={{ color: itemData.color }}
        >
          {getClassIcon(itemData.class)}
        </div>
        <TrafficItemTimestamp timestamp={itemData.timestamp} />
      </div>
      <div className="traffic-item__right-wrap">
        <div
          className="traffic-item__speed z-depth-1"
          style={getSpeedColor(itemData.speed, maxSpeed)}
        >
          {itemData.speed} <small>км/ч</small>
        </div>
        <CarNumber number={itemData.plate} />
      </div>
    </li>
  );
};

export default TrafficItem;
