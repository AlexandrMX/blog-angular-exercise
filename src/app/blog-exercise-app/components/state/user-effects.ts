import {Actions} from "@ngrx/effects";
import {PostsService} from "../../services/posts/posts.service";
import {SelectedUserService} from "../../services/selected-user-service/selected-user.service";

// export class UserEffects {
//   constructor(
    // private actions$: Actions,
    // private postsService: PostsService,
    // private selectedUserService: SelectedUserService
  // ) {
  // }

  // setSelectedUser = createEffect(() => {
  //   this.actions$.pipe(
  //     ofType(setSelectedUser),
  //     switchMap(() =>
  //       this.selectedUserService.selectedUser
  //         .pipe(
  //           map((res) => {
  //             return selectedUserSett({
  //               selectedUser: res
  //             })
  //
  //           })
  //         )))
  // })


  // loadUserData = createEffect(() => {
  //   this.actions$.pipe(
  //     ofType(loadUserDataAction),
  //     switchMap(() => {
  //       this.postsService.getAllPost()
  //         .pipe(
  //           map((res, index) => {
  //             console.log('%%%%%%%%', res)
  //             const mappedPosts = mapPostsByUser(res);
  //             return userDataLoaded({
  //               usersData: [{
  //                 userId: mappedPosts[index].userId,
  //                 name: null,
  //                 data: []
  //               }]
  //             })
  //           }))
  //     }))
  // }
