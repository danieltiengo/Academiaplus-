import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // 
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'endereco-add',
    loadChildren: () => import('./pages/endereco-add/endereco-add.module').then( m => m.EnderecoAddPageModule)
  },
  {
    path: 'endereco-list',
    loadChildren: () => import('./pages/endereco-list/endereco-list.module').then( m => m.EnderecoListPageModule)
  },
  {
    path: 'user-perfil',
    loadChildren: () => import('./pages/user-perfil/user-perfil.module').then( m => m.UserPerfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'apresentacao',
    loadChildren: () => import('./pages/apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },  {
    path: 'ficha-de-treino',
    loadChildren: () => import('./ficha-de-treino/ficha-de-treino.module').then( m => m.FichaDeTreinoPageModule)
  },
  {
    path: 'check-in',
    loadChildren: () => import('./check-in/check-in.module').then( m => m.CheckInPageModule)
  },
  {
    path: 'recordes-pessoais',
    loadChildren: () => import('./recordes-pessoais/recordes-pessoais.module').then( m => m.RecordesPessoaisPageModule)
  },
  {
    path: 'exercicios',
    loadChildren: () => import('./exercicios/exercicios.module').then( m => m.ExerciciosPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
