import { Component, OnInit } from '@angular/core';
import { EventService, Event } from 'src/app/events/event.service';
import { UserService } from 'src/app/auth/user.service';
import { MatDialog } from '@angular/material';
import { JoinEventComponent } from 'src/app/events/join-event/join-event.component';
import { AppliedComponent } from '../applied/applied.component';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.css']
})
export class InterestedComponent implements OnInit {

  constructor(private eventService: EventService, private userService: UserService, private dialog: MatDialog) { }

  interestedEvents: Array<Event>;

  ngOnInit() {
    this.interestedEvents = this.eventService.getInterestingEvents();
  }

  getInterestingEvents() {
    return this.eventService.getInterestingEvents();
  }

  joinEvent(id: number) {
    let event: Event = this.eventService.getEvent(id);
    this.userService.getActiveUser().events.push(event);
    const dialogRef = this.dialog.open(JoinEventComponent);
  }
}
