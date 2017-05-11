import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';

import { WelcomePage } from '../pages/welcome/welcome';
import { Speakers2Page } from '../pages/speakers2/speakers2';
import { ParticipantsPage } from '../pages/participants/participants';

import { ProgramsPage } from '../pages/programs/programs';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SpeakersPage } from '../pages/speakers/speakers';
import { DetailsPage } from '../pages/details/details';
import { DetailsspeakPage } from '../pages/detailsspeak/detailsspeak';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {MomentModule} from 'angular2-moment';
import { IonicImageViewerModule } from 'ionic-img-viewer';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '651e23d0'
  },
    'push': {
    'sender_id': '1067818688553',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WelcomePage,
    Speakers2Page,
    ParticipantsPage,
    ContactPage,
    ProgramsPage,
    HomePage,
    TabsPage,
    SpeakersPage,
    DetailsPage,
    DetailsspeakPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    MomentModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WelcomePage,
    Speakers2Page,
    ParticipantsPage,
    ContactPage,
    ProgramsPage,
    HomePage,
    TabsPage,
    SpeakersPage,
    DetailsPage,
    DetailsspeakPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},SocialSharing]
})
export class AppModule {}
