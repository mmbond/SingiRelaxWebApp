import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  errorExists = false;
  errorText = '';

  constructor(private userService: UserService, private router: Router, private appComponent: AppComponent, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);
    if (!user) {
      this.errorExists = true;
      this.errorText = 'Не постоји корисник са датим емајлом ' + email;
      return;
    }
    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = 'Погрешна лозинка';
      return;
    }
    this.errorExists = false;
    this.appComponent.setLoggedIn(true);
    this.userService.setActiveUser(user);
    const dialogRef = this.dialog.open(SuccessComponent); 
  }
}
