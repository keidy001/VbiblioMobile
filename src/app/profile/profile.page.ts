import { EditProfilePage } from './../edit-profile/edit-profile.page';
import {  PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData:any;
  constructor(
    private popoverCtrl:PopoverController
  ) { }

  ngOnInit() {

    this.userData =JSON.parse(localStorage['isLogin']);
  }

 async edit(){
    const popover = await this.popoverCtrl.create({
      component: EditProfilePage,
      
    })

    return popover.present();
    
  }

}
