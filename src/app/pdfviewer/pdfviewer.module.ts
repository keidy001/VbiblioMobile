import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { PdfviewerPageRoutingModule } from './pdfviewer-routing.module';

import { PdfviewerPage } from './pdfviewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    PdfviewerPageRoutingModule
  ],
  declarations: [PdfviewerPage]
})
export class PdfviewerPageModule {}
