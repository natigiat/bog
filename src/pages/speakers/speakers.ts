import { Component , ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsspeakPage } from '../detailsspeak/detailsspeak';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public elementRef: ElementRef) {}

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
