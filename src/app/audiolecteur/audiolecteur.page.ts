import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-audiolecteur',
  templateUrl: './audiolecteur.page.html',
  styleUrls: ['./audiolecteur.page.scss'],
})
export class AudiolecteurPage implements OnInit {

  livre:any;
  audio:any;
  img:any;

  constructor(
    public media: Media, 
    public platform: Platform,
    public service :ServiceService,
    public route : ActivatedRoute
    ) {
      }

  ngOnInit() {
    this.read();


  }
  read(){
   this.audio = this.service.livrefile+"/"+this.route.snapshot.params["idLivre"]
   this.img = this.service.img+this.route.snapshot.params["idLivre"]

   this.service.livreById(this.route.snapshot.params['idLivre']).subscribe((data)=>{
     this.livre = data;
   })
  }

}
