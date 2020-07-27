import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayStudentPage } from './display-student.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayStudentPageRoutingModule {}
