import {Injectable} from '@angular/core';
import {Post} from './posts.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    // private http: HttpClient,
  ) {
  }
  private url = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api

  // getAllPost(): Observable<Post[]> {
  //   return this.http.get<Post[]>(this.url)
  // }

  public getAllPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => json);
  }

  // public getPostsByUser(id: number): any {
  //   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

}
