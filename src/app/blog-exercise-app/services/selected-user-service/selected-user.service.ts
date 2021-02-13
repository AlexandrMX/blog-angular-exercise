import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {UserMappedByPosts} from '../posts/posts.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {
  private selectedUser$: Subject<UserMappedByPosts> = new Subject();

  public get selectedUser(): Observable<UserMappedByPosts>{
    return this.selectedUser$.asObservable();
  }
  constructor() {
  }

  setSelectedUser(selectedUser: UserMappedByPosts): void{
    this.selectedUser$.next(selectedUser);
  }
}
