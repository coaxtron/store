import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

/*
 It is used for singup page
  */

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
  constructor(public fb : FormBuilder,public dialogRef: MatDialogRef<SingupComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  onLoginClick() {
    this.dialog.open(LoginComponent,{
      width: '400px'
    });
    this.dialogRef.close();
  }
  save(){
    console.log(this.signupForm.value);
  }
}
