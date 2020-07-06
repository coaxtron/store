import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [OrdersComponent, OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class OrdersModule { }
