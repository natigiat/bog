import { Component , ViewChild} from '@angular/core';

import { Platform , NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Slides } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild(Slides) slides: Slides;
  @ViewChild('map') mapElement;
  map: any;

  score = 42;



  constructor(public navCtrl: NavController ,private socialSharing: SocialSharing) {

     

  }

  mySlideOptions = {
    autoplay: 2
  };
  
  ionViewDidLoad(){
  	this.initMap();
  }
  


  initMap() {
        var uluru = {lat: 32.1133141, lng: 34.802199};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
   }

  public changePage() {
   this.navCtrl.push(AboutPage);
  }
  

  regularShare(){
    // share(message, subject, file, url)
    this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", "tfa - test", "//lln.tfaforms.net/forms/get_image/1/0c85efb007f37b40300826e79db0ceef-bnr1.png", "//lln.tfaforms.net/forms/get_image/1/0c85efb007f37b40300826e79db0ceef-bnr1.png"); 
  }
  
  


  
}
