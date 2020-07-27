import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'main-page',pathMatch: 'full'},
  {path: 'display-student/123',loadChildren: () => import('./pages/display-student/display-student.module').then( m => m.DisplayStudentPageModule)},
  {path: 'add-student',loadChildren: () => import('./pages/add-student/add-student.module').then( m => m.AddStudentPageModule)},
  {path: 'main-page',loadChildren: () => import('./pages/main-page/main-page.module').then( m => m.MainPagePageModule)},
  {path: 'match-making',loadChildren: () => import('./pages/match-making/match-making.module').then( m => m.MatchMakingPageModule)},
  {path: 'contact-details',loadChildren: () => import('./pages/contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)},
  {path: 'budget-maker',loadChildren: () => import('./pages/budget-maker/budget-maker.module').then( m => m.BudgetMakerPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
