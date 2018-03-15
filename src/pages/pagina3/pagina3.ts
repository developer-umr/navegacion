import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {
  mutante: any = {};
  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }
  constructor(private navParams: NavParams, private navCtrl:NavController) {
    console.log(navParams);
    this.mutante = this.navParams.get("personaje");
  }

  private irAtras(){
    this.navCtrl.pop();
  }

  private irRoot(){
    this.navCtrl.popToRoot();
  }
}