import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitacoesPageRoutingModule } from './solicitacoes-routing.module';

import { SolicitacoesPage } from './solicitacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitacoesPageRoutingModule
  ],
  declarations: [SolicitacoesPage]
})
export class SolicitacoesPageModule {}
