import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaDeTreinoPage } from './ficha-de-treino.page';

const routes: Routes = [
  {
    path: '',
    component: FichaDeTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaDeTreinoPageRoutingModule {}
