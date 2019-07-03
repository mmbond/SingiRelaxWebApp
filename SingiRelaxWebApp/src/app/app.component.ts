import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EventService } from './events/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'relaksacija-app';
  loggedIn: boolean = false;
  hiddenInterested = false;

  constructor(private userService: UserService, private eventService: EventService, private dialog: MatDialog, private router: Router) { }

  public setLoggedIn(login: boolean) {
    this.loggedIn = login;
  }

  public signOut() {
    this.userService.setActiveUser(null);
    this.loggedIn = false;
    this.hiddenInterested = false;
    this.router.navigate(['']);
  }

  public interestedEvents(badges: number) {
    if (badges !=0 ) {
      return badges;
    }
    var value = this.eventService.getFinishedEvents().length+this.eventService.getInterestingEvents().length+this.userService.appliedEvents().length;
    if (value > 0) {
      return value;
    } else {
      this.hiddenInterested = true;
    }
  }

  public onInterestedBadge(){
    this.hiddenInterested=true;
  }

}
