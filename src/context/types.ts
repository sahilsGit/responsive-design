/**
 * This Redux store is here to demonstrates my understanding of Redux & TypeScript.
 * It manages the global-application state, but since the project's scope was
 * limited to me implementing just the UI, the specific state properties haven't been
 * carefully considered. In other words, what data goes in this state isn't
 * fully fleshed out.
 */

// Example AppState interface
export interface AppState {
  revenue: number;
  users: number;
  newSignUps: number;
  retention: number;
}

// Types for setters
export const SET_REVENUE = "SET_REVENUE";
export const SET_USERS = "SET_USERS";
export const SET_NEW_SIGNUPS = "SET_NEW_SIGNUPS";
export const SET_RETENTION = "SET_RETENTION";

// Actions interface for setters
interface SetRevenueAction {
  type: typeof SET_REVENUE;
  payload: number;
}

interface SetUsersAction {
  type: typeof SET_USERS;
  payload: number;
}

interface SetNewSignUpsAction {
  type: typeof SET_NEW_SIGNUPS;
  payload: number;
}

interface SetRetentionAction {
  type: typeof SET_RETENTION;
  payload: number;
}

/**
 * Export the Actions as AppActions type because the reducer
 * can get any of the above actions type
 *
 */

export type AppActions =
  | SetRevenueAction
  | SetUsersAction
  | SetNewSignUpsAction
  | SetRetentionAction;
