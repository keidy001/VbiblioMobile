import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { ChoixPaymentPage } from '../choix-payment/choix-payment.page';
import { LivrePage } from '../livre/livre.page';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.page.html',
  styleUrls: ['./detail-livre.page.scss'],
})
export class DetailLivrePage implements OnInit {
  @Input() idLivre: number;

  livre: any;
  photo: any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router,
    private livreTs: LivrePage,
    private popCtrl: PopoverController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.photo =this.service.img;
    this.detailLivre();
  }
  detailLivre() {
    this.service.livreById(this.idLivre).subscribe((data: any)=>{
      this.livre = data;
      console.log('Detail'+ JSON.stringify(this.livre));
    });}

  close(){
    this.modalCtrl.dismiss({

  });
  }
   async choix(idLivre){

      const modal = await this.popCtrl.create({
        component: ChoixPaymentPage,
        cssClass:'popoverCss',
        componentProps: {
          idLivre,
        },
      });
      return modal.present();

  }

  rate(idLIvre: number){}

  }
