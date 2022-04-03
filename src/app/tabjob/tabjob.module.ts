import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

import { TabjobPageRoutingModule } from './tabjob-routing.module';

import { TabjobPage } from './tabjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    TabjobPageRoutingModule,
    RouterModule
  ],
  declarations: [TabjobPage]
})
export class TabjobPageModule {}
