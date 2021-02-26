import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogExerciseAppComponent} from './blog-exercise-app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {PostsService} from './services/posts/posts.service';
import {GuestBookComponent} from './components/guest-book.component/guest-book.component';
import {GuestBookFormComponent} from './components/guest-book.component/guest-book-form/guest-book-form.component';
import {MainComponent} from './components/main/main.component';
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./components/state/user-reducer";
import {HttpClientModule} from '@angular/common/http';
import {USER_STATE} from "./components/state/user.model";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./components/state/user-effects";

const routes: Routes = [
  {
    path: '', component: BlogExerciseAppComponent,
    children: [
      {path: 'guest-book', component: GuestBookComponent},
    ]
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    BlogExerciseAppComponent,
    ToolbarComponent,
    GuestBookComponent,
    SidenavComponent,
    GuestBookFormComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(USER_STATE, userReducer),
  ],
  providers: [PostsService]
})
export class BlogExerciseAppModule {
}
