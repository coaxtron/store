import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

/*
 It is used for order form
  */

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderform = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<OrderFormComponent>)
     { }

  ngOnInit(): void {
    this.orderform = this.fb.group({
      mobileNumber: [''],
      password: ['']
    })
  }

  checkOut(){
    this.dialogRef.close();
  }

}
