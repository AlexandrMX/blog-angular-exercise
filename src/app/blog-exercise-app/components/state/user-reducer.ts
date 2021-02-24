import {createAction, createReducer, on} from "@ngrx/store";
import {PostsData, UserMappedByPosts} from "../../services/posts/posts.model";

export const postReducer = createReducer(
  {selectedUser: {
      userId: null,
      name: null,
      data: []
    }
  },
  on(createAction('[] '))
);
