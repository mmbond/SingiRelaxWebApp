import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { EventService } from '../events/event.service';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  hiddenInterested = false;
  hiddenFinished = false;
  hiddenApplied = false;

  constructor(private router: Router, private AppComponent: AppComponent, private eventService: EventService, private userService: UserService) { }

  ngOnInit() {
    if (this.AppComponent.loggedIn == false) {
      this.router.navigate(['/']);
    }
  }

  onInterestedBadge() {
    this.hiddenInterested = true;
  }

  onFinishedBadge() {
    this.hiddenFinished = true;
  }

  onAppliedBadge() {
    this.hiddenApplied = true;
  }

  interestedEvents() {
    var value = this.eventService.getInterestingEvents().length;
    if (value > 0) {
      return value;
    } else {
      this.hiddenInterested = true;
    }
  }

  appliedEvents() {
    var value = this.userService.appliedEvents().length;
    if (value > 0) {
      return value;
    } else {
      this.hiddenApplied = true;
    }
  }

  finishedEvents() {
    var value = this.eventService.getFinishedEvents().length;
    if (value > 0) {
      return value;
    } else {
      this.hiddenFinished = true;
    }
  }
}
