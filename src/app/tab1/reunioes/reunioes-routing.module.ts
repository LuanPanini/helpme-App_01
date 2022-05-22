import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReunioesPage } from './reunioes.page';

const routes: Routes = [
  {
    path: '',
    component: ReunioesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunioesPageRoutingModule {}
