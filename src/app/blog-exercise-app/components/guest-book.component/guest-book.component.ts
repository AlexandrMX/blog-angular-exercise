import {Component, OnInit} from '@angular/core';
import {UserMappedByPosts} from '../../services/posts/posts.model';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {GuestBookFormComponent} from './guest-book-form/guest-book-form.component';
import {Store} from "@ngrx/store";
import {selectSelectedUser} from "../state/user.selectors";

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
  public userData$: Observable<UserMappedByPosts>;
  dialogRef: any;
  public guests: Array<Guest> = [];

  constructor(private store: Store<any>,
              public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(GuestBookFormComponent);
    this.dialogRef.afterClosed().subscribe(
      data => {
        this.guests.push(data);
      }
    );

  }

  ngOnInit(): void {
    this.store.select(selectSelectedUser).subscribe((item) => {
      this.userData$ = item
    })
  }
}
