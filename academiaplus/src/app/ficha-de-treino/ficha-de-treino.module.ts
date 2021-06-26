import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaDeTreinoPageRoutingModule } from './ficha-de-treino-routing.module';

import { FichaDeTreinoPage } from './ficha-de-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaDeTreinoPageRoutingModule
  ],
  declarations: [FichaDeTreinoPage]
})
export class FichaDeTreinoPageModule {}
