import { OptionpopComponent } from './../optionpop/optionpop.component';
import { OptionpopPage } from './../optionpop/optionpop.page';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../service.service';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-ebookvue',
  templateUrl: './ebookvue.page.html',
  styleUrls: ['./ebookvue.page.scss'],
})


export class EbookvuePage implements OnInit {
title = 'Test';
public page = 2 ;
public pageLabel!: string;
  idLivre: number;
  livre: any;
  pdfSrc: any;

  constructor(

    private     document:   DocumentViewer,
    private     navCtrl:    NavController,
    private     file:       File,
    private     transfer:   FileTransfer,
    private     service:    ServiceService,
    private     route:      ActivatedRoute,
    private     modalCtrl:  ModalController,
    private     popover:    PopoverController,

    ) {
     }



  ngOnInit() {

     this.srcpdf(this.route.snapshot.params.idLivre);

     this.pdfSrc = this.service.livrefile+'/'+this.route.snapshot.params.idLivre;

     this.modalCtrl.dismiss();
  }

  srcpdf(id: number){

    this.service.livreById(id).subscribe((data)=>{

    this.livre = data;

    console.log(this.livre);

  });
}

async option(tr: any) {

  const pop = await this.popover.create({
    component: OptionpopPage,
    trigger:tr,
    cssClass:'popOption',
    side:'start',

    componentProps: {

    },
  });
  return pop.present();
}

}
