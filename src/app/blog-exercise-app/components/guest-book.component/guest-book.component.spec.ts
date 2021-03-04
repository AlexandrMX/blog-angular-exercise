import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GuestBookComponent} from "./guest-book.component";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";
import {selectSelectedUser} from "../state/user.selectors";
import {initialState} from "../state/user-reducer";
import {selectedUserState} from "../state/user.mocks";
import {UserState} from "../state/user.model";

describe('Guest-book', () => {
  let component: GuestBookComponent;
  let fixture: ComponentFixture<GuestBookComponent>;
  let store: MockStore<UserState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestBookComponent],
      imports: [MatDialogModule, RouterModule],
      providers: [
        provideMockStore({initialState}),
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectSelectedUser, {selectedUser: selectedUserState});
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Guest-book component', () => {
    expect(component).toBeTruthy();
  });
});
