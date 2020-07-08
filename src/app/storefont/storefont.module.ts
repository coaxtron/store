import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreRoutingModule } from './store-routing.module';
import { AuthModule } from '../auth/auth.module';
import { PTileComponent } from './components/p-tile/p-tile.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrdersModule } from '../orders/orders.module';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [HomeComponent, SidenavComponent, HeaderComponent, PTileComponent, ProductViewComponent, OrderFormComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    AuthModule,
    OrdersModule,
    MaterialModule
  ],
  exports:[HeaderComponent,SidenavComponent]
})
export class StorefontModule { }
