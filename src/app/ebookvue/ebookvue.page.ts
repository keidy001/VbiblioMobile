import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ebookvue',
  templateUrl: './ebookvue.page.html',
  styleUrls: ['./ebookvue.page.scss'],
})
export class EbookvuePage implements OnInit {

  constructor(private document: DocumentViewer, private navCtrl :NavController, private file :File, private transfer : FileTransfer) { }
  public options: DocumentViewerOptions = {
    title: 'My PDF'}

    
  ngOnInit() {
    this.document.viewDocument('assets/test.pdf', 'application/pdf', this.options)

  }

read(){
  let option : DocumentViewerOptions ={
    title: ''
  };
  this.document.viewDocument('assets/test.pdf', 'application/pdf', this.options)

}

}
