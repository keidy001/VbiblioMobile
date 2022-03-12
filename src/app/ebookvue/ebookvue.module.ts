import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookvuePageRoutingModule } from './ebookvue-routing.module';

import { EbookvuePage } from './ebookvue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    EbookvuePageRoutingModule
  ],
  declarations: [EbookvuePage]
})
export class EbookvuePageModule {}
