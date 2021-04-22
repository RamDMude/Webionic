import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensWearPageRoutingModule } from './mens-wear-routing.module';

import { MensWearPage } from './mens-wear.page';
import { NavbarComponent } from '../navbar/navbar.component' ;
import { FooterComponent } from '../footer/footer.component' ;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensWearPageRoutingModule
  ],
  declarations: [MensWearPage,NavbarComponent,FooterComponent]
})
export class MensWearPageModule {}
