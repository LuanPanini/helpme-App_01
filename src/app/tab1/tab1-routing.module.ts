import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },  {
    path: 'solicitacoes',
    loadChildren: () => import('./solicitacoes/solicitacoes.module').then( m => m.SolicitacoesPageModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./projetos/projetos.module').then( m => m.ProjetosPageModule)
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./pagamentos/pagamentos.module').then( m => m.PagamentosPageModule)
  },
  {
    path: 'reunioes',
    loadChildren: () => import('./reunioes/reunioes.module').then( m => m.ReunioesPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./suporte/suporte.module').then( m => m.SuportePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
