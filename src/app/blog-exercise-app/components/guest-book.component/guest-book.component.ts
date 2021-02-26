import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserMappedByPosts} from '../../services/posts/posts.model';
import {Observable, Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {GuestBookFormComponent} from './guest-book-form/guest-book-form.component';
import {Store} from "@ngrx/store";
import {selectSelectedUser} from "../state/user.selectors";
import {takeUntil} from "rxjs/operators";
import {addGuest} from "../state/user-actions";

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
export class GuestBookComponent implements OnInit, OnDestroy {
  public userData$: Observable<UserMappedByPosts>;
  private dialogRef: any;
  public guests: Array<Guest> = [];
  private onDestroy$ = new Subject();

  ngOnInit(): void {
    this.store.select(selectSelectedUser)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((item) => {
      this.userData$ = item
    })
  }

  constructor(private store: Store<any>,
              public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(GuestBookFormComponent);
    this.dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe(
      data => {
        if(data) {
          console.log(data)
          this.guests.push(data);
          this.store.dispatch(addGuest({guest: data}));
        }
      }
    );

  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
