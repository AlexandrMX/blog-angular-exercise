import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GuestBookFormComponent} from './guest-book-form.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MaterialModule} from "../../../../material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

describe('GuestBookFormComponent', () => {
  let component: GuestBookFormComponent;
  let fixture: ComponentFixture<GuestBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestBookFormComponent],
      imports: [MatDialogModule, MaterialModule, BrowserAnimationsModule, ReactiveFormsModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Guest-book-form component', () => {
    expect(component).toBeTruthy();
  });
});
