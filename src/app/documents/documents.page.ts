import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  memoires: any;
  articles: any;
  constructor(
    public service: ServiceService

  ) { }

  ngOnInit() {
    this.service.livreByFormat('Article').subscribe((data)=>{
      this.articles = data;
    });

  this.service.livreByFormat('Memoire').subscribe((data)=>{
    this.memoires = data;
  });
  }

}
