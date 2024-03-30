// Refer to ./types.ts

import { initialState } from "./store";
import {
  AppState,
  AppActions,
  SET_REVENUE,
  SET_USERS,
  SET_NEW_SIGNUPS,
  SET_RETENTION,
} from "./types";

const reducer = (
  state: AppState = initialState,
  action: AppActions
): AppState => {
  switch (action.type) {
    case SET_REVENUE:
      return {
        ...state,
        revenue: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_NEW_SIGNUPS:
      return {
        ...state,
        newSignUps: action.payload,
      };
    case SET_RETENTION:
      return {
        ...state,
        retention: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
