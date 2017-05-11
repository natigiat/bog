import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsspeakPage } from '../detailsspeak/detailsspeak';

/*
  Generated class for the Participants page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

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
