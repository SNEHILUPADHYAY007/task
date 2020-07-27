import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchMakingPageRoutingModule } from './match-making-routing.module';

import { MatchMakingPage } from './match-making.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchMakingPageRoutingModule
  ],
  declarations: [MatchMakingPage]
})
export class MatchMakingPageModule {}
