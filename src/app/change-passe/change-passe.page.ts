import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change-passe',
  templateUrl: './change-passe.page.html',
  styleUrls: ['./change-passe.page.scss'],
})
export class ChangePassePage implements OnInit {

  lastpass: any;
  newpass: any;
  confirmnewpass: any;
  userData: any;
  constructor(
    private toast: ToastController,
    private service: ServiceService,
    private popover : PopoverController,
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.isLogin);

  }
  update(){

    if(this.lastpass!==this.userData.password){
      return this.errorPasse();
    }else if(this.lastpass===this.userData.password){
      if(this.newpass!==this.confirmnewpass){
        return this.passeNotMatch();
      }else{
        const pass ={
          password:this.newpass,
        };
        this.service.changePass(this.userData.idUtilisateur,pass ).subscribe((data)=>{
          this.popover.dismiss();
        });
      }

    }
  }
  cancel(){
    this.popover.dismiss();
  }
  async errorPasse() {
    const toast = await this.toast.create({
      message: 'Erreur! Mot de passe incorrect',
      duration: 3000,
      position: 'middle',
      color:'danger'
    });
    toast.present();
  }
  async passeNotMatch() {
    const toast = await this.toast.create({
      message: 'Erreur! Les mots de passe doivent être identiques',
      duration: 3000,
      position: 'middle',
      color:'danger'
    });
    toast.present();
  }

}
