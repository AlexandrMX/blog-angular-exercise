import {PostsData, UserMappedByPosts} from "../../services/posts/posts.model";

export interface UserState {
  usersPosts: UserMappedByPosts[];
  selectedUser: any;
  guests: GuestPosts[];
}

export interface GuestPosts {
  comment: string
  firstName: string
  lastName: string
}


export interface UserDataMapper {
  usersData: UserMappedByPosts
}

export const USER_STATE = 'UserState';
