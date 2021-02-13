import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogExerciseAppComponent} from './blog-exercise-app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {PostsService} from './services/posts/posts.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {GuestBookComponent} from './components/guest-book.component/guest-book.component';
import {GuestBookFormComponent} from './components/guest-book.component/guest-book-form/guest-book-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MainComponent} from './components/main/main.component';

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
    MainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [PostsService]
})
export class BlogExerciseAppModule {
}
