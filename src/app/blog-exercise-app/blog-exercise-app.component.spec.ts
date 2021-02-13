import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExerciseAppComponent } from './blog-exercise-app.component';

describe('BlogExerciseAppComponent', () => {
  let component: BlogExerciseAppComponent;
  let fixture: ComponentFixture<BlogExerciseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogExerciseAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogExerciseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
