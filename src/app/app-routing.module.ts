import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'tab1',
  loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
},
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
{
  path: 'tabjob',
  loadChildren: () => import('./tabjob/tabjob.module').then( m => m.TabjobPageModule)
},
{
  path: 'tabnotif',
  loadChildren: () => import('./tabnotif/tabnotif.module').then( m => m.TabnotifPageModule)
},
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'tweet',
    loadChildren: () => import('./components/shared-components.module').then( m => m.SharedComponentsModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then( m => m.ConversationPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
