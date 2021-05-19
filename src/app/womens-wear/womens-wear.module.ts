import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomensWearPageRoutingModule } from './womens-wear-routing.module';

import { WomensWearPage } from './womens-wear.page';
import { NavbarComponent } from '../navbar/navbar.component' ;
import { FooterComponent } from '../footer/footer.component' ;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomensWearPageRoutingModule
  ],
  declarations: [WomensWearPage,NavbarComponent,FooterComponent]
})
export class WomensWearPageModule {}
