import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    password: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<SingupComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onLoginClick() {
    this.dialog.open(LoginComponent,{
      width: '400px'
    });
    this.dialogRef.close();
  }
}
