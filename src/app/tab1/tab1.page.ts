import { Component, ViewChild } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonAccordionGroup } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  constructor() { }

  openDevFestRegistration = async () => {
    await Browser.open({ url: 'https://gdg.community.dev/events/details/google-gdg-miami-presents-devfest-florida-2022' });
  };
  
  openDevFest = async () => {
    await Browser.open({ url: 'https://devfestflorida.com' });
  };

  onCloseAccordion = () => {
    this.accordionGroup.value = 'resources';
  };

  openSDK = async () => {
    await Browser.open({ url: 'https://ionic.io/sdk' });
  };

  openFramework = async () => {
    await Browser.open({ url: 'https://ionic.io/framework' });
  };

  openCapacitor = async () => {
    await Browser.open({ url: 'https://capacitorjs.com' });
  };

  openNg = async () => {
    await Browser.open({ url: 'https://angular.io' });
  };

  openCodelab = async () => {
    await Browser.open({ url: 'https://docs.google.com/document/d/1wK08fBhKyhz88bx7-mIDXQSTZAq5tmko/edit?usp=sharing&ouid=103343524775880660503&rtpof=true&sd=true' });
  };

}

