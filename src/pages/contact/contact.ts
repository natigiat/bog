import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators ,FormControl } from '@angular/forms';


import { WelcomePage } from '../welcome/welcome';
import { Speakers2Page } from '../speakers2/speakers2';
import { ParticipantsPage } from '../participants/participants';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public registrationForm:any;
  
  constructor(public navCtrl: NavController) {
     // this.registrationForm = this._form.group({
     //     "email" : ["" , Validators.required],
     //     "password" : ["" , Validators.required]
     // })

  }

  onSubmit(formData) {
      console.log('Form submission is ', formData);
  };


  public changePage(page) {
   
   console.log(page);
   if(page == "WELCOME"){
      this.navCtrl.push(WelcomePage);
   }
   else if(page == "SPEAKERS"){
      this.navCtrl.push(Speakers2Page);
   }
   else if(page == "PARTICIPANTS"){
      this.navCtrl.push(ParticipantsPage);
   }
   // this.navCtrl.push(AboutPage);
  }




}


