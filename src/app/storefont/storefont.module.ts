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
import { OrderService } from '../storefont/services/order.service';
import { ProductService } from '../storefont/services/product.service';
import { ProductFullViewComponent } from './components/product-full-view/product-full-view.component';
@NgModule({
  declarations: [HomeComponent, SidenavComponent, HeaderComponent, PTileComponent, ProductViewComponent, OrderFormComponent, ProductFullViewComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    AuthModule,
    OrdersModule,
    MaterialModule
  ],
  exports:[HeaderComponent,SidenavComponent],
  providers:[OrderService,ProductService]
})
export class StorefontModule { }
