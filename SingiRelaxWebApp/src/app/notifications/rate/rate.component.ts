import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, Event } from 'src/app/events/event.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  rating: number = 1;
  rateFormGroup: FormGroup;

  constructor(private dialogRef: MatDialogRef<RateComponent>, @Inject(MAT_DIALOG_DATA) private id: number, private eventService: EventService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rateFormGroup = this._formBuilder.group({
      rateFF: ['', Validators.required]
    });
  }

  close() {
    this.dialogRef.close();
  }

  final() {
    if (this.rateFormGroup.value.rateFF == undefined) {
      this.close();
    } else {
      var finalEvent: Event = this.eventService.getEvent(this.id);
      this.rating = parseInt(this.rateFormGroup.value.rateFF);
      if (finalEvent.rating == 0) {
        finalEvent.rating += this.rating;
      } else {
        finalEvent.rating = (this.rating + finalEvent.rating) / 2;
      }
      this.eventService.updateEvent(finalEvent);
      this.close();
    }
  }

}
