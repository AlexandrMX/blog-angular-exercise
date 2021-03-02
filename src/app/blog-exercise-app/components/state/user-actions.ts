import {createAction, createSelector, props} from "@ngrx/store";
import {ADD_GUEST, LOAD_USER_DATA, SET_SELECTED_USER, USER_DATA_LOADED_SUCCESS} from "./user-actiontypes";
import {Post, UserMappedByPosts} from "../../services/posts/posts.model";
import {GuestPosts} from "./user.model";

export const usersDataLoadedSuccessAction = createAction(USER_DATA_LOADED_SUCCESS, props<{ userData: Post[] }>());
export const loadUserDataAction = createAction(LOAD_USER_DATA);

export const setSelectedUser = createAction(SET_SELECTED_USER, props<{ selectedUser: UserMappedByPosts }>());

export const addGuest = createAction(ADD_GUEST, props<{guest: GuestPosts[]}>());
