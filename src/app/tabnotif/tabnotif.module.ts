import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabnotifPageRoutingModule } from './tabnotif-routing.module';

import { TabnotifPage } from './tabnotif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnotifPageRoutingModule
  ],
  declarations: [TabnotifPage]
})
export class TabnotifPageModule {}
