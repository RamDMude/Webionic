import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';
import { NavbarComponent } from '../navbar/navbar.component' ;
import { FooterComponent } from '../footer/footer.component' ;

import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule
  ],
  declarations: [HomepagePage, NavbarComponent ,FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepagePageModule {}
