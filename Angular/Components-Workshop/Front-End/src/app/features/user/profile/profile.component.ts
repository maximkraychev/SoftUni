import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isOnEditMode: boolean = false;
  mockUser = {
    username: 'Johny',
    email: 'john.doe@gmail.com',
    tel: '885888888'
  }

  @ViewChild('editForm') editForm!: NgForm;

  save() {
    if (this.editForm.valid) {
      this.mockUser = { ...this.editForm.form.value };
      this.toggleView();
    } else {
      this.editForm.form.markAllAsTouched();
    }
  }

  toggleView() {
    this.isOnEditMode = !this.isOnEditMode;
  }
}
