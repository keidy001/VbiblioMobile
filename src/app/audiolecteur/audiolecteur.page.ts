import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-audiolecteur',
  templateUrl: './audiolecteur.page.html',
  styleUrls: ['./audiolecteur.page.scss'],
})
export class AudiolecteurPage implements OnInit {

  livre: any;
  audio: any;
  img: any;
  moreLivre: any;
  photo: any;
  constructor(

        public    media:       Media,
        public    platform:    Platform,
        public    service:     ServiceService,
        public    route:       ActivatedRoute,
        public    modalCtrl:   ModalController,

    ) {
      }

  ngOnInit() {

        this.read();
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.photo = this.service.img;
        this.getMore();
        this.modalCtrl.dismiss({


      });



  }
  read(){

        this.audio = this.service.audiofile+'/'+this.route.snapshot.params.idLivre;

        this.img = this.service.img+this.route.snapshot.params.idLivre;

        this.service.livreById(this.route.snapshot.params.idLivre).subscribe((data)=>{
        this.livre = data;

   });
  }

  getMore(){
    this.service.livreByFormatNotDeleted('AudioBook', false).subscribe((data)=>{
      this.moreLivre = data;
    });
  }
}
