import { ActionType } from "./action";
import { extend } from "../utils";

const initialState = {
  vehicleTrafficEntry: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_VEHICLE_TRAFFIC_ENTRY:
      let newList = [...state.vehicleTrafficEntry, action.payload];
      newList.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));
      return extend(state, {
        vehicleTrafficEntry: newList.slice(-30),
      });
  }

  return state;
};
