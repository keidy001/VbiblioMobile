import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
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
  photo:any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    public alert: AlertController,
    private router: Router,
    private livreTs:LivrePage,
    private popCtrl:PopoverController,
  ) { }

  ngOnInit() {
    this.photo =this.service.img;
    this.detailLivre()
    console.log("test for id "+ this.livre )
  }
  detailLivre() {
    this.service.livreById(this.idLivre).subscribe((data:any)=>{
      this.livre = data;
      console.log('Detail'+ JSON.stringify(this.livre));
    });}

  
}