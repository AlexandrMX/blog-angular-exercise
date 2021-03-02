import {Action, createReducer, on} from "@ngrx/store";
import {addGuest, loadUserDataAction, setSelectedUser, usersDataLoadedSuccessAction} from "./user-actions";
import {UserState} from "./user.model";
import {mapPostsByUser} from "../../shared/shared-utils";

export const initialState: UserState = {
  usersPosts: [],
  selectedUser: null,
  guests: []
};

export const reducer = createReducer(
  initialState,
  on(setSelectedUser, (state, {selectedUser}) => {
    return {
      ...state,
      selectedUser,
    }
  }),
  on(loadUserDataAction, (state) => {
    return {
      ...state
    }
  }),
  on(usersDataLoadedSuccessAction, (state, {userData}) => {
      const userDataMapped = mapPostsByUser(userData);
      return {
        ...state,
        usersPosts: userDataMapped.usersData,
      }
    }
  ),
  on(addGuest, (state, {guest}) => {
    return {
      ...state,
      guests: guest
    }
  })
);

export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
