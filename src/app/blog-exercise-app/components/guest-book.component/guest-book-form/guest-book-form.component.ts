import {Component, Inject, OnInit, Output, EventEmitter} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guest-book-form',
  templateUrl: './guest-book-form.component.html',
  styleUrls: ['./guest-book-form.component.css']
})

export class GuestBookFormComponent {
  public profileForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<GuestBookFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      comment: new FormControl(''),
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.profileForm.value);
  }
}
