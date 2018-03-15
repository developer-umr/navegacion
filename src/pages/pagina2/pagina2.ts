import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Pagina3Page} from "../index.paginas";
@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any=Pagina3Page;
  mutantes:any[]=[{
    nombre:"JEAN",
    poder:"Psiquico"
  },{
    nombre:"Wolverine",
    poder:"Regeneración acelerada"
  },
{
  nombre: "Profesor X",
  poder: "poderes Psiquicos"
},{
  nombre:"Tormenta",
  poder: "Manipulación de la naturaleza"
}]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private irPagina3(mutante:any){
    //console.log(mutante);
    this.navCtrl.push(Pagina3Page, {'personaje':mutante});
  }
}
