import {Action, createAction, createReducer, on} from "@ngrx/store";
import {PostsData, UserMappedByPosts} from "../../services/posts/posts.model";
import {selectedUserSuccess, setSelectedUser} from "./user-actions";
import {UserState} from "./user.model";

export const  initialState: UserState = {
  usersData: {
    userId: null,
    name: null,
    data: [],
  },
  selectedUser: null
};

export const reducer = createReducer(
  initialState,
  on(setSelectedUser, (state, {selectedUser }) => {
      return {
        ...state,
        selectedUser: selectedUser,
      }
    }),
  );

export function userReducer(state:UserState, action: Action) {
  return reducer(state, action);
}
