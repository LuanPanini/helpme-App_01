import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReunioesPageRoutingModule } from './reunioes-routing.module';

import { ReunioesPage } from './reunioes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReunioesPageRoutingModule
  ],
  declarations: [ReunioesPage]
})
export class ReunioesPageModule {}
