import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SingupComponent } from '../singup/singup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

 /*
 It is used for login page
  */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private fb: FormBuilder,public dialog: MatDialog,private dialogRef:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobileNumber: [''],
      password: ['']
    })
  }

  openSignup() {
    this.dialog.open(SingupComponent,{
      width: '400px'
    });
    this.dialogRef.close();
  }

}
