import {USER_STATE, UserState} from "./user.model";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const getSelectedUser = ( state: UserState) => {
  return state.selectedUser;
};

const selectedUserState = createFeatureSelector<UserState>(USER_STATE)

export const selectSelectedUser = createSelector(selectedUserState, getSelectedUser)
