import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordesPessoaisPageRoutingModule } from './recordes-pessoais-routing.module';

import { RecordesPessoaisPage } from './recordes-pessoais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordesPessoaisPageRoutingModule
  ],
  declarations: [RecordesPessoaisPage]
})
export class RecordesPessoaisPageModule {}
