import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookvuePageRoutingModule } from './ebookvue-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { EbookvuePage } from './ebookvue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,

    EbookvuePageRoutingModule
  ],
  declarations: [EbookvuePage]
})
export class EbookvuePageModule {}
