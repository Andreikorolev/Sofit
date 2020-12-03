export const ActionType = {
  UPDATE_VEHICLE_TRAFFIC_ENTRY: `UPDATE_VEHICLE_TRAFFIC_ENTRY`,
};

export const updateVehicleTrafficEntry = (data) => ({
  type: ActionType.UPDATE_VEHICLE_TRAFFIC_ENTRY,
  payload: data,
});
