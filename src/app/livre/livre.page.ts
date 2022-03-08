import { DetailPage } from './../detail/detail.page';
import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { DetailLivrePage } from '../detail-livre/detail-livre.page';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage implements OnInit {
  livrefile: any;
  photo: any;
  listLivre: any[] = [];
  format: any;
  idLivre: any;
  slideImg:any;

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router,
    private popCtrl: PopoverController,
    private modalctrl:ModalController

  ) {}

  ngOnInit() {
    this.slideImg=["cover1.jpg","cover3.jpg","cover.jpg"];

    this.livrebyformat(this.route.snapshot.params.format);
    this.format = this.route.snapshot.params.format;
    this.livrefile = this.service.livrefile;
    this.photo = this.service.img;
  }

  //content of popover
  async detailLivre(idLivre: any ) {

    const modal = await this.popCtrl.create({
      component: DetailLivrePage,
      cssClass:'popoverCss',
      componentProps: {
        idLivre: idLivre,
      },
    });
    return modal.present();
  }

  //end popover
  livrebyformat(format: string) {
    this.service.livreByFormat(format).subscribe((data: any) => {
      this.listLivre = data;
      console.log('content' + JSON.stringify(this.listLivre));
    });
  }
}
