import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule, Routes} from '@angular/router';
import {MatListModule} from '@angular/material/list';


const routes: Routes = [
  { path: 'blog-exercise-app', loadChildren: () => import('./blog-exercise-app/blog-exercise-app.module')
      .then(module => module.BlogExerciseAppModule) },
  { path: '**', redirectTo: 'blog-exercise-app' },
];
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}, {}),
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MatSidenavModule,
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
