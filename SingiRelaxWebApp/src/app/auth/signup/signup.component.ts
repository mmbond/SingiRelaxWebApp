import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from '../success/success.component';
import { AppComponent } from 'src/app/app.component';
import { Event } from 'src/app/events/event.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  errorExists = false;
  errorText = '';

  constructor(private userService: UserService, private router: Router, private dialog: MatDialog, private appComponent: AppComponent) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    if (!this.userService.getUser(form.value.email)) {
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.email,
        form.value.password,
        form.value.firstName,
        form.value.lastName,
        new Date(),
        'POSETILAC',
        form.value.interest,
        form.value.phone,
        form.value.address);
        newUser.events = new Array<Event>();
      this.appComponent.setLoggedIn(true);
      this.userService.setActiveUser(newUser);
      const dialogRef = this.dialog.open(SuccessComponent);
    } else {
      this.errorExists = true;
      this.errorText = 'Корисник са овим подацима већ постоји.';
    }

  }
}
