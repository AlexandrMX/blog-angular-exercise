import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectedUserService} from '../../services/selected-user-service/selected-user.service';
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

  constructor(
    private router: Router,
    private selectedUserService: SelectedUserService) {
  }

  userData$ = new Subject<UserMappedByPosts | undefined | null>();
  onDestroy$ = new Subject();

  public toGuestBook(): void {
    console.log('click')
    this.router.navigateByUrl('guestBook').then(r => {
      // Do somethibg
    });
  }

  ngOnInit(): void {
    this.selectedUserService.selectedUser
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((item) => {
        console.log('!!!!!!!!!#@#####', item);
        this.userData$.next(item);

      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
