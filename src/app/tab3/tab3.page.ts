import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }
  
  
  openLinkedIn = async () => {
    await Browser.open({ url: 'https://www.linkedin.com/in/technologic' });
  };
  
  openGithub = async () => {
    await Browser.open({ url: 'https://github.com/JavaVista' });
  };

  openSlides = async () => {
    await Browser.open({ url: 'https://docs.google.com/presentation/d/1O5a6raDueOwbq9_i_tZ1kD6ba776WUi0HgzzrVkzRYE/edit?usp=sharing' });
  };

  openTwitter = async () => {
    await Browser.open({ url: 'https://twitter.com/seetechnologic' });
  };

}
