import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MainComponent} from './main.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {selectedUserState} from "../state/user.mocks";
import {initialState} from "../state/user-reducer";
import {selectSelectedUser} from "../state/user.selectors";
import {UserState} from "../state/user.model";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let store: MockStore<UserState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [
        provideMockStore({initialState}),
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectSelectedUser,{selectedUser: selectedUserState});
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Main component', () => {
    expect(component).toBeTruthy();
  });
});
