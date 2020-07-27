import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetMakerPage } from './budget-maker.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetMakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetMakerPageRoutingModule {}
