import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ProgramsPage } from '../programs/programs';
import { SpeakersPage } from '../speakers/speakers';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ProgramsPage;
  tab4Root: any = SpeakersPage;
  tab5Root: any = ContactPage;

  constructor() {

  }
}
