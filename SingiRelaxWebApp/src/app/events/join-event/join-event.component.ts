import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.css']
})
export class JoinEventComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<JoinEventComponent>) { }

  ngOnInit() { }

  onClick() {
    this.dialogRef.close();
  }
}