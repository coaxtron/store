import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreRoutingModule } from './store-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthModule } from '../auth/auth.module';
import { PTileComponent } from './components/p-tile/p-tile.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import {MatCardModule} from '@angular/material/card';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrdersModule } from '../orders/orders.module';
@NgModule({
  declarations: [HomeComponent, SidenavComponent, HeaderComponent, PTileComponent, ProductViewComponent, OrderFormComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    AuthModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    OrdersModule,
  ],
  exports:[HeaderComponent,SidenavComponent]
})
export class StorefontModule { }
