import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { EventService, Event } from 'src/app/events/event.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/auth/user.service';
import { RateComponent } from '../rate/rate.component';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit, AfterViewInit {

  displayedColumns = ["name", "dateFrom", "dateTo", "location", "rating", "attendance", "eventType", "action"];
  finishedEventSource = new MatTableDataSource<Event>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private eventService: EventService, private userService: UserService, private dialog: MatDialog, private router: Router, private AppComponent: AppComponent) { }

  ngOnInit() {
    if (this.AppComponent.loggedIn == false) {
      this.router.navigate(['']);
    }
    this.finishedEventSource.data = this.eventService.getFinishedEvents();
  }

  ngAfterViewInit() {
    this.finishedEventSource.sort = this.sort;
    this.finishedEventSource.paginator = this.paginator;
  }

  onRate(id: number) {
    const dialogRef = this.dialog.open(RateComponent, { data: id });
  }

  applied(id: number) {
    return this.userService.getActiveUser().events.some(event => event.id == id)
  }

}
