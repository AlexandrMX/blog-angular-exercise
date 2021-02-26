import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PostsService} from "../../services/posts/posts.service";

import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {Injectable} from "@angular/core";
import {loadUserDataAction, usersDataLoadedSuccessAction} from "./user-actions";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
  ) {
  }

  loadUserDataEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserDataAction),
      mergeMap(() => this.postsService.getAllPosts()
        .pipe(
          map(posts => {
            return usersDataLoadedSuccessAction({userData: posts})
          }),
          catchError(() => EMPTY)
        ))
    );
  })
}
