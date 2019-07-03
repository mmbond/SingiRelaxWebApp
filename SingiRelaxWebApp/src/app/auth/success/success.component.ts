import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SuccessComponent>, private router: Router) { }

  ngOnInit() { }

  onClick() {
    this.dialogRef.close();
    this.router.navigate(['']);
  }

}
