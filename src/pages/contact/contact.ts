import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators ,FormControl } from '@angular/forms';

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



}


