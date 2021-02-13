import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SelectionService {

  public selectedUser$ = new Subject();

  constructor() {
  }

  public getSelectedUser(value): void {
    this.selectedUser$.next(value);
  }

}
