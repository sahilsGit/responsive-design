// Refer to ./types.ts

import {
  SET_REVENUE,
  SET_USERS,
  SET_NEW_SIGNUPS,
  SET_RETENTION,
  AppActions,
} from "./types";

// Setters that takes corresponding payload and returns an AppActions type
export const setRevenue = (revenue: number): AppActions => ({
  type: SET_REVENUE,
  payload: revenue,
});

export const setUsers = (users: number): AppActions => ({
  type: SET_USERS,
  payload: users,
});

export const setNewSignups = (newSignUps: number): AppActions => ({
  type: SET_NEW_SIGNUPS,
  payload: newSignUps,
});

export const setRetention = (retention: number): AppActions => ({
  type: SET_RETENTION,
  payload: retention,
});
