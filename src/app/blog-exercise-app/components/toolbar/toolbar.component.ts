import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {UserMappedByPosts} from '../../services/posts/posts.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  userData$ = new Subject<UserMappedByPosts | undefined | null>();
  onDestroy$ = new Subject();

  constructor(private router: Router){
  }

  ngOnInit(): void {
    // this.selectedUserService.selectedUser
    //   .pipe(takeUntil(this.onDestroy$))
    //   .subscribe((item) => {
    //     this.userData$.next(item);
    //   });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
