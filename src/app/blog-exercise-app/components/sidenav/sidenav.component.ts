import {Component, OnInit, Input} from '@angular/core';
import {UserMappedByPosts} from '../../services/posts/posts.model';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {setSelectedUser} from "../state/user-actions";
import {selectPostsByUser} from "../state/user.selectors";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input()
  userData: UserMappedByPosts[];
  public users$: Observable<UserMappedByPosts[]>;
  constructor(
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.store.select(selectPostsByUser);
  }

  public click(value: UserMappedByPosts): void {
    this.store.dispatch(setSelectedUser({selectedUser: value}));
  }
}
