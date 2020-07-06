import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.scss']
})
export class PTileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  orderNow(){
    this.dialog.open(OrderFormComponent,{
      width: '400px'
    });
    // this.dialogRef.close();
  }
}
