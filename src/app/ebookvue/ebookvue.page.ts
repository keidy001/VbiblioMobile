import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../service.service';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import { NavController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-ebookvue',
  templateUrl: './ebookvue.page.html',
  styleUrls: ['./ebookvue.page.scss'],
})


export class EbookvuePage implements OnInit {
  livre:any;
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    shouldPauseOnSuspend : 'yes', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'yes', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only  
    toolbarcolor:'blue',
};



  constructor(
    private document: DocumentViewer, 
    private navCtrl :NavController, 
    private file :File, 
    private transfer : FileTransfer,
    private iab: InAppBrowser,
    private service : ServiceService,
    private route :ActivatedRoute,
    ) { }


    
  ngOnInit() {
   this.read();

  }
  
read1(){
  
  this.iab.create('assets/test.pdf').show();
  // let option : DocumentViewerOptions ={
  //   title: ''
  // };
  // this.document.viewDocument('assets/test.pdf', 'application/pdf', this.options)

}


public openWithSystemBrowser(url : string){
  let target = "_system";
  this.iab.create(url,target,this.options);
}
public read(){
  let target = "_self";
  this.iab.create(this.service.livrefile+"/"+this.route.snapshot.params["idLivre"] ,target,this.options).show();
  console.log(this.service.livrefile+"/"+this.route.snapshot.params["idLivre"]);
  
}
public openWithCordovaBrowser(url : string){
  let target = "_self";
  this.iab.create(url,target,this.options);
}  

}
