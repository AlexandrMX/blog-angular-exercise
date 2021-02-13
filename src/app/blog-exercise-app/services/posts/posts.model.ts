export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserMappedByPosts {
  userId: number;
  name: string;
  data: PostsData [];
}
export interface PostsData {
    id: number;
    title: string;
    body: string;
}
