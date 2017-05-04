import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ProgramsPage } from '../pages/programs/programs';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SpeakersPage } from '../pages/speakers/speakers';
import { DetailsPage } from '../pages/details/details';
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
    ContactPage,
    ProgramsPage,
    HomePage,
    TabsPage,
    SpeakersPage,
    DetailsPage,
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
    ContactPage,
    ProgramsPage,
    HomePage,
    TabsPage,
    SpeakersPage,
    DetailsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},SocialSharing]
})
export class AppModule {}
