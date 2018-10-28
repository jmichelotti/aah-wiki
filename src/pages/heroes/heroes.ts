import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeroesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {
  public heroesList = [
    { title: 'Hilt'}, 
    { title: 'Vexx'},
    { title: 'Kind Lenny'},
    { title: 'Boomer Badlad'},
    { title: 'Wendle'},
    { title: 'Lia'},
    { title: 'Uno'},
    { title: 'Bellylarf'},
    { title: 'Sam'},
    { title: 'Nanna'},
    { title: 'V'},
    { title: 'Handsum Jim'},
    { title: 'Tam'},
    { title: 'Redroh'}

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('**herosList', this.heroesList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesPage');
  }

}
