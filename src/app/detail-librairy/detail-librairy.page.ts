import { ServiceService } from './../service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-librairy',
  templateUrl: './detail-librairy.page.html',
  styleUrls: ['./detail-librairy.page.scss'],
})
export class DetailLibrairyPage implements OnInit {
 slidesOptions = {
    slidesPerView: 1.5
  };
  id: number;
  livre: any;
  constructor(
    private route: ActivatedRoute,
    private service: ServiceService
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getLibrairy(this.route.snapshot.params.id);
  }

  getLibrairy(id: any){
    this.service.getLivreByLibrairy(id).subscribe((data)=>{
      this.livre = data;
      console.log(this.livre);

    });
  }
}
