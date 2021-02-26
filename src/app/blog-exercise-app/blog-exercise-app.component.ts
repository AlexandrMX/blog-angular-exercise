import {Component, OnInit} from '@angular/core';
import {PostsService} from './services/posts/posts.service';
import {Store} from "@ngrx/store";
import {loadUserDataAction} from "./components/state/user-actions";

@Component({
  selector: 'app-blog-exercise-app',
  templateUrl: './blog-exercise-app.component.html',
  styleUrls: ['./blog-exercise-app.component.css']
})
export class BlogExerciseAppComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadUserDataAction());
  }
}
