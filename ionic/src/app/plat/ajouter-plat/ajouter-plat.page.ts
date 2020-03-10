import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../../Models/plat';
import {PlatService} from '../../service/plat.service';
import { ToastController } from '@ionic/angular';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-ajouter-plat',
  templateUrl: './ajouter-plat.page.html',
  styleUrls: ['./ajouter-plat.page.scss'],
})
export class AjouterPlatPage implements OnInit {

  plat: Plat;
  constructor(private service: PlatService, private toast: ToastController, private route: Router, private utils: UtilsService) {
    this.plat= new Plat();
   }

  ngOnInit() {
  }


  ajouterPlat():void {
    console.log(this.plat);
    this.service.postPlat(this.plat).subscribe(plat =>{
       this.utils.presentToast("Plat ajouté avec succés","success");
      this.route.navigateByUrl('/tabs/plat');
    },error=>{
       this.utils.presentToast("Une erreur est survenue","danger");
    })
  }

}
