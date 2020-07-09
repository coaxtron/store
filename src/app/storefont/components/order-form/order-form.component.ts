import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    productname: new FormControl(''),
    quantity: new FormControl(''),
    name: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<OrderFormComponent>)
     { }

  ngOnInit(): void {
    this.orderform = this.fb.group({
      productname: ['',Validators.required],
      quantity: ['',Validators.required],
      name: ['',Validators.required],
      mobile: ['',Validators.required],
      email: ['',Validators.required],
      address: ['',Validators.required]
    })
  }

  checkOut(){
    this.dialogRef.close();
  }
  save(){
    console.log(this.orderform.value)
  }
}
