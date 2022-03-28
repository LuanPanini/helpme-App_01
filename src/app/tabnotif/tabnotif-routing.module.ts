import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnotifPage } from './tabnotif.page';

const routes: Routes = [
  {
    path: '',
    component: TabnotifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnotifPageRoutingModule {}
