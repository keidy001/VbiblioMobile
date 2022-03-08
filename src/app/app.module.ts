import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PdfviewerPageModule } from './pdfviewer/pdfviewer.module';
import { Media } from '@ionic-native/media/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PdfviewerPageModule,
     


  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, Media, // <- plugin Media
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
  File,
  FileTransfer,
  DocumentViewer,
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
