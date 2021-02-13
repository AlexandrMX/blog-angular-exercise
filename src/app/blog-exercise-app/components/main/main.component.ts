import {Component, OnInit} from '@angular/core';
import {SelectedUserService} from '../../services/selected-user-service/selected-user.service';
import {BehaviorSubject, Observable, Subscribable, Subscription} from 'rxjs';
import {PostsData, UserMappedByPosts} from '../../services/posts/posts.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  selectedUserData = new BehaviorSubject<PostsData[]>([]);

  constructor(
    private selectedUserService: SelectedUserService,
  ) {
  }

  ngOnInit(): void {
    this.selectedUserService.selectedUser.subscribe((item) => {
      this.selectedUserData.next(item.data);
    });
  }

}
