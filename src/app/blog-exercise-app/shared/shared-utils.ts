import {Post, UserMappedByPosts} from '../services/posts/posts.model';
import {generateName} from './name-generator/name-generator';
import {UserDataMapper} from "../components/state/user.model";

export const mapPostsByUser = (posts: Post[]):{ usersData: any[] } => {
  const arr = posts.reduce((acc, d) => {
    const found = acc.find(a => a.userId === d.userId);
    const value = {id: d.id, title: d.title, body: d.title, };
    if (!found) {
      acc.push({userId: d.userId, name: generateName(), data: [value]});
    } else {
      found.data.push(value);
    }
    return acc;
  }, []);
  return  {usersData: arr};
};
