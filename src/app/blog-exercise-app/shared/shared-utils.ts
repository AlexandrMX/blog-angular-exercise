import {Post} from '../services/posts/posts.model';
import {generateName} from './name-generator/name-generator';

export const mapPostsByUser = (posts: Post[]) => {
  return posts.reduce((acc, d) => {
    const found = acc.find(a => a.userId === d.userId);
    const value = {id: d.id, title: d.title, body: d.title, };
    if (!found) {
      acc.push({userId: d.userId, name: generateName(), data: [value]});
    } else {
      found.data.push(value);
    }
    return acc;
  }, []);
};
