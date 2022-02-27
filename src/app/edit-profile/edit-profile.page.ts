import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  nom :string;
  prenom:string;
  email:string;
  telephone:number;
  login:string;
  userData: any;
  constructor(
    private userService :ServiceService,
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage['isLogin'])
  }

  getUser

  update(){
    console.log(this.userData);
    console.log(this.userData.idUtilisateur);
    
    this.userService.updateUser(this.userData.idUtilisateur, this.userData)
  }
}
