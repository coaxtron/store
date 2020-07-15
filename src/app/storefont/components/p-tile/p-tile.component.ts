import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderFormComponent } from '../order-form/order-form.component';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ServerResponse, ProductModelServer } from '../../models/product.model';

/*
 It is used for product tile for one product
  */

@Component({
  selector: 'app-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.scss']
})
export class PTileComponent implements OnInit {
  @Input() quantity: string;
  @Input() image: string;
  @Input() id: string;
  @Input() stock:string;
  @Input() description: string;
  @Input() price: string;
  @Input() name: string;
  // @Input('products') product: ProductModelServer;
  @Input() inStock : boolean;
  constructor(public dialog: MatDialog,
    ) { }

  ngOnInit(): void {

  }
  orderNow(){
    this.dialog.open(OrderFormComponent,{
      width: '400px'
    });
    // this.dialogRef.close();
  }


}
