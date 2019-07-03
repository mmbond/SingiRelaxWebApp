import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { EventService, Event } from './event.service';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { JoinEventComponent } from './join-event/join-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  displayedColumns = ["name", "dateFrom", "dateTo", "location", "rating", "attendance", "eventType", "action"];
  eventSource = new MatTableDataSource<Event>();
  eventFilter = { name: '', location: '', rating: '', attendance: '', type: '' }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private eventService: EventService, private userService: UserService, private router: Router, private AppComponent: AppComponent, private _formBuilder: FormBuilder, private dialog: MatDialog) { }

  doFilter(filterValue: string, element: string) {
    switch (element) {
      case "attendance":
        this.eventFilter.attendance = filterValue;
        break;
      case "location":
        this.eventFilter.location = filterValue;
        break;
      case "rating":
        this.eventFilter.rating = filterValue;
        break;
      case "name":
        this.eventFilter.name = filterValue;
        break;
      case "type":
        this.eventFilter.type = filterValue;
        break;
    }
    this.eventSource.filter = JSON.stringify(this.eventFilter);
  }

  private customFilter(event: Event, filter: string): boolean {
    var search = JSON.parse(filter);
    return event.location.trim().toLowerCase().includes(search.location.trim().toLowerCase()) &&
      event.name.trim().toLowerCase().includes(search.name.trim().toLowerCase()) &&
      event.rating.toString().trim().toLowerCase().includes(search.rating.trim().toLowerCase()) &&
      event.attendance.toString().trim().toLowerCase().includes(search.attendance.trim().toLowerCase()) &&
      event.eventType.toString().trim().toLowerCase().includes(search.type.trim().toLowerCase());
  }

  ngOnInit() {
    if (this.AppComponent.loggedIn == false) {
      this.router.navigate(['']);
    }
    this.eventSource.filterPredicate = (event: Event, filter: string) => this.customFilter(event, filter.trim().toLowerCase());
    this.eventSource.data = this.eventService.getNewEvents();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: []
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: []
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: []
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: []
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: []
    });
  }

  joinEvent(id: number) {
    let event: Event = this.eventService.getEvent(id);
    this.userService.getActiveUser().events.push(event);
    this.userService.updateUser(this.userService.getActiveUser());
    this.AppComponent.hiddenInterested = false;
    this.AppComponent.interestedEvents(1);
    const dialogRef = this.dialog.open(JoinEventComponent);
  }

  editEvent(id: number) {
    this.eventService.setActiveEvent(this.eventService.getEvent(id));
    const dialogRef = this.dialog.open(EditEventComponent);
  }

  ngAfterViewInit() {
    this.eventSource.sort = this.sort;
    this.eventSource.paginator = this.paginator;
  }
}