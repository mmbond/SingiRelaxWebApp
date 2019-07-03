import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  today = 0;
  constructor(private userService: UserService, private app: AppComponent, private router: Router) {
    this.today = new Date().getFullYear();
  }

  ngOnInit() { }
  
  getEvent(eventType: any) {
    if (this.app.loggedIn) {
      this.router.navigate(['/events']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
