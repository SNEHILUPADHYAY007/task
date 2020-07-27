import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayStudentPageRoutingModule } from './display-student-routing.module';

import { DisplayStudentPage } from './display-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayStudentPageRoutingModule
  ],
  declarations: [DisplayStudentPage]
})
export class DisplayStudentPageModule {}
