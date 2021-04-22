import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateaccountPageRoutingModule } from './createaccount-routing.module';

import { CreateaccountPage } from './createaccount.page';
import { NavbarComponent } from '../navbar/navbar.component' ;
import { FooterComponent } from '../footer/footer.component' ;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateaccountPageRoutingModule
  ],
  declarations: [CreateaccountPage,NavbarComponent,FooterComponent]
})
export class CreateaccountPageModule {}
