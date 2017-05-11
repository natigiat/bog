import { Component ,ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams , Content} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { DetailsPage } from '../details/details';
import * as $ from "jquery";
/*
  Generated class for the Programs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html'
})
export class ProgramsPage{
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams , public elementRef: ElementRef) {}
  



  ionViewDidLoad() {
     
    $('.showInfo').hide();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 

    var yyyy= today.getFullYear();
    if(dd<10){
        let dd='0'+dd;
    } 
    if(mm<10){
        let mm='0'+mm;
    } 
    let today= dd+'/'+mm;
    
    console.log(today);


    $('body').on("click" ,'.moreCon', function(){
        console.log(22);
        var iconType = $(this).find("ion-icon");
         if(iconType.hasClass("ion-md-add")){
           $(this).closest(".moreCon").parent().next(".showInfo").show();
           $(this).find(".button-inner").find("ion-icon").attr("class" , "icon icon-md ion-md-remove");
         }else{
           $(this).closest(".moreCon").parent().next(".showInfo").hide();
           $(this).find(".button-inner").find("ion-icon").attr("class" , "icon icon-md ion-md-add");
         }
        
    });

    // $('body').on("click" , '.ion-md-remove',function(){
    //     console.log(22);
        
    // });

    $('.dayTalks').each(function(index, el) {
        console.log($(this).data("value"));
        var thisDay = $(this).data("value");
        var target = $(this);

        if (thisDay == today){
           
          console.log($(this));
          $(this).next(".showInfo").show();
        }
    });


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


