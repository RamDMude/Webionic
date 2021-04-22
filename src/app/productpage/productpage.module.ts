import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductpagePageRoutingModule } from './productpage-routing.module';

import { ProductpagePage } from './productpage.page';
import { NavbarComponent } from '../navbar/navbar.component' ;
import { FooterComponent } from '../footer/footer.component' ;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductpagePageRoutingModule
  ],
  declarations: [ProductpagePage,NavbarComponent,FooterComponent]
})
export class ProductpagePageModule {}
