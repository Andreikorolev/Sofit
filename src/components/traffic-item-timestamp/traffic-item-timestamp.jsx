import React from "react";
import { getFormatedTime } from "../../utils";

const TrafficItemTimestamp = ({ timestamp }) => {
  return (
    <div className="traffic-item-timestamp">
      <span>{getFormatedTime(timestamp)}</span>
    </div>
  );
};

export default TrafficItemTimestamp;
