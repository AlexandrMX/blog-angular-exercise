import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {PostsData} from '../../services/posts/posts.model';
import {Store} from "@ngrx/store";
import {selectSelectedUser} from "../state/user.selectors";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  selectedUserData = new BehaviorSubject<PostsData[]>([]);
  onDestroy$ = new Subject();

  constructor(
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectSelectedUser)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((selectedUserData) => {
        this.selectedUserData.next(selectedUserData?.data);
      })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
