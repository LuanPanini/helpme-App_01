import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabnotifPageRoutingModule } from './tabnotif-routing.module';

import { TabnotifPage } from './tabnotif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabnotifPageRoutingModule,
    ExploreContainerComponentModule,
    RouterModule

  ],
  declarations: [TabnotifPage]
})
export class TabnotifPageModule {}
