import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsspeakPage } from '../detailsspeak/detailsspeak';


@Component({
  selector: 'page-speakers2',
  templateUrl: 'speakers2.html'
})
export class Speakers2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public changePage(item) {
    var target = item.currentTarget;
    
    
    var bio = target.querySelector('input').value;
    var image = target.querySelector('img').src;
    var name = target.querySelector('h2').innerText;


    var detailInfo = {name:name , bio :bio , image:image};
   
    console.log(target);
    console.log(image);
    
    this.navCtrl.push(DetailsspeakPage,{
    	item:detailInfo
    });
  }


}
