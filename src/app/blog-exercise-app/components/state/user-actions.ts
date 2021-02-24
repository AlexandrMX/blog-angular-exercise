import {createAction, props} from "@ngrx/store";
import {LOAD_USER_DATA, SELECTED_USER_SUCCESS, SET_SELECTED_USER, USER_DATA_LOADED} from "./user-actiontypes";
import {Post, UserMappedByPosts} from "../../services/posts/posts.model";

export const userDataLoaded = createAction(USER_DATA_LOADED, props<{userData: Post[]}>());
export const loadUserDataAction = createAction(LOAD_USER_DATA);

export const setSelectedUser = createAction(SET_SELECTED_USER, props<{ selectedUser: UserMappedByPosts }>() );
export const selectedUserSuccess = createAction(SELECTED_USER_SUCCESS);

