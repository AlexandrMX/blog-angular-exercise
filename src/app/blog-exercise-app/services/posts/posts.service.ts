import {Injectable} from '@angular/core';
import {Post} from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
  }

  public getAllPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => json);
  }

  public getPostsByUser(id: number): any {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

}
