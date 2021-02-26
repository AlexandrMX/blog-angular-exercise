import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule, Routes} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {EffectsModule} from "@ngrx/effects";


const routes: Routes = [
  {
    path: 'blog-exercise-app', loadChildren: () => import('./blog-exercise-app/blog-exercise-app.module')
      .then(module => module.BlogExerciseAppModule)
  },
  {path: '**', redirectTo: 'blog-exercise-app'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
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
