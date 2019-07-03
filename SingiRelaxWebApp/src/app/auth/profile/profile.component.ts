import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { UserService, User } from '../user.service';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  hide = true;
  @ViewChild('f') formValues;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    var user: User = this.userService.getActiveUser();
    if (form.value.email != null && form.value.email != "") {
      user.email = form.value.email;
    }
    if (form.value.phone != null && form.value.phone != "") {
      user.phone = form.value.phone;
    }
    if (form.value.password != null && form.value.password != "") {
      user.password = form.value.password;
    }
    if (form.value.firstName != null && form.value.firstName != "") {
      user.firstName = form.value.firstName;
    }
    if (form.value.lastName != null && form.value.lastName != "") {
      user.lastName = form.value.lastName;
    }
    if (form.value.address != null && form.value.address != "") {
      user.address = form.value.address;
    }
    if (form.value.interest != null && form.value.interest != "") {
      user.interests = form.value.interest;
    }
    this.userService.updateUser(user);
    this.isEditing = false;
    this.formValues.resetForm();
  }

}