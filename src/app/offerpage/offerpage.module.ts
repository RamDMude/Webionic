import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferpagePageRoutingModule } from './offerpage-routing.module';

import { OfferpagePage } from './offerpage.page';
import { NavbarComponent } from '../navbar/navbar.component' ;
import { FooterComponent } from '../footer/footer.component' ;
import { NgxWheelModule } from 'ngx-wheel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferpagePageRoutingModule, NgxWheelModule
  ],
  declarations: [OfferpagePage ,NavbarComponent,FooterComponent]
})
export class OfferpagePageModule {}
