import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetMakerPageRoutingModule } from './budget-maker-routing.module';

import { BudgetMakerPage } from './budget-maker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetMakerPageRoutingModule
  ],
  declarations: [BudgetMakerPage]
})
export class BudgetMakerPageModule {}
