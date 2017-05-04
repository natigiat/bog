import { Component , ElementRef,} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { DetailsPage } from '../details/details';

/*
  Generated class for the Programs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html'
})
export class ProgramsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public elementRef: ElementRef) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');

    // let today:string = new Date();
    // let dd:number = today.getDate()-4;
    // let mm:number = today.getMonth()+1; 

    // let yyyy:number = today.getFullYear();
    // if(dd<10){
    //     dd='0'+dd;
    // } 
    // if(mm<10){
    //     mm='0'+mm;
    // } 
    // let today:string = dd+'/'+mm;
    
    // console.log(today);
    
    // var dateOn = document.getElementById('ion-card-header').getAttribute('data-value');
    
    // console.log(dateOn);
    // if (today == dateOn){
    //    window.location + + '+ion-card-header';
    // }

    let yOffset = document.getElementById('ion-card-header').offsetTop;
    // document.scrollTo(0, yOffset, 4000)
    window.scrollTo(0, 500);

  }


  public changePage(item) {
    var target = item.currentTarget;
    

    var title = target.parentElement.querySelector('h3').innerText;
    var time = target.parentElement.querySelector('h2').innerText;
    var text = target.parentElement.querySelector('p').innerText;
    var inve = target.parentElement.querySelector('input').value;
    
    var detailInfo = {title:title, time:time, text:text ,inve:inve};
   

    
    this.navCtrl.push(DetailsPage,{
    	item:detailInfo
    });
  }



}


