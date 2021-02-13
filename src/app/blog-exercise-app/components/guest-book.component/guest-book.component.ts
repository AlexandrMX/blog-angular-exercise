import {Component, OnInit, ViewChild} from '@angular/core';
import {mapPostsByUser} from '../../shared/shared-utils';
import {Post, UserMappedByPosts} from '../../services/posts/posts.model';
import {PostsService} from '../../services/posts/posts.service';
import {SelectedUserService} from '../../services/selected-user-service/selected-user.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {GuestBookFormComponent} from './guest-book-form/guest-book-form.component';
interface Guest {
  firstName: string;
  lastName: string;
  comment: string;
}
@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {
  public posts$: Promise<Post[]>;
  public users: UserMappedByPosts[];
  public userData$: Observable<UserMappedByPosts>;
  dialogRef: any;
  public guests: Array<Guest> = [];
  constructor(private postsService: PostsService,
              private selectedUserData: SelectedUserService,
              public dialog: MatDialog) {
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(GuestBookFormComponent, {
      data: {
        animal: 'panda'
      }
    });
    this.dialogRef.afterClosed().subscribe(
      data => {
        console.log('Dialog output:', data)
        this.guests.push(data);
      }
    );

  }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPosts();
    this.posts$.then((posts) => {
      console.log(posts);
      const mappedPosts = mapPostsByUser(posts);
      this.users = mapPostsByUser(posts);

      this.userData$ = this.selectedUserData.selectedUser;
      this.userData$.subscribe((item) => {
        console.log(item);
      });
      console.log('mappedPosts', mappedPosts);
    });
  }

}
