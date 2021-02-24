import {Component, OnInit, Input} from '@angular/core';
import {UserMappedByPosts} from '../../services/posts/posts.model';
import {Subject} from 'rxjs';
import {SelectedUserService} from '../../services/selected-user-service/selected-user.service';
import {Store} from "@ngrx/store";
import {setSelectedUser} from "../state/user-actions";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input()
  userData: UserMappedByPosts[];
  public selectedUser$ = new Subject();

  constructor(
    private selectedUserData: SelectedUserService,
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
  }

  public click(value: UserMappedByPosts): void {
    this.selectedUser$.next(value);
    this.store.dispatch(setSelectedUser({selectedUser: value}));
  }
}
