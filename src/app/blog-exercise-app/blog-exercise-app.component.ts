import {Component, OnInit} from '@angular/core';
import {PostsService} from './services/posts/posts.service';
import {Post, UserMappedByPosts} from './services/posts/posts.model';
import {mapPostsByUser} from './shared/shared-utils';

@Component({
  selector: 'app-blog-exercise-app',
  templateUrl: './blog-exercise-app.component.html',
  styleUrls: ['./blog-exercise-app.component.css']
})
export class BlogExerciseAppComponent implements OnInit {
  public posts$: Promise<Post[]>;
  public users: UserMappedByPosts[];

  constructor(private postsService: PostsService) {
  }


  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPosts();
    this.posts$.then((posts) => {
      console.log(posts);
      const mappedPosts = mapPostsByUser(posts);
      this.users = mapPostsByUser(posts);
      console.log('mappedPosts', mappedPosts);
    });
  }



}
