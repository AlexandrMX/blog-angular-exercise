import {Injectable} from '@angular/core';
import {Post} from './posts.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) {
  }
  private url = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }

}
