import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detailsspeak page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detailsspeak',
  templateUrl: 'detailsspeak.html'
})
export class DetailsspeakPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	 this.item = navParams.get('item');
     console.log("this page is" + this.item);

  }
  
 

 

}
