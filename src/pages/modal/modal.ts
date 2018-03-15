import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string="";
  edad:number=0;
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.nombre=this.navParams.get("nombre");
    this.edad=this.navParams.get("edad");
    console.log(" "+this.nombre+" "+this.edad);
  }

  private cerrar_con_parametros(){
    let data={
      nombre: "Rodrigo",
      edad:21,
      coord:{
        lat:10,
        lng:-10,
      }
    };
    this.viewCtrl.dismiss( data );
  }

  private cerrar_sin_parametros(){
    this.viewCtrl.dismiss();
  }

}
