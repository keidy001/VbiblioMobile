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

  constructor(
    public media: Media,
    public platform: Platform,
    public service: ServiceService,
    public route: ActivatedRoute,
    public modalCtrl: ModalController,
    ) {
      }

  ngOnInit() {
    this.read();
        this.modalCtrl.dismiss({


      });



  }
  read(){
   this.audio = this.service.audiofile+'/'+this.route.snapshot.params.idLivre;
   this.img = this.service.img+this.route.snapshot.params.idLivre;
   this.service.livreById(this.route.snapshot.params.idLivre).subscribe((data)=>{
     this.livre = data;
     console.log(data);
      console.log(this.livre);

   });
   this.modalCtrl.dismiss({

  });
  }

}
