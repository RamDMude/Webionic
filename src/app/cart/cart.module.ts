import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { NavbarComponent } from '../navbar/navbar.component' ;
import { FooterComponent } from '../footer/footer.component' ;
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CartPage,NavbarComponent,FooterComponent]
})
export class CartPageModule {}
