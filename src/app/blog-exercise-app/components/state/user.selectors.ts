import {USER_STATE, UserState} from "./user.model";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const getSelectedUser = ( state: UserState) => {
  return state.selectedUser;
};

const userState = createFeatureSelector<UserState>(USER_STATE)

export const selectSelectedUser = createSelector(userState, getSelectedUser)

const getPostsByUser = (state: UserState) => {
  return state.usersPosts;
};

export const selectPostsByUser = createSelector(userState, getPostsByUser)


const getAllGuests = (state) => {
  return state.guests
};

export const selectAllGuests = createSelector(userState, getAllGuests);
